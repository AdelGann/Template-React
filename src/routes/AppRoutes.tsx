import { AsideComponent } from "@/components/AsideComponent/AsideComponent";
import { Dashboard } from "@/views/Dashboard/Dashboard";
import { Main } from "@/views/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<AsideComponent content={content} />
			<Routes>
				<Route path="/inicio" element={<Main />} />
				<Route path="/Dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
};
const content: any = [
	{ label: "Inicio", icon: "", link: "/inicio" },
	{ label: "Dashboard", icon: "", link: "/Dashboard" },
	{ label: "Tienda", icon: "", link: "/contact" },
];
