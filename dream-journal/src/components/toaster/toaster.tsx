import { useContext } from "react";

import { Slide, ToastContainer } from "react-toastify";

import { ThemeContext } from "../../provider/theme-provider";

export const Toaster: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
      transition={Slide}
      aria-label={undefined}
    />
  );
};
