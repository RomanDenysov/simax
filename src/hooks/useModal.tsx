import { useState } from "react";

export interface ModalProps {
	visible: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useModal = (): ModalProps => {
	const [visible, setIsVisible] = useState<boolean>(false);
	const handleOpenModal = () => setIsVisible(true);
	const handleCloseModal = () => setIsVisible(false);

	return { visible, onOpen: handleOpenModal, onClose: handleCloseModal };
};

export default useModal;
