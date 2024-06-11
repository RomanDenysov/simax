import React, { PropsWithChildren } from "react";
import ModalLayout from "./ModalLayout";
import { ModalProps } from "@/hooks/useModal";

interface ModalComponentProps extends PropsWithChildren<ModalProps> {}

const ModalComponent = ({ children, ...layoutProps }: ModalComponentProps) => {
	return <ModalLayout {...layoutProps}>{children}</ModalLayout>;
};

export default ModalComponent;
