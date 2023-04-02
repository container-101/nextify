export const Capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatPhoneNumber = (number: string): string => {
  const trimmed = number.replace(/\D/g, "");
  if (trimmed.length >= 10) {
    return trimmed.replace(/(\d{2})(\d{4})(\d{4,})/, "$1 $2 $3");
  } else if (trimmed.length >= 4) {
    return trimmed.replace(/(\d{3})(\d+)/, "$1 $2");
  } else {
    return trimmed;
  }
};
