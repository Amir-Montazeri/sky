interface TextFieldType<T extends TextFieldTypes> {
  placeholder?: string;
}

type TextFieldTypes = 'text' | 'number';
