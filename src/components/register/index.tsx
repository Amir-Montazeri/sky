import React, { useState } from 'react';
import axios from 'axios';

import { Form } from 'features';
import { combineApiRoute } from 'api';

function RegisterComponent() {
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
        // return false;
        return true;
      });
  };

  return (
    <div className="w-5/6">
      <Form
        maxStage={4}
        textFields={[
          {
            name: 'phone_number',
            type: 'text',
            className: 'textfield-primary-styles',
            placeholder: 'stage 1',
            stage: 1,
            spaceB: '5px',
          },
          {
            name: 'phone_number2',
            type: 'text',
            className: 'textfield-primary-styles',
            placeholder: 'stage 2',
            stage: 2,
            spaceB: '5px',
          },
          {
            name: 'phone_numbe33r',
            type: 'text',
            className: 'textfield-primary-styles',
            placeholder: 'min - stage 2',
            minStage: 2,
            spaceB: '5px',
          },
          {
            name: 'phone_number23',
            type: 'text',
            className: 'textfield-primary-styles',
            placeholder: 'max stage 2',
            maxStage: 2,
            spaceB: '5px',
          },
        ]}
        onsubmit={handleSubmit}
        submitButtonClassName="primary-submit-button"
        generalErrors={formErrors}
        getCurrentStage={setCurrentStage}
        isLoading={isLoading}
        submitLoadingComponent={<span>Loading......</span>}
        textInnerSubmitButton={[
          {
            stage: 1,
            text: 'go',
          },
        ]}
      />
    </div>
  );
}

export default RegisterComponent;
