import { StageAbleTextField } from './textfield';

type FormPropTypes = FormGeneralPropTypes & FormUniquePropTypes;

interface FormGeneralPropTypes {
  submitButton: React.ReactNode;
  onsubmit: (k: unknown) => void;
}

type FormUniquePropTypes =
  | {
      maxStage: number;
      textFields: StageAbleTextField[];
    }
  | {
      maxStage?: undefined;
      textFields: Omit<StageAbleTextField, 'stage'>[];
    };
