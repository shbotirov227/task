import React from "react";
import { StatusArrowDown, StatusArrowIcon } from "../../assets/icons/icons";
import CardTitle from "../CardTitle/CardTitle";

import "./TotalCard.scss";

const TotalCard = () => {
	return (
		<div className="TotalCard">
			<CardTitle
				title="Total customers"
				color="#FFBC99"
				margin="35px"
				select={[
					"Last 28 days",
					"Last 28 days",
					"Last 28 days", 
					"Last 28 days",
				]}
			/>
			<h3 className="TotalCard-title">1,509 customers</h3>

			<div style={{ display: "flex", alignItems: "center", marginBottom: "35px" }}>
				<span className="TotalCard-status">
					<StatusArrowIcon />
					37.8%
				</span>

				<span className="TotalCard-statusDate">vs. Sep 8, 2021</span>
			</div>
		</div>
	);
};

export default TotalCard;
