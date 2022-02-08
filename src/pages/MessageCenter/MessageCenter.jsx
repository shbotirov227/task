import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InputUnstyled } from "@mui/material";
import Account from "../../components/Account/Account";
import AccountImg1 from "../../assets/images/shopCardImg2.png";
import AccountImg2 from "../../assets/images/shopCardImg1.png";
import AccountImg3 from "../../assets/images/shopCardImg3.png";
import AccountImg4 from "../../assets/images/shopCardImg4.png";
import AccountImg5 from "../../assets/images/shopCardImg5.png";
import CustomerImg from "../../assets/images/customerImg.png";
import { ChatDots, InputSearchIcon, MsgIcon1, MsgIcon2, SendIcon1, SendIcon2 } from "../../assets/icons/icons";

import "./MessageCenter.scss";


const data = [
	{
		img: AccountImg1,
		name: "Jarret Waelchi",
		date: "03:30PM",
		text: "When do you release the coded...",
		fill: "#2A85FF",
		onlineStatus: false,
	},

	{
		img: AccountImg2,
		name: "Orval Casper",
		date: "11:59AM",
		text: "When do you release the coded...",
		fill: "#9A9FA5",
		onlineStatus: true,
	},

	{
		img: AccountImg3,
		name: "Michel Emard",
		date: "09:30AM",
		text: "When do you release the coded...",
		fill: "#2A85FF",
		onlineStatus: false,
	},

	{
		img: AccountImg4,
		name: "Reuben Ward",
		date: "08:00AM",
		text: "When do you release the coded...",
		fill: "#9A9FA5",
		onlineStatus: false,
	},

	{
		img: AccountImg5,
		name: "Evalyn Jenkins",
		date: "07:01AM",
		text: "When do you release the coded...",
		fill: "#9A9FA5",
		onlineStatus: false,
	},
];

const MessageCenter = () => {
	const [active, setActive] = useState([true, false]);

	return (
		<div className="MessageCenter">
			<h2 className="MessageCenter-title">Message Center</h2>

			<div className="MessageCenter-inner">
				<div className="MessageCenter-left">
					<div className="MessageCenter-left-buttons">
						<button
							className={`btn ${active[0] ? "active" : ""}`}
							onClick={() => setActive([true, false])}>
							<MsgIcon1 />
							Customers
						</button>
						<button
							className={`btn ${active[1] ? "active" : ""}`}
							onClick={() => setActive([false, true])}>
							<MsgIcon2 />
							Everyone
						</button>
					</div>

					{data.map((el, index) => (
						<Account
							key={index}
							img={el.img}
							name={el.name}
							date={el.date}
							text={el.text}
							fill={el.fill}
							onlineStatus={el.onlineStatus}
						/>
					))}

					<div className="Header-input">
						<InputSearchIcon />
						<InputUnstyled
							type="text"
							placeholder="Search message"
							className="Header-input"
						/>
					</div>
				</div>

				<div className="MessageCenter-right">
					<div className="MessageCenter-right-top">
						<div className="datesTop">
							<h2>Orval Casper</h2>
							<ChatDots />
						</div>
						<div className="dates">
							<h5>Customer since: Sep 2021</h5>
							<div className="line"></div>
							<h5>
								Purchased: <span>21 items</span>
							</h5>
							<div className="line"></div>
							<h5>
								Lifetime: <span>$1,235.00</span>
							</h5>
						</div>
					</div>

					<div className="MessageCenter-right-bottom">
						<button className="loadBtn">Load conversation</button>

						<div className="users">
							<div className="user">
								<img src={AccountImg2} alt="" />
								<div className="titles">
									<div className="titles-top">
										<h5 className="userName">
											Orval Casper
										</h5>
										<span className="userDate">
											11:59AM
										</span>
									</div>
									<p>
										When do you release the coded for the
										Fleet - Travel kit?
									</p>
									<Link className="titles-link" to="#">
										https://ui8.net/product-link
									</Link>
								</div>
							</div>

							<div className="user">
								<img src={CustomerImg} alt="" />
								<div className="titles">
									<div className="titles-top">
										<h5 className="userName">
											Britney Beer
										</h5>
										<span className="userDate">
											11:59AM
										</span>
									</div>
									<p className="titles-text mb">
										Hi @orval, thanks for contacting.
										<br></br>
										Yes, I’m working on it. It would be
										released next 2 weeks. You could check
										the progress here:
										<Link className="titles-link" to="#">
											https://ui8.net/progressBr
										</Link>
									</p>
									<p className="titles-text mb">
										Thanks for your patience and
										understanding.
										<br></br> 🙌Regards,
									</p>
									<p className="titles-text">Br</p>
								</div>
							</div>
						</div>

						<div className="msgInput" style={{ display: "flex", alignitems: "center", justifyContent: "space-between"}}>
							<div className="msgInput-icons">
								<SendIcon1 />
								<SendIcon2 />
							</div>

							<div className="msgInput-text">
								<InputUnstyled
									type="text"
									placeholder="Search message"
									className="msgInput-input"
								/>
								<button className="msgInput-btn">Send</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MessageCenter;
