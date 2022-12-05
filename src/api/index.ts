type ApiRoutes = 'login-setNumber' | 'login-setOtp' | 'login-setPassword';

export const baseApiUrl = '',
  apiRoutes = {
    auth: {
      login: {
        setPhoneNumber: 'users/login/',
        setOtp: 'users/login/otp/',
        setPassword: 'users/login/password/',
      },
    },
  },
  combineApiRoute = (type: ApiRoutes) => {
    let apiRoute: string;

    switch (type) {
      case 'login-setNumber':
        apiRoute = apiRoutes.auth.login.setPhoneNumber;
        break;
      case 'login-setOtp':
        apiRoute = apiRoutes.auth.login.setOtp;
        break;
      case 'login-setPassword':
        apiRoute = apiRoutes.auth.login.setPassword;
        break;
      default:
        throw new Error(
          '`type` used in combineApiRoute method is not defined!'
        );
        break;
    }

    return baseApiUrl + apiRoute;
  };
