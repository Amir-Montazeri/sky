import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { addLazy } from 'methods';
import { authPages } from 'static-data/auth';
import { AuthLayout } from 'layouts';

const FourOFour = React.lazy(() => import('pages/singles/error/404')),
  LoginComponent = React.lazy(() => import('components/login')),
  RegisterComponent = React.lazy(() => import('components/register'));

function Auth() {
  const { type } = useParams() as AuthTypes;

  if (
    !type ||
    !authPages.some((availableType) => availableType.linkTo === type)
  ) {
    return <Navigate to={`/auth/${authPages[0].linkTo}`} />;
  }
  return (
    <AuthLayout
      pages={authPages}
      activePage={type}
      title="سلام رفیق!"
      titleNote={
        type === 'login'
          ? 'به خونه خوش اومدی! اگه عضو ما هستی، وارد شو'
          : 'به اینجا خوش اومدی! برای عضویت از راهای زیر رو انتخاب کن'
      }
    >
      {type === 'login'
        ? addLazy(<LoginComponent />)
        : type === 'register'
        ? addLazy(<RegisterComponent />)
        : addLazy(<FourOFour />)}
    </AuthLayout>
  );
}

export default Auth;
