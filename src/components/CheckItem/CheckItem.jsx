import React from "react";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import ProductItem from "../ProductItem/ProductItem";
import CheckItemImg from "../../assets/images/checkItemImg1.png";

import "./CheckItem.scss";

const CheckItem = () => {
	const [checked, setChecked] = React.useState([true, false]);

	const handleChange1 = (event) => {
		setChecked([event.target.checked, event.target.checked]);
	};

	const handleChange2 = (event) => {
		setChecked([event.target.checked, checked[1]]);
	};

	const handleChange3 = (event) => {
		setChecked([checked[0], event.target.checked]);
	};

	const children = (
		<Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
			<div style={{ display: "flex" }}>
				<FormControlLabel
					style={{ margin: 0 }}
					label={
						<img
							src={CheckItemImg}
							className="CheckItem-img"
							alt=""
						/>
					}
					control={
						<Checkbox
							checked={checked[0]}
							onChange={handleChange2}
						/>
					}
				/>
				<ProductItem />
			</div>

			<FormControlLabel
				label="Child 2"
				control={
					<Checkbox checked={checked[1]} onChange={handleChange3} />
				}
			/>
		</Box>
	);

	return (
		<div className="CheckItem">
			<FormControlLabel
				label="Product"
				control={
					<Checkbox
						checked={checked[0] && checked[1]}
						// indeterminate={checked[0] !== checked[1]}
						onChange={handleChange1}
					/>
				}
			/>
			{children}
		</div>
	);
};

export default CheckItem;
