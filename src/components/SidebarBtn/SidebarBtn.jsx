import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IconOpened, IconClosed, BtnIcon, ArrowRight } from "../../assets/icons/icons";

import "./SidebarBtn.scss";

const SidebarBtn = ({ path, title, icon, itemSubnav }) => {
	const [ subnav, setSubnav ] = useState(false);
	const [ activePage, setActivePage ] = useState(false);

	const showSubnav = () => setSubnav(!subnav);

	return (
		<Link className={`SidebarBtn ${activePage ? "activePage" : ""}`} to={path} onClick={itemSubnav && showSubnav}>
			<div className="SidebarBtn-inner">
				<span className="SidebarBtn-title">{icon}{title}</span>

				<div className="isOpenIcon">
					{ itemSubnav && subnav ? <IconClosed /> : itemSubnav ? <IconOpened /> : null }
				</div>
			</div>

			<div className="SidebarBtn-dropdown">
				{subnav ? (itemSubnav ? itemSubnav.map(el => (
					<Link to={el.path} className="SidebarBtn-dropdownBtn">
						<div className="BtnIcon">
							<BtnIcon />
							<ArrowRight />
						</div>
						{el.title}
					</Link>
				)): null) : null}
			</div>
		</Link>
	);
};

export default SidebarBtn;
