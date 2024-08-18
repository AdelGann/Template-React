import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import { CustomButton } from "../CustomButton/CustomButton";
import dotsUi from "@/assets/UI/dots-UI.png";
import { Link } from "react-router-dom";
interface SideBarProps {
	position?: string;
	content?: [{ label?: string; icon?: any; link?: string; subContent?: any }];
}

export const AsideComponent = ({ position = "left", content }: SideBarProps) => {
	const [visible, setVisible] = useState<boolean>(false);

	return (
		<>
			<div className="">
				<div>
					<Sidebar visible={visible} position={`${position}`} onHide={() => setVisible(false)}>
						{content &&
							content.map((item) => (
								<div key={item.label || item.link}>
									{item.label && item.link && (
										<Link to={item.link}>
											<p>{item.label}</p>
										</Link>
									)}
									{item.icon && <>{item.icon}</>}
									{item.subContent && <p className="subLabel">{item.subContent}</p>}
								</div>
							))}
					</Sidebar>
				</div>
				<div>
					{!visible && (
						<CustomButton
							icon={dotsUi}
							iconWidth={10}
							onClick={() => setVisible(!visible)}
							text=""
						/>
					)}
				</div>
			</div>
		</>
	);
};
