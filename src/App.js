import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, SettingsPage, SignUp, MessageCenter } from "./pages/index.js";
import Sidebar from "./containers/Sidebar/Sidebar";
import Header from "./containers/Header/Header";

import "../src/assets/main.scss";

function App() {

	return (
		<React.Fragment>
			<div className="App">
				<Router>
					<div className="inner container">
						<Sidebar />
						<div style={{ width: "100%", boxSizing: "border-box", backgroundColor: "#f4f4f4"}}>
							<Header />
							<Routes>
								<Route exact path="/" element={<HomePage />} />
								<Route path="/settings" element={<SettingsPage />} />
								<Route path="/signup" element={<SignUp />} />
								<Route path="/messages_center" element={<MessageCenter />} />
							</Routes>
						</div>
					</div>
				</Router>
			</div>
		</React.Fragment>
	);
}

export default App;
