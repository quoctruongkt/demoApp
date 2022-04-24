import AxiosService from './axiosSevice';

const urlLogin =
  'https://api.dev.monkeyuni.net/api/v1/login-for-book?lang=vi-VN';

export const postLogin = data => {
  const axiosService = new AxiosService();
  return axiosService.postRequest(urlLogin, data);
};
