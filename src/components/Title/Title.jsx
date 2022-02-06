import React from "react";
import { TitleIcon } from "../../assets/icons/icons";

import "./Title.scss";

const Title = ({ title }) =>
	title.map((el) => (
		<div className="Title">
			<TitleIcon />
			<h5 className="Title-title">{el}</h5>
		</div>
	));

export default Title;
