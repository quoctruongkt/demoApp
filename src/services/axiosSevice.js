import axios from 'axios';
import {db} from './app';

export const HTTP_STATUS = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  UNAUTHENTICATED: 401,
  UNAUTHORIZED: 403,
  GEN_UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_TEMPORARILY_OVERLOADED: 502,
  SERVICE_UNAVAILABLE: 503,
  CONFLICT: 409,
  TOO_MANY_REQUEST: 429,
};
const getData = () => {
  let info = {};
  db.transaction(async tx => {
    await tx.executeSql('select * from users', [], (tx, result) => {
      if (result.rows.length > 0) {
        info = result.rows.item(0);
      }
    });
  });
  return info;
};

class AxiosService {
  cancels = {};

  constructor() {
    const access_token = getData().Token;
    const authHeader = {
      headers: {
        token: access_token,
      },
    };
    const instance = axios.create();

    instance.interceptors.request.use(
      config => {
        const cancelToken = axios.CancelToken.source();
        config.cancelToken = cancelToken.token;

        const key = `${config.method}::${config.url}`;
        if (this.cancels[key]) {
          this.cancels[key]();
        }
        this.cancels[key] = cancelToken.cancel;

        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );

    instance.interceptors.response.use(
      response => {
        switch (response && response.data) {
          case HTTP_STATUS.UNAUTHENTICATED:
            // cleanLocalStorage();
            // window.location.href = ROUTE_PATH_SIGN_IN;
            break;
          default:
        }
        return response;
      },
      error => {
        if (!axios.isCancel(error)) {
          return Promise.reject(error);
        }
      },
    );

    this.instance = instance;

    this.authHeader = access_token ? authHeader : '';
  }

  onSuccess(response) {
    return response;
  }

  onError(error) {
    return Promise.reject(error);
  }

  getRequest(url, params) {
    return this.instance.get(url, {...this.authHeader, params});
  }

  putRequest(url, data) {
    return this.instance.put(url, data, this.authHeader);
  }

  postRequest(url, data) {
    return this.instance.post(url, data, this.authHeader);
  }
}

export default AxiosService;
export const axiosService = new AxiosService();
