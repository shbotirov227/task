import { InputUnstyled } from "@mui/material";
import { useState } from "react";
import { InputSearchIcon } from "../../assets/icons/icons";

import "./CardTitle.scss";

const CardTitle = ({ title, select, color, margin, inputSearch, inputPlaceholder, buttons, typeBtn, type, padding, borderBottom }) => {
	const [active, setActive] = useState(false);

	return ( 
		<div className="CardTitle" style={{ marginBottom: margin, padding: padding, borderBottom: borderBottom }}>
			<div className="CardTitle-left">
				{color ? <div className="CardTitle-color" style={{ backgroundColor: color }}></div> : undefined}
				{title ? <h4 className="CardTitle-title">{title}</h4> : undefined}
				{inputSearch ? (
					<div className="CardTitle-input">
						<InputSearchIcon />
						<InputUnstyled type="text" placeholder={inputPlaceholder} className="CardTitle-input" />
					</div>
				) : undefined}
				<div className="CardTitle-typeBtns">
					{typeBtn ? typeBtn.map((el, index) => <button className={`CardTitle-typeBtn ${ active ? "active" : undefined }`} onClick={() => setActive(!active)}>{el}</button>) : undefined}
				</div>
			</div>

			<div>
				{buttons ? buttons.map((button) => <button className="CardTitle-button">{button}</button>) : undefined}
			</div>

			{select ? (
				<select className="CardTitle-select">
					{select.map((el) => <option value={el}>{el}</option>)}
				</select>
			) : undefined}
		</div>
	);
};

export default CardTitle;
