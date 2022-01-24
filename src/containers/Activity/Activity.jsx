import ViewsCard from "../../components/ViewsCard/ViewsCard";
import ViewsChart from "../../components/ViewsChart/ViewsChart";

import "./Activity.scss";

const Activity = () => {
	return (
		<div className="Activity">
			<ViewsCard
				title={["Week", "Products", "Views", "Likes", "Comments"]}
				val={["25 Sep - 1 Oct", "8", "24k", "48", "16"]}
				val2={["25 Sep - 1 Oct", "8", "24k", "48", "16"]}
				statusColor={["#B5E4CA", "#CABDFF", "#B1E5FC", "#FFD88D"]}
			/>
			<ViewsChart />
		</div>
	);
};

export default Activity;
