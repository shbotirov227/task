import React from "react";
import CardTitle from "../../components/CardTitle/CardTitle";
import CheckItem from "../../components/CheckItem/CheckItem";

import "./Products.scss";

const Products = () => {
	return (
		<div className="Products">
			<div style={{ marginBottom: 45 }}>
				<CardTitle
					title="Products"
					color="#CABDFF"
					inputSearch
					inputPlaceholder="Search product"
					buttons={["Market", "Traffic sources", "Viewers"]}
				/>
			</div>

			<CheckItem />
		</div>
	);
};

export default Products;
