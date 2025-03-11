import { useContext } from "react";

import { Slide, ToastContainer, ToastContainerProps } from "react-toastify";

import { ThemeContext } from "../../provider/theme-provider";

type Props = Partial<ToastContainerProps>;

export const Toaster: React.FC<Props> = (props) => {
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
      {...props}
    />
  );
};
