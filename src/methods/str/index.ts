export const isPersian = (text: string): boolean => {
  const persianChar =
    /[\u0590-\u083F]|[\u08A0-\u08FF]|[\uFB1D-\uFDFF]|[\uFE70-\uFEFF]/gm;
  const textIsPersian = text.match(persianChar);

  return textIsPersian ? true : false;
};
