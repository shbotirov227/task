import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IconOpened, IconClosed } from "../../assets/icons/icons";

import "./SidebarBtn.scss";

const SidebarBtn = ({ path, title, icon, openIcon, closeIcon, itemSubnav, item }) => {
	const [subnav, setSubnav] = useState(false);

	const showSubnav = () => setSubnav(!subnav);

	return (
		<Link className="SidebarBtn" to={path} key={item.key} onClick={itemSubnav && showSubnav}>
			<span className="SidebarBtn-title">{icon}{title}</span>

			<div className="isOpenIcon">
				{
				item.subNav && subnav
					? item.openIcon
					: item.subNav
					? item.closeIcon
					: null
				}
			</div>

			<div className="SidebarBtn-dropdown">
			{
				subnav ? (
					item.subNav ? item.subNav.map(el => {
						return <Link to={el.path} className="SidebarBtn">{el.title}</Link>
					}): null
				) : 'lja'
			}
			</div>
		</Link>
	);
};

export default SidebarBtn;
