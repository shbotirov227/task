import React from "react";
import "./Account.scss";

const Account = ({ img, name, text, date, iconColor, status }) => {
	return (
		<div className="Account">
			<img className="Account-name" src={img} alt="" />

			<div>
				<div>
					<h4>{name}</h4>
					<span>{date}</span>
				</div>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Account;
