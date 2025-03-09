import {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from "react";

import { AddEditDreamForm } from "../components/Add-Edit-Dream-Form";

import { DreamContext } from "./dream-provider";

import { Dream } from "../types/dream.type";

import styles from "./ModalProvider.module.css";

type ModalContextValue = {
  openModal: (editingDream?: Dream) => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextValue>({
  openModal: () => {},
  closeModal: () => {},
});

type Props = PropsWithChildren;

export const ModalProvider: React.FC<Props> = ({ children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const { addDream, editDream } = useContext(DreamContext);

  const [editingDream, setEditingDream] = useState<Dream>();

  const toggleDialog = (isOpen: boolean): void => {
    if (!dialogRef.current) return;

    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  };

  const onSubmitHandler = (dream: Dream): void => {
    if (editingDream) {
      editDream(dream);
    } else {
      addDream(dream);
    }

    setEditingDream(undefined);

    toggleDialog(false);
  };

  const openModal = (editingDream?: Dream): void => {
    setEditingDream(editingDream);
    toggleDialog(true);
  };

  const closeModal = () => {
    setEditingDream(undefined);
    toggleDialog(false);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <dialog ref={dialogRef} className={styles.dialog}>
        {editingDream && (
          <AddEditDreamForm
            onSubmit={onSubmitHandler}
            editingDream={editingDream}
            toggleDialog={toggleDialog}
          />
        )}

        {!editingDream && (
          <AddEditDreamForm
            onSubmit={onSubmitHandler}
            editingDream={editingDream}
            toggleDialog={toggleDialog}
          />
        )}
      </dialog>
    </ModalContext.Provider>
  );
};
