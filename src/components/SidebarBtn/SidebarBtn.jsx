import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IconOpened, IconClosed, BtnIcon, ArrowRight } from "../../assets/icons/icons";

import "./SidebarBtn.scss";

const SidebarBtn = ({ path, title, icon, openIcon, closeIcon, itemSubnav, item }) => {
	const [subnav, setSubnav] = useState(false);

	const showSubnav = () => setSubnav(!subnav);

	return (
		<Link className="SidebarBtn" to={path} key={item.key} onClick={itemSubnav && showSubnav}>
			<div className="SidebarBtn-inner">
				<span className="SidebarBtn-title">{icon}{title}</span>

				<div className="isOpenIcon">
					{ item.subNav && subnav ? openIcon : item.subNav ? closeIcon : null }
				</div>
			</div>

			<div className="SidebarBtn-dropdown">
				{subnav ? (item.subNav ? item.subNav.map(el => (
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
