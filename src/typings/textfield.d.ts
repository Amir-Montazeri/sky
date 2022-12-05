import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types';

type TextFieldTypes = (TextFieldTypeText | TextFieldTypePassword) &
  TextFieldCommonProps;

type TextFieldArray = TextFieldTypes[];

type StageAbleTextField = (
  | {
      stage: number;
      minStage?: undefined;
      maxStage?: undefined;
    }
  | {
      stage?: undefined;
      minStage: number;
      maxStage?: number;
    }
  | {
      stage?: undefined;
      minStage?: number;
      maxStage: number;
    }
  | {
      stage?: undefined;
      minStage: number;
      maxStage: number;
    }
) &
  TextFieldTypes;

interface TextFieldCommonProps {
  name: string;
  className?: PreparedTextFieldClassnames | string;
  spaceX?: string;
  spaceY?: string;
  spaceT?: string;
  spaceR?: string;
  spaceB?: string;
  spaceL?: string;
  label?: string;
  asidelabel?: JSX.Element;
  register?: UseFormRegister<FieldValues>;
  required?: boolean;
  autoFocus?: boolean;
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

type PreparedTextFieldClassnames = 'textfield-primary-styles';
