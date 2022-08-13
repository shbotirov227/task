import React from "react";
import Slider from "react-slick";

import "./ShopCard.scss";

const ShopCard = ({ userImg, userName, userIndex, userProduct, userFollower, colorIndex, numProduct, numFollower, btn1, btn2, carouselImg }) => {
	
	let settings = {
        dots: false,
        infinite: true,
        speed: 500,
		autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 4, 
		control: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

	return (
		<div className="ShopCard">
			<div className="ShopCard-top">
				<div className="ShopCard-top-left">
          			<img className="ShopCard-userImg" src={userImg} alt="" />
					<div>
						<div style={{ display: "flex", alignItems: "center", marginBottom: 5 }}>
							<h4 className="ShopCard-userName">{userName}</h4>
							{userIndex ? <span className="ShopCard-userIndex" style={{ backgroundColor: colorIndex }}>{userIndex}</span> : undefined}
						</div>

						<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>
							<span className="ShopCard-userProduct">
								<span className="num">{numProduct}</span>
                				{userProduct}
							</span>

							<div className="line"></div>
							
              				<span className="ShopCard-userProduct">
								<span className="num">{numFollower}</span>
                				{userFollower}
							</span>
						</div>
					</div>
				</div>

				<div className="ShopCard-top-right">
					<button className="ShopCard-btn followBtn">{btn1}</button>
					<button className="ShopCard-btn shopNowBtn">{btn2}</button>
				</div>
			</div>

				<Slider {...settings} className="ShopCard-carousel">
					{carouselImg.map(el => <img className="ShopCard-carouselImg" src={el} alt="" />)}
				</Slider>
		</div>
	);
};

export default ShopCard;
