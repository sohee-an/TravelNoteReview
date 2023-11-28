import instance from '..';

export const AuthApi = {
  registerApi: async function registerApi(registerUser: any) {
    console.log('register', registerUser);
    try {
      const response = await instance.post('auth/register', registerUser);
      return response;
    } catch (error: any) {
      console.error(error);
    }
  },
  loginApi: async function loginApi(loginUser: any) {
    try {
      const response = await instance.post('auth/login', loginUser);
      return response;
    } catch (error: any) {
      console.error(error);
    }
  },
};
