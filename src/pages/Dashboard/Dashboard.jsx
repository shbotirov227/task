import Activity from "../../containers/Activity/Activity";
import Overview from "../../containers/Overview/Overview";
import Products from "../../containers/Products/Products";

import "./Dashboard.scss";

const Dashboard = () => {
	return (
		<div className="Dashboard">
			<div className="Dashboard-inner">
				<h3 className="Dashboard-title">Products dashboard</h3>
				<Overview />
				<Activity />
				<Products />
			</div>
		</div>
	);
};

export default Dashboard;
