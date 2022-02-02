import CardTitle from "../../components/CardTitle/CardTitle";
import CustomerImg from "../../assets/images/Avatar.png";
import { FormControlLabel, styled, Switch } from "@mui/material";
import { InfoIcon, PlusIcon, TextareaIcon1, TextareaIcon2, TextareaIcon3, TextareaIcon4, TextareaIcon5, TextareaIcon6, TextareaIcon7, TextareaLeftIcon, TextareaRightIcon } from "../../assets/icons/icons";

import "./SettingsPage.scss";

const SettingsPage = () => {

	const IOSSwitch = styled((props) => (
		<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
	  ))(({ theme }) => ({
		width: 42,
		height: 26,
		padding: 0,
		'& .MuiSwitch-switchBase': {
		  padding: 0,
		  margin: 2,
		  transitionDuration: '300ms',
		  '&.Mui-checked': {
			transform: 'translateX(16px)',
			color: '#fff',
			'& + .MuiSwitch-track': {
			  backgroundColor: theme.palette.mode === 'dark' ? '#2A85FF' : '#2A85FF',
			  opacity: 1,
			  border: 0,
			},
			'&.Mui-disabled + .MuiSwitch-track': {
			  opacity: 0.5,
			},
		  },
		  '&.Mui-focusVisible .MuiSwitch-thumb': {
			color: '#33cf4d',
			border: '6px solid #fff',
		  },
		  '&.Mui-disabled .MuiSwitch-thumb': {
			color:
			  theme.palette.mode === 'light'
				? theme.palette.grey[100]
				: theme.palette.grey[600],
		  },
		  '&.Mui-disabled + .MuiSwitch-track': {
			opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
		  },
		},
		'& .MuiSwitch-thumb': {
		  boxSizing: 'border-box',
		  width: 22,
		  height: 22,
		},
		'& .MuiSwitch-track': {
		  borderRadius: 26 / 2,
		  backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
		  opacity: 1,
		  transition: theme.transitions.create(['background-color'], {
			duration: 500,
		  }),
		},
	  }));

	  
	return (
		<div className="SettingsPage">
			<h3 className="SettingsPage-title">Settings</h3>

			<div className="SettingsPage-inner">
				<div className="SettingsPage-left">
					<button className="SettingsPage-left-btn">Basics</button>
					<button className="SettingsPage-left-btn">Account</button>
					<button className="SettingsPage-left-btn">
						Notifications
					</button>
					<button className="SettingsPage-left-btn">Payment</button>
				</div>

				<div className="SettingsPage-right">
					<CardTitle
						title="Profile information"
						color="#B5E4CA"
						margin="35px"
					/>

					<div className="SettingsPage-right-top">
						<img
							src={CustomerImg}
							className="SettingsPage-right-img"
							alt=""
						/>
						<button className="SettingsPage-right-btn">
							<PlusIcon />
							Upload new picture
						</button>
						<button className="SettingsPage-right-btn removeBtn">Remove</button>
					</div>

					<main>
						<div className="SettingsPage-formInput">
							<label className="SettingsPage-label" htmlFor="displayName">Display name<InfoIcon /></label>
							<input className="SettingsPage-input" id="displayName" type="text" placeholder="Tran Mau Tri Tam" />
						</div>

						<div className="SettingsPage-formInput">
							<label className="SettingsPage-label" htmlFor="email">Email<InfoIcon /></label>
							<input className="SettingsPage-input" id="email" type="email" placeholder="tam@ui8.net" />
						</div>

						<div className="SettingsPage-formInput">
							<label className="SettingsPage-label" htmlFor="location">Location<InfoIcon /></label>
							<input className="SettingsPage-input" id="location" type="text" placeholder="Canada" />
						</div>

						<div className="SettingsPage-formInput" style={{ borderBottom: "1px solid #EFEFEF", marginBottom: "50px", paddingBottom: "50px"}}>
							<label className="SettingsPage-label" htmlFor="textarea">Bio<InfoIcon /></label>
							<div className="textareaZone">
								<div className="left">
									<TextareaIcon1 />
									<TextareaIcon2 />
									<TextareaIcon3 />
									<TextareaIcon4 />
									<TextareaIcon5 />
									<TextareaIcon6 />
									<TextareaIcon7 />
								</div>

								<div className="right">
									<TextareaLeftIcon />
									<TextareaRightIcon />
								</div>
							</div>
								<textarea className="SettingsPage-input textarea" name="textarea" id="textarea"></textarea>
						</div>

						<div className="SettingsPage-login">
							<CardTitle title="Login" color="#CABDFF" margin="40px" />
							
							<div className="SettingsPage-formInput">
								<label className="SettingsPage-label" htmlFor="oldPassword">Old password<InfoIcon /></label>
								<input className="SettingsPage-input" id="oldPassword" type="text" />
							</div>

							<div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
								<div className="SettingsPage-formInput" style={{width: "49%"}}>
									<label className="SettingsPage-label" htmlFor="newPassword">New password<InfoIcon /></label>
									<input className="SettingsPage-input" id="newPassword" type="text" />
								</div>

								<div className="SettingsPage-formInput" style={{width: "49%"}}>
									<label className="SettingsPage-label" htmlFor="confirmPassword">Confirm new password<InfoIcon /></label>
									<input className="SettingsPage-input" id="confirmPassword" type="text" />
								</div>
							</div>

							<button className="SettingsPage-right-btn removeBtn update">Update password</button>
						</div>

						<div className="SettingsPage-notifications">
							<CardTitle title="Notifications" color="#FFBC99" margin="15px" />
							
							<FormControlLabel
								style={{display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative"}}
								labelPlacement="start"
								control={<IOSSwitch sx={{ s: 1 }} defaultChecked />}
								label="Product updates and community announcements"
							/>

							<FormControlLabel
								style={{display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative"}}
								labelPlacement="start"
								control={<IOSSwitch sx={{ s: 1 }} />}
								label="Market newsletter"
							/>

							<FormControlLabel
								style={{display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative"}}
								labelPlacement="start"
								control={<IOSSwitch sx={{ s: 1 }} defaultChecked />}
								label="Comments"
							/>

							<FormControlLabel
								style={{display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative"}}
								labelPlacement="start"
								control={<IOSSwitch sx={{ s: 1 }} defaultChecked />}
								label="Purchases"
							/>
						</div>

							<CardTitle title="Payment" color="#B5E4CA" margin="35px" />
						<div className="SettingsPage-payment">

							<div className="SettingsPage-payment-titleZone">
								<h4 className="SettingsPage-label">Paypal<InfoIcon /></h4>
								<button className="SettingsPage-right-btn removeBtn">Update</button>
							</div>
							<h4>tam@ui8.net</h4>
							<p>Payout fee is 1% of the amount transferred, with a minimum of USD $0.25 and a maximum of USD $20</p>
							<button className="SettingsPage-right-btn">Save</button>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default SettingsPage;
