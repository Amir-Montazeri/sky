type ThemesType = 'dark' | 'light';

type ArrayOneOrMore<T> = {
  0: T;
} & Array<T>;
