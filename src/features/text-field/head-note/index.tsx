import { isPersian } from 'methods/str';
import React from 'react';

interface TextFieldHeadNotePropTypes {
  label: string;
  asideDom?: JSX.Element;
}

function TextFieldHeadNote({ label, asideDom }: TextFieldHeadNotePropTypes) {
  return (
    <div
      className={`flex flex-row-reverse items-center justify-between ${
        isPersian(label) ? 'rtl-grid' : ''
      }`}
    >
      {asideDom}
      <label className="text-gray-300 text-sm font-normal mb-1 mr-3">
        {label}
      </label>
    </div>
  );
}

export default TextFieldHeadNote;
