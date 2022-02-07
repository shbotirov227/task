import React from "react";
import { Dot } from "../../assets/icons/icons";
import "./Account.scss";

const Account = ({ img, name, text, date, fill, status }) => {
	return (
		<div className="Account">
			{status ? <span className="Account-status"></span> : undefined}
			<img className="Account-img" src={img} alt="" />

			<div className="Account-titles">
				<div className="Account-titles-top">
					<h4 className="Account-name">{name}</h4>
					<span className="Account-date">
						{date}
						<Dot fill={fill} />
					</span>
				</div>
				<p className="Account-text">{text}</p>
			</div>
		</div>
	);
};

export default Account;
