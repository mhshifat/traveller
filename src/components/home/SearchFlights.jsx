import {
	Button,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
	TextField,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import MobileStepper from "@mui/material/MobileStepper";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function SearchFlights() {
	const [value, setValue] = useState(null);
	const [activeStep, setActiveStep] = useState(0);

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<div className="container">
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<div className="SearchFlights">
					<div className="SearchFlights__form">
						<h1>Search flights</h1>
						<h2>Fly anywhere . Fly everywhere</h2>

						<div className="SearchFlights__form--radios">
							<FormControl>
								<RadioGroup
									aria-labelledby=""
									defaultValue="round_trip"
									name="radio-buttons-group"
									className="radio-horizontal"
								>
									<FormControlLabel
										value="one_way"
										control={<Radio />}
										label="One Way"
										className="radio-label"
									/>
									<FormControlLabel
										value="round_trip"
										control={<Radio />}
										label="Round Trip"
										className="radio-label"
									/>
									<FormControlLabel
										value="multi_city"
										control={<Radio />}
										label="Multi-City"
										className="radio-label"
									/>
								</RadioGroup>
							</FormControl>
						</div>

						<div
							className="SearchFlights__form--row"
							style={{ marginBottom: "3.6rem" }}
						>
							<div>
								<span>From</span>
								<TextField
									label="Enter airport name or city"
									variant="outlined"
									fullWidth
								/>
							</div>
							<div>
								<span style={{ opacity: 0 }}>From</span>
								<img
									src="/assets/images/search-flights/switch.svg"
									style={{
										transform: "scale(2)",
										pointerEvents: "none",
										marginTop: "-5px",
									}}
									alt=""
								/>
							</div>
							<div>
								<span>To</span>
								<TextField
									label="Enter destination"
									variant="outlined"
									fullWidth
								/>
							</div>
						</div>

						<div
							className="SearchFlights__form--row"
							style={{ marginBottom: "3.6rem" }}
						>
							<div>
								<span>Depart on</span>
								<DesktopDatePicker
									label="Enter Date"
									inputFormat="MM/dd/yyyy"
									value={value}
									onChange={handleChange}
									renderInput={(params) => <TextField {...params} />}
									fullWidth
								/>
							</div>
							<div>
								<img
									style={{ opacity: 0 }}
									src="/assets/images/search-flights/switch.svg"
									alt=""
								/>
							</div>
							<div>
								<span>Return on</span>
								<DesktopDatePicker
									label="Enter Date"
									inputFormat="MM/dd/yyyy"
									value={value}
									onChange={handleChange}
									renderInput={(params) => <TextField {...params} />}
									fullWidth
								/>
							</div>
						</div>

						<div className="SearchFlights__form--selectRow">
							<div>
								<span>Adults</span>
								<FormControl fullWidth>
									<InputLabel id="demo-simple-select-label">2</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value=""
										label="Age"
										onChange={() => {}}
									>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</Select>
								</FormControl>
							</div>
							<div>
								<span>Kids</span>
								<FormControl fullWidth>
									<InputLabel id="demo-simple-select-label-kids">2</InputLabel>
									<Select
										labelId="demo-simple-select-label-kids"
										id="demo-simple-select"
										value=""
										label="Age"
										onChange={() => {}}
									>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</Select>
								</FormControl>
								<p>2-11 years</p>
							</div>
							<div>
								<span>Infants</span>
								<FormControl fullWidth>
									<InputLabel id="demo-simple-select-label-infants">
										2
									</InputLabel>
									<Select
										labelId="demo-simple-select-label-infants"
										id="demo-simple-select"
										value=""
										label="Age"
										onChange={() => {}}
									>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</Select>
								</FormControl>
								<p>Below 2 years</p>
							</div>
						</div>

						<div className="SearchFlights__form--radiosBtn">
							<FormControl>
								<RadioGroup
									aria-labelledby=""
									defaultValue="business_class"
									name="radio-buttons-group"
									className="radio-horizontal"
								>
									<FormControlLabel
										value="first_class"
										control={<Radio />}
										label="First class"
										className="radio-label"
									/>
									<FormControlLabel
										value="business_class"
										control={<Radio />}
										label="Business class"
										className="radio-label"
									/>
									<FormControlLabel
										value="economy"
										control={<Radio />}
										label="Economy"
										className="radio-label"
									/>
									<button className="btn-primary">Search</button>
								</RadioGroup>
							</FormControl>
						</div>

						<div className="SearchFlights__form--horizontalAdd">
							<img
								src="/assets/images/search-flights/horizontal-banner.svg"
								alt=""
							/>
						</div>
					</div>

					<div className="SearchFlights__aside">
						<img src="/assets/images/search-flights/small-banner.svg" alt="" />
						<div className="SearchFlights__aside--deals">
							<div className="SearchFlights__aside--deals__header">
								<h3>Flight deals!!!</h3>
							</div>

							<div className="SearchFlights__aside--deals__slider">
								<AutoPlaySwipeableViews
									axis={"x"}
									index={activeStep}
									onChangeIndex={(step) => setActiveStep(step)}
									enableMouseEvents
								>
									{new Array(6).fill("").map((_, idx) => (
										<div
											key={idx}
											className="SearchFlights__aside--deals__slider--item"
										>
											<h4>International flight offer</h4>
											<p>Get upto 15% off on international flights today!!!</p>
											<p>
												<span>Use coupon code : </span>FLIGHT15
											</p>

											<Link to="/">Learn more &#8594;</Link>
										</div>
									))}
								</AutoPlaySwipeableViews>
								<MobileStepper
									steps={6}
									position="static"
									activeStep={activeStep}
									nextButton={
										<Button
											size="small"
											// onClick={handleNext}
											// disabled={activeStep === maxSteps - 1}
										>
											&#8594;
										</Button>
									}
									backButton={
										<Button
											size="small"
											// onClick={handleBack}
											// disabled={activeStep === 0}
										>
											&#8592;
										</Button>
									}
								/>
								<Link to="/">View all</Link>
							</div>
						</div>
					</div>
				</div>
			</LocalizationProvider>
		</div>
	);
}
