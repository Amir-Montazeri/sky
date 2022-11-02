type PreparedTextFieldClassnames = 'textfield-primary-styles';

type TextFieldTypes = (TextFieldTypeText | TextFieldTypePassword) &
  TextFieldCommonProps;

interface TextFieldCommonProps {
  className?: PreparedTextFieldClassnames | string;
  spaceX?: string;
  spaceY?: string;
  spaceT?: string;
  spaceR?: string;
  spaceB?: string;
  spaceL?: string;
  name?: string;
  label?: string;
}

interface TextFieldTypeText extends TextFieldCommonProps {
  type: 'text';
  placeholder?: string;
}

interface TextFieldTypePassword extends TextFieldCommonProps {
  type: 'password';
  placeholder?: string;
  canShow?: boolean;
  showToggleClassName?: string;
}
