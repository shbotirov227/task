import "./CardTitle.scss";

const CardTitle = ({ title, select, color }) => {
	return (
		<div className="CardTitle">
			<div className="CardTitle-left">
				<div className="CardTitle-color" style={{ backgroundColor: color }}></div>
				<h4 className="CardTitle-title">{title}</h4>
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
