export const getLanguageFromLocalStorage = (): string => {
  const item = localStorage.getItem("language");

  return item === "fa" ? item : "en";
};

export const changeLanguage = (language: string): void => {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "fa" ? "rtl" : "ltr";

  localStorage.setItem("language", language);
};
