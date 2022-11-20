import React from 'react';

import { Form } from 'features';
import { loginFormTextFields } from 'static-data/auth';

function LoginComponent() {
  return (
    <div className="w-5/6">
      <Form
        maxStage={3}
        textFields={loginFormTextFields}
        onsubmit={console.log}
        submitButton={
          <button className="bg-blue-700 rounded-lg dark:hover:bg-transparent text-white h-11 w-full flex items-center justify-center font-medium border-2 mt-6 border-blue-700 hover:bg-white hover:text-blue-700 transition duration-200">
            ورود
          </button>
        }
      />
    </div>
  );
}

export default LoginComponent;
