import { BarChart, Bar, XAxis, Tooltip } from "recharts";
import CardTitle from "../CardTitle/CardTitle";

import "./ViewsChart.scss";

const ViewsChart = () => {
	const data = [
		{ day: "Mo", x: 134, fill: "#B5E4CA" },
		{ day: "Tu", x: 285, fill: "#B5E4CA" },
		{ day: "We", x: 173, fill: "#B5E4CA" },
		{ day: "Th", x: 50, fill: "#FFBC99FF" },
		{ day: "Fr", x: 104, fill: "#B5E4CA" },
		{ day: "Sa", x: 550, fill: "#2982FAFF" },
		{ day: "Su", x: 105, fill: "#B5E4CA" },
	];

	return (
		<div className="ViewsChart">
			<CardTitle title="Product views" color="#B1E5FC" margin="30px" />
			<BarChart width={340} height={160} data={data}>
				<XAxis dataKey="day" />
				<Bar dataKey="x" stackId="a" fill="fill" />
				<Tooltip hover="fill" />
			</BarChart>
		</div>
	);
};

export default ViewsChart;
