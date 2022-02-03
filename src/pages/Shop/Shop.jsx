import React from "react";

import CardTitle from "../../components/CardTitle/CardTitle";
import ShopCard from "../../components/ShopCard/ShopCard";
import UserImg1 from "../../assets/images/shopCardImg1.png";
import UserImg2 from "../../assets/images/shopCardImg2.png";
import UserImg3 from "../../assets/images/shopCardImg3.png";
import UserImg4 from "../../assets/images/shopCardImg4.png";
import UserImg5 from "../../assets/images/shopCardImg5.png";
import ShopCardImg1 from "../../assets/images/shopCardCarouselImg1.png";
import ShopCardImg2 from "../../assets/images/shopCardCarouselImg2.png";
import ShopCardImg3 from "../../assets/images/shopCardCarouselImg3.png";
import ShopCardImg4 from "../../assets/images/shopCardCarouselImg4.png";
import ShopCardImg5 from "../../assets/images/shopCardCarouselImg5.png";
import ShopCardImg6 from "../../assets/images/shopCardCarouselImg6.png";
import ShopCardImg7 from "../../assets/images/shopCardCarouselImg7.png";
import ShopCardImg8 from "../../assets/images/shopCardCarouselImg8.png";
import ShopCardImg9 from "../../assets/images/shopCardCarouselImg9.png";
import ShopCardImg10 from "../../assets/images/shopCardCarouselImg10.png";
import ShopCardImg11 from "../../assets/images/shopCardCarouselImg11.png";
import ShopCardImg12 from "../../assets/images/shopCardCarouselImg12.png";
import ShopCardImg13 from "../../assets/images/shopCardCarouselImg13.png";
import ShopCardImg14 from "../../assets/images/shopCardCarouselImg14.png";
import { LoadIcon } from "../../assets/icons/icons";

import "./Shop.scss";

const data = [
	{
		id: 0,
		userImg: UserImg1,
		userName: "Reed Parker",
		userIndex: "#1",
		userProduct: " products",
		userFollower: " followers",
		numProduct: "16",
		numFollower: "3,568",
		colorIndex: "#B5E4CA",
		carouselImg: [
			ShopCardImg1,
			ShopCardImg2,
			ShopCardImg3,
			ShopCardImg4,
			ShopCardImg2,
		],
	},

	{
		id: 1,
		userImg: UserImg2,
		userName: "Tristian Hermiston",
		userIndex: "#2",
		userProduct: " products",
		userFollower: " followers",
		numProduct: "16",
		numFollower: "3,568",
		colorIndex: "#FFD88D",
		carouselImg: [
			ShopCardImg5,
			ShopCardImg6,
			ShopCardImg7,
			ShopCardImg8,
			ShopCardImg5,
		],
	},

	{
		id: 2,
		userImg: UserImg3,
		userName: "Rosetta Gottlieb",
		userIndex: "#3",
		userProduct: " products",
		userFollower: " followers",
		numProduct: "16",
		numFollower: "3,568",
		colorIndex: "#CABDFF",
		carouselImg: [
			ShopCardImg9,
			ShopCardImg10,
			ShopCardImg4,
			ShopCardImg11,
			ShopCardImg12,
		],
	},

	{
		id: 3,
		userImg: UserImg4,
		userName: "Nicola Gislason",
		userIndex: null,
		userProduct: " products",
		userFollower: " followers",
		numProduct: "16",
		numFollower: "3,568",
		carouselImg: [
			ShopCardImg13,
			ShopCardImg14,
			ShopCardImg12,
			ShopCardImg2,
			ShopCardImg3,
		],
	},

	{
		id: 4,
		userImg: UserImg5,
		userName: "Hester Grady",
		userIndex: null,
		userProduct: " products",
		userFollower: " followers",
		numProduct: "16",
		numFollower: "3,568",
		carouselImg: [
			ShopCardImg12,
			ShopCardImg11,
			ShopCardImg14,
			ShopCardImg10,
			ShopCardImg9,
		],
	},
];

const Shop = () => {
	return (
		<div className="Shop">
			<h3 className="Shop-title">Explore creators</h3>
			<div className="Shop-inner mini-container">
				<CardTitle
					typeBtn={["Popular", "Trending"]}
					select={["Best sellers", "Best sellers", "Best sellers"]}
					padding="0 0 20px 0"
					borderBottom="1px solid #EFEFEF"
					margin="20px"
				/>
				<span className="Shop-span">Viewing 5 of 5,000+ creators in the market</span>

				<div className="ShopCards">
					{data.map((el) => (
						<ShopCard
							userImg={el.userImg}
							userName={el.userName}
							userIndex={el.userIndex}
							userProduct={el.userProduct}
							userFollower={el.userFollower}
							numProduct={el.numProduct}
							numFollower={el.numFollower}
							colorIndex={el.colorIndex}
							btn1="Follow"
							btn2="Shop now"
							carouselImg={el.carouselImg.map((el) => el)}
						/>
					))}
				</div>

				<button className="Shop-loadBtn"><LoadIcon />Load more</button>
			</div>
		</div>
	);
};

export default Shop;
