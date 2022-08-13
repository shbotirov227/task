import React from "react";
import {
	EditIcon1,
	EditIcon2,
	EditIcon3,
	StatusArrowDown,
	StatusArrowIcon,
} from "../../assets/icons/icons";

import "./ProductItem.scss";

const ProductItem = ({
	title,
	span,
	status,
	img, 
	up,
	price,
	down,
	sale,
	saleStatus,
	views,
	viewsStatus,
	likes,
	likesStatus,
}) => {
	return (
		<div className="ProductItem">
			<div className="el">
				<img src={img} className="CheckItem-img" alt="" />
				<div>
					<h4 className="ProductItem-title">{title}</h4>
					<span className="ProductItem-span">{span}</span>
				</div>
			</div>

			<div className="ProductItem-actives" style={{ display: "flex" }}>
				<span className={`ProductItem-${status}`}>{status}</span>

				<div className="ProductItem-editIcons">
					<EditIcon1 />
					<EditIcon2 />
					<EditIcon3 />
				</div>
				<span className="ProductItem-price">{price}</span>
			</div>

			<div className="ProductItem-sales">
				<span className="ProductItem-sale">{sale}</span>
				<span style={{ margin: "0 10px" }}>
					{up ? (
						<StatusArrowIcon />
					) : down ? (
						<StatusArrowDown />
					) : undefined}
				</span>
				<span className="ProductItem-saleStatus">{saleStatus}</span>
			</div>

			<div className="ProductItem-views">
				<span className="ProductItem-sale">{views}</span>
				<div
					className="ProductItem-viewsStatus"
					style={{ width: { viewsStatus } }}></div>
			</div>

			<div className="ProductItem-likes">
				<span className="ProductItem-sale">{likes}</span>
				<div
					className="ProductItem-likesStatus"
					style={{ width: { likesStatus } }}></div>
			</div>
		</div>
	);
};

export default ProductItem;
