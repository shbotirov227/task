import React from "react";
import { OverviewCardIcon } from "../../assets/icons/icons";
import CardTitle from "../../components/CardTitle/CardTitle";
import Frequently from "../../components/Frequently/Frequently";
import Title from "../../components/Title/Title";

import "./UpgradePage.scss";

const UpgradePage = () => {
	return (
		<div className="UpgradePage mini-container">
			<h3 className="UpgradePage-title">Upgrade to Pro</h3>

			<div className="UpgradePage-inner">
				<div className="UpgradePage-left">
					<div className="UpgradePage-left-top">
						<CardTitle title="Lite" color="#B1E5FC" margin="30px" />
						<span className="UpgradePage-innerSpan">
							Basic shop and tools to set up your profile
						</span>
					</div> 

					<div className="monthly">
						<h4 className="monthly-title">8%</h4>
						<span className="monthly-text">
							of the monthly income you earn on the market
						</span>
						<OverviewCardIcon />
					</div>

					<Title
						title={[
							"Basic shop profile",
							"Customer communication tools",
							"100 promotion posts",
							"Maximum 50 product uploads",
						]}
					/>

					<button className="monthly-btn outlinedBtn">
						Your plan
					</button>
				</div>

				<div className="UpgradePage-right">
					<div className="UpgradePage-right-top">
						<div className="reco">
							<CardTitle title="Pro" color="#CABDFF" />
							<span className="recomended">Recommended</span>
						</div>
						<span className="UpgradePage-innerSpan">
							Pro shop and tools to set up your profile 🔥
						</span>
					</div>

					<div className="monthly">
						<h4 className="monthly-title">12%</h4>
						<span className="monthly-text">
							of the monthly income you earn on the market
						</span>
						<OverviewCardIcon />
					</div>

					<Title
						title={[
							"Extended shop profile",
							"Customer communication tools",
							"Unlimited promotion posts",
							"Unlimited product uploads",
							"Special offers promo tool",
							"Analytics and insights",
							"Bulk message to all customers",
						]}
					/>

					<button className="monthly-btn upradeBtn">Upgrade now</button>
				</div>
			</div>

			<Frequently />
		</div>
	);
};

export default UpgradePage;
