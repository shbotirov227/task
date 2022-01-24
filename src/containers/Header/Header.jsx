import { InputUnstyled, Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
	InputSearchIcon,
	MessageIcon,
	NotificationIcon,
	PlusIcon,
} from "../../assets/icons/icons";
import CustomerImg from "../../assets/images/customerImg.png";

import "./Header.scss";

const Header = () => {
	return (
		<div className="Header">
			<div className="Header-input">
				<InputSearchIcon />
				<InputUnstyled
					type="text"
					placeholder="Search or type a command"
					className="Header-input"
				/>
				<button className="Header-inputBtn">⌘ F</button>
			</div>

			<div className="Header-right">
				<Button color="primary" className="Header-right-btn">
					<PlusIcon />
					Create
				</Button>

				<Button className="iconBtn">
					<MessageIcon />
				</Button>

				<Button className="iconBtn">
					<NotificationIcon />
				</Button>

				<Link to="/settings">
					<img src={CustomerImg} alt="customerImg" className="customerImg" />
				</Link>
			</div>
		</div>
	);
};

export default Header;
