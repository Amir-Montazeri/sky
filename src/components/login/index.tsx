import React, { useState } from 'react';
import axios from 'axios';

import { Form } from 'features';
import { loginFormTextFields } from 'static-data/auth';
import { combineApiRoute } from 'api';

function LoginComponent() {
  const [formErrors, setFormErrors] = useState<Errors | undefined>(undefined),
    [isLoading, setIsLoading] = useState(false),
    [currentStage, setCurrentStage] = useState(0);

  const handleSubmit = async (data: object): Promise<boolean> => {
    setIsLoading(true);
    const apiRoute =
      currentStage === 1
        ? combineApiRoute('login-setNumber')
        : currentStage === 2
        ? combineApiRoute('login-setOtp')
        : currentStage === 3
        ? combineApiRoute('login-setPassword')
        : '';
    return await axios
      .post(apiRoute, data)
      .then((res) => {
        setIsLoading(false);
        return true;
      })
      .catch((err) => {
        setIsLoading(false);
        return false;
      });
  };

  return (
    <div className="w-5/6">
      <Form
        maxStage={3}
        textFields={loginFormTextFields}
        generalErrors={formErrors}
        onsubmit={handleSubmit}
        getCurrentStage={setCurrentStage}
        isLoading={isLoading}
        submitButtonClassName="primary-submit-button"
        textInnerSubmitButton={[
          {
            stage: 1,
            text: 'set number',
          },
          {
            stage: 2,
            text: 'set otp',
          },
          {
            stage: 3,
            text: 'create account',
          },
        ]}
      />
    </div>
  );
}

export default LoginComponent;
