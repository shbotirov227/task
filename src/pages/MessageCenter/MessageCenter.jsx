import React, { useState } from "react";
import {
	MessageCenterIcon1,
	MessageCenterIcon2,
} from "../../assets/icons/icons";

import "./MessageCenter.scss";

const MessageCenter = () => {
	const [active, setActive] = useState([true, false]);

	return (
		<div className="MessageCenter">
			<h2 className="MessageCenter-title">Message Center</h2>

			<div className="MessageCenter-inner">
				<div className="MessageCenter-left">
					<div className="MessageCenter-left-buttons">
						<button className={`btn ${active[0] ? "active" : ""}`} onClick={() => setActive([true, false])}>
							<MessageCenterIcon1 />
							Customers
						</button>
						<button className={`btn ${active[1] ? "active" : ""}`} onClick={() => setActive([false, true])}>
							<MessageCenterIcon2 />
							Everyone
						</button>
					</div>
				</div>

				<div className="MessageCenter-right"></div>
			</div>
		</div>
	);
};

export default MessageCenter;
