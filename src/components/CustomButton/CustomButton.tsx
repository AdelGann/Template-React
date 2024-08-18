import React from "react";
import style from "./CustomButton.module.css";

interface CustomButtonProps {
	icon?: string;
	text: string;
	shortcut?: string;
	backgroundButton?: string;
	height?: string;
	colorP?: string;
	sizeP?: string;
	onClick?: () => void;
	additionalClassName?: string;
	type?: any;
	iconWidth?: number;
}

export const CustomButton = ({
	icon,
	text,
	shortcut,
	backgroundButton = "#fff",
	height = "auto",
	colorP = "black",
	sizeP,
	additionalClassName,
	onClick,
	type,
	iconWidth,
}: CustomButtonProps) => {
	const styles: React.CSSProperties = {
		background: backgroundButton,
		height: height,
		color: colorP,
	};
	const stylesP: React.CSSProperties = {
		color: colorP,
		fontSize: sizeP,
		textTransform: "uppercase",
		fontWeight: "500",
	};

	const combinedClassNames = `${style.button__action} ${additionalClassName}`;

	return (
		<button className={combinedClassNames} style={styles} onClick={onClick} type={type}>
			{icon && <img src={icon} alt="icono" width={iconWidth} />}
			<p className={style.button__text} style={stylesP}>
				{text} {shortcut ? `[${shortcut}]` : null}
			</p>
		</button>
	);
};
