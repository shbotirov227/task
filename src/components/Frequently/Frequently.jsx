import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { AccPlusIcon, AccCancelIcon } from "../../assets/icons/icons";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./Frequently.scss";

const Frequently = () => {
	const [active, setActive] = useState(false);

	return (
		<div className="Frequently">
			<h3 className="Frequently-title">Frequently asked question</h3>

			<div className="Frequently-inner">
				<div className="Frequently-left">
					<button className="Frequently-left-btn">Basics</button>
					<button className="Frequently-left-btn">Account</button>
					<button className="Frequently-left-btn">
						Notifications
					</button>
					<button className="Frequently-left-btn">Payment</button>
				</div>

				<div className="Frequently-right">
					<Accordion>
						<AccordionSummary
							aria-controls="panel1a-content"
							id="panel1a-header"
							onClick={() => setActive(!active)}>
							<Typography>
								How to upgrade to Pro account?
								{active ? <AccCancelIcon /> : <AccPlusIcon />}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Enjoy instant access to our vast library of
								5,121 premium products and all upcoming new
								releases with super-fast download speeds powered
								by Amazon S3. Yes, you read that right. Getting
								$127,035 in value means you're saving more than
								99% on all products making it the sweetest deal
								for premium design assets around.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							// expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2a-content"
							id="panel2a-header">
							<Typography>
								I forgot my password
								{active ? <AccCancelIcon /> : <AccPlusIcon />}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Enjoy instant access to our vast library of
								5,121 premium products and all upcoming new
								releases with super-fast download speeds powered
								by Amazon S3. Yes, you read that right. Getting
								$127,035 in value means you're saving more than
								99% on all products making it the sweetest deal
								for premium design assets around.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							// expandIcon={<ExpandMoreIcon />}
							aria-controls="panel3a-content"
							id="panel3a-header">
							<Typography>
								I can’t reset my password
								{active ? <AccCancelIcon /> : <AccPlusIcon />}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Enjoy instant access to our vast library of
								5,121 premium products and all upcoming new
								releases with super-fast download speeds powered
								by Amazon S3. Yes, you read that right. Getting
								$127,035 in value means you're saving more than
								99% on all products making it the sweetest deal
								for premium design assets around.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							// expandIcon={<ExpandMoreIcon />}
							aria-controls="panel4a-content"
							id="panel4a-header">
							<Typography>
								How to upgrade to Pro account?
								{active ? <AccCancelIcon /> : <AccPlusIcon />}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Enjoy instant access to our vast library of
								5,121 premium products and all upcoming new
								releases with super-fast download speeds powered
								by Amazon S3.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary // expandIcon={<ExpandMoreIcon />}
							aria-controls="panel5a-content"
							id="panel5a-header">
							<Typography>
								How do I change and reset my password
								{active ? <AccCancelIcon /> : <AccPlusIcon />}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Enjoy instant access to our vast library of
								5,121 premium products and all upcoming new
								releases with super-fast download speeds powered
								by Amazon S3.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default Frequently;
