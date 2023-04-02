export const isClient = () => {
  const result = typeof window === "object";
  return result;
};
