import { InputUnstyled, Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
	InputSearchIcon,
	MessageIcon,
	NotificationIcon,
	PlusIcon,
} from "../../assets/icons/icons";
import CustomerImg from "../../assets/images/customerImg.png";
import {UpgradePage} from "../../pages/index";
import "./Header.scss";

const Header = () => {
	return (
		<div className="Header">
			<div className="Header-inner mini-container">
				<div className="Header-input">
					<InputSearchIcon />
					<InputUnstyled type="text" placeholder="Search or type a command" className="Header-input" />
					<button className="Header-inputBtn">⌘ F</button>
				</div>

				<div className="Header-right">
					<button color="primary" className="Header-right-btn"><PlusIcon />Create</button>

					<Link to="/messages_center" className="iconBtn">
						<Button><MessageIcon /></Button>
					</Link>

					<Link to="/upgrade" className="iconBtn">
						<Button><NotificationIcon /></Button>
					</Link>

					<Link to="/settings">
						<img src={CustomerImg} alt="customerImg" className="customerImg" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
