import {
	OverviewCardIcon,
	StatusArrowIcon,
	StatusArrowDown,
} from "../../assets/icons/icons";

import "./OverviewCard.scss";

const OverviewCard = ({
	icon,
	img,
	title,
	total,
	status, 
	statusIcon,
	statusColor,
	up,
	down,
	backgroundColor,
}) => {
	return (
		<div className="OverviewCard" style={{ backgroundColor: backgroundColor }}>
			<img src={icon} alt="" className="OverviewCard-icon" />

			<div className="OverviewCard-top">
				<span className="OverviewCard-title">
					{title} <OverviewCardIcon />
				</span>
				<img src={img} alt="" className="OverviewCard-img" />
			</div>

			<h4 className="OverviewCard-total">{total}</h4>

			<div>
				<img
					src={statusIcon}
					alt=""
					className="OverviewCard-statusIcon"
				/>
				<span className="OverviewCard-status">
					{up ? (
						<StatusArrowIcon />
					) : down ? (
						<StatusArrowDown />
					) : undefined}
					<span
						className={`${down ? "down" : up ? "up" : undefined}`}>
						{statusColor}
					</span>
					{status}
				</span>
			</div>
		</div>
	);
};

export default OverviewCard;
