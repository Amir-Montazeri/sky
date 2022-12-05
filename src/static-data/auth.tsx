import React from 'react';
import { Link } from 'react-router-dom';

import { StageAbleTextField, TextFieldArray } from 'typings/textfield';

export const authPages = [
  { title: 'ورود', linkTo: 'login' },
  { title: 'ثبت نام', linkTo: 'register' },
];

export const loginFormTextFields: StageAbleTextField[] = [
  {
    type: 'text',
    name: 'phone_number',
    placeholder: 'phone number',
    className: 'textfield-primary-styles',
    minStage: 1,
    spaceB: '7px',
    autoFocus: true,
    required: true,
  },
  {
    type: 'password',
    name: 'otp',
    placeholder: 'otp',
    className: 'textfield-primary-styles',
    canShow: true,
    label: 'password',
    stage: 2,
    asidelabel: (
      <Link to="/auth/register" className="text-blue-300 text-xs">
        register
      </Link>
    ),
    required: true,
    autoFocus: true,
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'password',
    className: 'textfield-primary-styles',
    canShow: true,
    stage: 3,
    spaceB: '7px',
    required: true,
    autoFocus: true,
  },
  {
    type: 'password',
    name: 'password_conf',
    placeholder: 'confirm your password',
    className: 'textfield-primary-styles',
    stage: 3,
    required: true,
  },
];
