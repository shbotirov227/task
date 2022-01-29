import { InputUnstyled } from "@mui/material";
import { InputSearchIcon } from "../../assets/icons/icons";

import "./CardTitle.scss";

const CardTitle = ({
	title,
	select,
	color,
	margin,
	inputSearch,
	inputPlaceholder,
	buttons,
}) => {
	return (
		<div className="CardTitle" style={{ marginBottom: margin }}>
			<div className="CardTitle-left">
				<div
					className="CardTitle-color"
					style={{ backgroundColor: color }}></div>
				<h4 className="CardTitle-title">{title}</h4>
				{inputSearch ? (
					<div className="CardTitle-input">
						<InputSearchIcon />
						<InputUnstyled
							type="text"
							placeholder={inputPlaceholder}
							className="CardTitle-input"
						/>
					</div>
				) : undefined}
			</div>

			<div>
				{buttons
					? buttons.map((button) => (
							<button className="CardTitle-button">
								{button}
							</button>
					  ))
					: undefined}
			</div>

			{select ? (
				<select name="" id="" className="CardTitle-select">
					{select.map((el) => (
						<option value={el}>{el}</option>
					))}
				</select>
			) : undefined}
		</div>
	);
};

export default CardTitle;
