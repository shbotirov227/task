import React from "react";

import "./ProductItem.scss";

const ProductItem = () => {
	return (
		<div className="ProductItem">
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}>
				<div>
					<h4 className="ProductItem-title">
						Bento Matte 3D Illustration
					</h4>
					<span className="ProductItem-span">UI design kit</span>
				</div>
			</div>

			<span className="ProductItem-active">Active</span>
			<span className="ProductItem-price">$98</span>

			<div className="ProductItem-sales">
				<span className="ProductItem-sale">$3,200</span>
				<span className="ProductItem-saleStatus">55.8%</span>
			</div>

			<div className="ProductItem-views">
				<span className="ProductItem-sale">48k</span>
				<div className="ProductItem-viewsStatus"></div>
			</div>

			<div className="ProductItem-likes">
				<span className="ProductItem-sale">8</span>
				<div className="ProductItem-likesStatus"></div>
			</div>
		</div>
	);
};

export default ProductItem;
