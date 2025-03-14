import { useTranslation } from "react-i18next";
import styles from "./header.module.css";

export const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <h1>{t("app.title")}</h1>
    </header>
  );
};
