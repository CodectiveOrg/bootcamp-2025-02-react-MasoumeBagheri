import { useContext } from "react";
import { Slide, ToastContainer, ToastContainerProps } from "react-toastify";
import { useTranslation } from "react-i18next";

import { ThemeContext } from "../../provider/theme-provider";

type Props = Partial<ToastContainerProps>;

export const Toaster: React.FC<Props> = (props) => {
  const { i18n } = useTranslation();

  const { theme } = useContext(ThemeContext);

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl={i18n.dir() === "rtl"}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
      transition={Slide}
      aria-label={undefined}
      {...props}
    />
  );
};
