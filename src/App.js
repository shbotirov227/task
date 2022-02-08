import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	Dashboard,
	SettingsPage,
	SignUp,
	Shop,
	MessageCenter,
	CustomerOverview,
	UpgradePage,
} from "./pages/index.js";
import Sidebar from "./containers/Sidebar/Sidebar";
import Header from "./containers/Header/Header";

import "../src/assets/main.scss";

function App() {
	// const [enter, setEnter] = useState(false);

	// const handle = (props) => window.location.pathname === "/signup" ? setEnter(true) : undefined;

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
									<Route
										exact
										path="/"
										element={<Dashboard />}
									/>
									<Route
										path="/products/dashboard"
										element={<Dashboard />}
									/>
									<Route
										path="/settings"
										element={<SettingsPage />}
									/>
									<Route
										path="/signup"
										element={<SignUp />}
									/>
									<Route path="/shop" element={<Shop />} />
									<Route
										path="/messages_center"
										element={<MessageCenter />}
									/>
									<Route
										path="/customers/overview"
										element={<CustomerOverview />}
									/>
									<Route
										path="/upgrade"
										element={<UpgradePage />}
									/>
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
