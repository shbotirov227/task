import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	HomePage,
	SettingsPage,
	SignUp,
	Shop,
	MessageCenter,
} from "./pages/index.js";
import Sidebar from "./containers/Sidebar/Sidebar";
import Header from "./containers/Header/Header";

import "../src/assets/main.scss";

function App() {
	return (
		<React.Fragment>
			<div className="App">
				<Router>
					<div className="inner ">
						<Sidebar />
						<div className="pages">
							<Header />
							<div className="mini-container">
								<Routes>
									<Route exact path="/" element={<HomePage />} />
									<Route path="/settings" element={<SettingsPage />} />
									<Route path="/signup" element={<SignUp />} />
									<Route path="/shop" element={<Shop />} />
									<Route path="/messages_center" element={<MessageCenter />} />
								</Routes>
							</div>
						</div>
					</div>
				</Router>
			</div>
		</React.Fragment>
	);
}

export default App;
