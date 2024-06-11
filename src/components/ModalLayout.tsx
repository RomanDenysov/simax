import { ModalProps } from "@/hooks/useModal";
import React, { PropsWithChildren } from "react";

interface ModalLayoutProps extends PropsWithChildren<ModalProps> {}

const ModalLayout = ({ onClose, onOpen, children }: ModalLayoutProps) => {
	if (!open) return null;
	return (
		<center
			onClick={onClose}
			className="h-screen w-full fixed bg-black/30 flex items-center justify-center"
		>
			<center
				onClick={(e) => e.stopPropagation()}
				className="bg-white text-black max-w-xl w-full p-5 rounded-xl shadow-xl"
			>
				{children}
			</center>
		</center>
	);
};

export default ModalLayout;
