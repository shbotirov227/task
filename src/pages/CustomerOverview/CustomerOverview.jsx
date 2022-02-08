import React from "react";
import TotalCard from "../../components/TotalCard/TotalCard";
import "./CustomerOverview.scss";

const CustomerOverview = () => {
	return (
		<div className="CustomerOverview">
			<h3 className="CustomerOverview-title">Customers</h3>

			<div className="CustomerOverview-inner">
				<div className="CustomerOverview-left">
					<TotalCard />
				</div>

				<div className="CustomerOverview-right"></div>
			</div>
		</div>
	);
};

export default CustomerOverview;
