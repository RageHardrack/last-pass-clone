const useModal = () => {
  const isOpen = useState("isOpen", ()=> false);

  const openModal = () => (isOpen.value = true);

  const closeModal = () => (isOpen.value = false);

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
