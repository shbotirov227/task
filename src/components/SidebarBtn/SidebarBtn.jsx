import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

import { IconOpened, IconClosed } from "../../assets/icons/icons";

import "./SidebarBtn.scss";
const SidebarBtn = () => {
	const [show, setShow] = useState(false);

	function showOpen() {
		if (show === false) {
			return <IconClosed />;
		} else if (show === true) {
			return <IconOpened />;
		}
	}

	return (
		<div>
			{SidebarData.map((el) => {
				return (
					<Link
						to={el.path}
						className="SidebarBtn"
						onClick={() => setShow(!show)}>
						<span>
							{el.icon}
							{el.title}
						</span>
						<span className="isOpenIcon">{showOpen}</span>
					</Link>
				);
			})}
		</div>
	);
};

export default SidebarBtn;
