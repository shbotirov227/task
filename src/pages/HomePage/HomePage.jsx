
import Activity from "../../containers/Activity/Activity";
import Overview from "../../containers/Overview/Overview";

import "./HomePage.scss";

const HomePage = () => {
	return (
		<div className="HomePage">
			<div className="HomePage-inner">
				<h3 className="HomePage-title">Products dashboard</h3>
				<Overview />
				<Activity />
			</div>
		</div>
	);
};

export default HomePage;
