import { Outlet } from "react-router";

import { Footer } from "../components/footer";
import { Header } from "../components/header";

import styles from "./root-layout.module.css";

export const RootLayout: React.FC = () => {
  return (
    <div className={styles["root-layout"]}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
