import { useTranslation } from "react-i18next";

import { Button } from "../button";

import TwemojiFlagIran from "../../icons/TwemojiFlagIran";
import TwemojiFlagUnitedKingdom from "../../icons/TwemojiFlagUnitedKingdom";

export const LanguageButton: React.FC = () => {
  const { i18n } = useTranslation();
  return (
    <Button
      shape="square"
      size="small"
      variant="solid"
      onClick={() => i18n.changeLanguage(i18n.language === "fa" ? "en" : "fa")}
    >
      {i18n.language === "fa" ? (
        <TwemojiFlagUnitedKingdom />
      ) : (
        <TwemojiFlagIran />
      )}
    </Button>
  );
};
