interface TextFieldType<T extends TextFieldTypes> {
  placeholder?: string;
}

type TextFieldAvailableTypes = 'text' | 'number';

type TextFieldTypes = TextFieldTypeText | TextFieldTypeNumber;

interface TextFieldTypeText {
  type: 'text';
  placeholder?: string;
}

interface TextFieldTypeNumber {
  type: 'number';
  min?: number;
}
