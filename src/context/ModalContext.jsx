import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [activeProduct, setActiveProduct] = useState(null);

  const openDetailModal = (product) => {
    setActiveProduct(product);
  };

  const closeDetailModal = () => {
    setActiveProduct(null);
  };

  return (
    <ModalContext.Provider value={{ activeProduct, openDetailModal, closeDetailModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
