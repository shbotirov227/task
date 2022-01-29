import { Link } from "react-router-dom";

import { Logo } from "../../assets/icons/icons";
import SidebarBtn from "../../components/SidebarBtn/SidebarBtn";
import { SidebarData } from "./SidebarData";
import { IconOpened, IconClosed } from "../../assets/icons/icons";

import "./Sidebar.scss";

const Sidebar = () => {
	return (
		<div className="Sidebar">
			<Link to="/" className="Logo">
				<Logo />
			</Link>
			<div style={{ marginTop: "50px" }}>
				{SidebarData.map((el, index) => (
					<SidebarBtn
						item={el}
						path={el.path}
						title={el.title}
						icon={el.icon}
						key={index}
						itemSubnav={el.subNav}
						openIcon={IconOpened}
						closeIcon={IconClosed}
					/>
				))}
			</div>

			<div className="Sidebar-footer">
				<h4>Help & getting started</h4>
				<span>8</span>
			</div>
		</div>
	);
};

export default Sidebar;
