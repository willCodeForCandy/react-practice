const Tabs = ({ children, buttons, buttonsContainer = 'menu' }) => {
  const ButtonsContainer = buttonsContainer;
  //! el nombre de un custom component tiene que empezar en mayuscula
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
