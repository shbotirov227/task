import React from "react";
import CardTitle from "../../components/CardTitle/CardTitle";

import "./Products.scss";

const Products = () => {
	return (
		<div className="Products">
			<CardTitle
				title="Products"
				color="#CABDFF"
				inputSearch
				inputPlaceholder="Search product"
				buttons={["Market", "Traffic sources", "Viewers"]}
			/>
		</div>
	);
};

export default Products;
