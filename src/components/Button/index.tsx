import { ButtonWrapper } from "./Button.style";

export type ButtonType = "primary" | "dark" | "disabled";
export type ButtonSizeType = "sm" | "lg" | "xl";

export interface ButtonProps {
	type: ButtonType;
	size: ButtonSizeType;
	text?: string;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
	type,
	size,
	text = "Button",
	onClick,
}) => {
	return <ButtonWrapper size={size}>{text}</ButtonWrapper>;
};

export default Button;
