import { createContext, useContext, useState } from 'react';

type ModalContextType = {
  openModal: (modalName: string) => void;
  closeModal: () => void;
  activeModal: string | null;
};

export const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
  activeModal: null,
});

export const ModalProvider: FC = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalName: string) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, activeModal }}>
      {children}
    </ModalContext.Provider>
  );
};