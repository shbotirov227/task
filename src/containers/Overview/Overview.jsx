import OverviewCard from "../../components/OverviewCard/OverviewCard";
import icon1 from "../../assets/images/icons/icon1.png";
import icon2 from "../../assets/images/icons/icon2.png";
import icon3 from "../../assets/images/icons/icon3.png";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import { StatusIcon } from "../../assets/icons/icons";

import "./Overview.scss";
import CardTitle from "../../components/CardTitle/CardTitle";

const Overview = () => {
	return (
		<div className="Overview">
			<CardTitle
				title="Overview"
				color="#CABDFF"
				select={["This week", "This week", "This week"]}
			/>

			<div className="Overview-cards">
				<OverviewCard
					icon={icon1}
					title="Earning"
					img={img1}
					total="128k"
					statusIcon={StatusIcon}
					statusColor="37.8% "
					status="this week"
					backgroundColor="rgba(181, 228, 202, 0.25)"
					up
				/>

				<OverviewCard
					icon={icon2}
					title="Customer"
					img={img2}
					total="512"
					statusIcon={StatusIcon}
					statusColor="37.8% "
					status="this week"
					backgroundColor="rgba(177, 229, 252, 0.25)"
					down
				/>

				<OverviewCard
					icon={icon3}
					title="Payouts"
					img={img3}
					total="64k"
					statusIcon={StatusIcon}
					statusColor="37.8% "
					status="this week"
					backgroundColor="rgba(202, 189, 255, 0.25)"
					up
				/>
			</div>
		</div>
	);
};

export default Overview;
