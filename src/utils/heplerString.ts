export const formatNameFieldToLabel = (nameField: string): string => {
  const array = nameField.split("");
  const foundIndexWordUpperCase = array.findIndex(
    (word) => word !== word.toLowerCase()
  );
  if (foundIndexWordUpperCase > -1) {
    array[foundIndexWordUpperCase] = ` ${array[
      foundIndexWordUpperCase
    ].toLowerCase()}`;
  }
  array[0] = array[0].toUpperCase();
  return array.join("");
};
