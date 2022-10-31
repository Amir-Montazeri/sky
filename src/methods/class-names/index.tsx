import { isPersian } from 'methods/str';

export const textDirectionClassName = (innerText: string): 'rtl-grid' | '' => {
  const textIsPersian = isPersian(innerText);
  const className = textIsPersian ? 'rtl-grid' : '';

  return className;
};
