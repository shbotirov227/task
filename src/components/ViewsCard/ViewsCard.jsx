// import { StatusArrowDown, StatusArrowIcon } from "../../assets/icons/icons";
import "./ViewsCard.scss";
// import datas from "./data.json";
// import { useState } from "react";
import CardTitle from "../CardTitle/CardTitle";

const ViewsCard = ({ title, val, val2, up, down, statusColor, status }) => {
	// <span className={`${down ? "down" : up ? "up" : undefined}`}>
	// 	{statusColor}
	// </span>
	// const [data, setData] = useState(datas);

	return (
		<div className="ViewsCard">
			<CardTitle
				title="Product activity"
				color="#B5E4CA"
				margin="35px"
				select={[
					"Last 2 weeks",
					"Last 2 weeks",
					"Last 2 weeks",
					"Last 2 weeks",
				]}
			/>
			<table>
				<thead>
					<tr className="thead">
						{title.map((el, index) => (
							<td className="title" key={index}>{el}</td>
						))}
					</tr>
				</thead>
				<tbody>
					<tr>
						{val.map((el, index) => (
							<td>
								<span className="val bgc" key={index}>{el}</span>
							</td>
						))}
					</tr>
					<tr>
						{val2.map((el, index) => (
							<td className="val" key={index}>{el}</td>
						))}
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ViewsCard;


/* {up.map((el) => (up ? <StatusArrowIcon /> : undefined))} */

/* {up ? <StatusArrowIcon /> : down ? <StatusArrowDown /> : undefined} */

