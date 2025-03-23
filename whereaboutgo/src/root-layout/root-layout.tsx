import { Outlet } from "react-router";

import { Header } from "../component/header";
import { Footer } from "../component/footer";

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
