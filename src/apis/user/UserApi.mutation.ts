import userApi from '@apis/user/UserApi';

import { useMutation } from '@tanstack/react-query';

export const USER_API_MUTATION_KEY = {
  POST: (param?: any) => ['user-post', param],
};

export const usePostRefreshTokenMutation = (params?: any) => {
  return useMutation(userApi.postRefreshToken, {
    ...params?.options,
  });
};

export const usePostSocialLoginMutation = (params?: any) => {
  return useMutation(userApi.postSocialLogin, {
    ...params?.options,
  });
};
export const usePostRegisterMutation = (params?: any) => {
  return useMutation(userApi.postRegister, {
    ...params?.options,
  });
};