import { Link } from "react-router-dom";

import { Logo } from "../../assets/icons/icons";
import SidebarBtn from "../../components/SidebarBtn/SidebarBtn";

import "./Sidebar.scss";

const Sidebar = () => {
	return (
		<div className="Sidebar">
			<Link to="/" className="Logo">
				<Logo />
			</Link>
			<div style={{ marginTop: "50px" }}>
				<SidebarBtn />
			</div>
		</div>
	);
};

export default Sidebar;
