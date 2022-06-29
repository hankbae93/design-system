import styled, { css } from "styled-components";
import { ButtonProps, ButtonSizeType, ButtonType } from ".";

const ButtonDefaultCss = css`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background: none;
`;

export const ButtonWrapper = styled.button<{ size: ButtonSizeType }>`
	${ButtonDefaultCss}

	padding: ${({ size }) => {
		if (size === "sm") return "0.5em 1em";
		if (size === "lg") return "1em 2em";
		if (size === "xl") return "1.5em 3em";
	}};

	font-size: ${({ size }) => {
		if (size === "sm") return "14px";
		if (size === "lg") return "16px";
		if (size === "xl") return "18px";
	}};
`;
