import { StatusArrowDown, StatusArrowIcon } from "../../assets/icons/icons";
import "./ViewsCard.scss";
import datas from "./data.json";
import { useState } from "react";

const ViewsCard = ({ title, val, up, down, statusColor, status }) => {
	// <span className={`${down ? "down" : up ? "up" : undefined}`}>
	// 	{statusColor}
	// </span>
	const [data, setData] = useState(datas);
	return (
		<div className="ViewsCard">
			<h2>ViewsCard</h2>

			{
				console.log(data)
			}
			{/* <table>
				<thead>
					<tr>{title.map((el) => <th>{el}</th>)}</tr>
				</thead>
				<tbody>
					{val.map((el) => <tr><td>{el}</td>{status.map((el) => <td>{el}</td>)}</tr>)}
				</tbody>
 
				<td>
				</td>
			</table> */}
		</div>
	);
};

export default ViewsCard;

{
	/* {up.map((el) => (up ? <StatusArrowIcon /> : undefined))} */
}

{
	/* {up ? <StatusArrowIcon /> : down ? <StatusArrowDown /> : undefined} */
}
