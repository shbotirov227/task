import { useState } from "react";
import { Link } from "react-router-dom";

import SidebarBtn from "../../components/SidebarBtn/SidebarBtn";
import { SidebarData } from "./SidebarData";
import { DarkIcon, FooterIcon, LightIcon, Logo } from "../../assets/icons/icons";

import "./Sidebar.scss";

const Sidebar = () => {
	const [active, setActive] = useState([true, false]);

	return ( 
		<div className="Sidebar">
			<div>
				<Link to="/" className="Logo">
					<Logo />
				</Link>
				<div style={{ marginTop: "50px" }}>
					{SidebarData.map((el, index) => (
						<SidebarBtn
							key={index}
							item={el}
							path={el.path}
							title={el.title}
							icon={el.icon}
							itemSubnav={el.subNav}
						/>
					))}
				</div>
			</div>

			<div className="Sidebar-footer">
				<div className="Sidebar-footer-top">
					<FooterIcon />
					<h4>Help & getting started</h4>
					<span>8</span>
				</div>

				<div className="Sidebar-footer-buttons">
					<button
						className={`btn ${active[0] ? "active" : ""}`}
						onClick={() => setActive([true, false])}>
						<LightIcon />
						Light
					</button>
					<button
						className={`btn ${active[1] ? "active" : ""}`}
						onClick={() => setActive([false, true])}>
						<DarkIcon />
						Dark
					</button>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
