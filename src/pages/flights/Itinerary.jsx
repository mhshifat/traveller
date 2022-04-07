import {
	Button,
	FormControl,
	Radio,
	RadioGroup,
	TextField,
} from "@mui/material";
import BoxItinerary from "../../components/flights/itinerary/Box";
import { Link } from "react-router-dom";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import MobileStepper from "@mui/material/MobileStepper";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function FlightsItinerary() {
	const [activeStep, setActiveStep] = useState(0);

	return (
		<div className="FlightsItinerary container">
			<div className="FlightsItinerary__left">
				<h3>Review your itinerary</h3>

				<BoxItinerary
					from="Bangalore"
					to="New York"
					subTitle="wed, 22 Mar . 22hrs 30min . 2 stops"
				/>
				<BoxItinerary
					from="New York"
					to="Bangalore"
					subTitle="Fri, 02 Apr . 22hrs 30min . 2 stops "
				/>

				<h3>
					Travel Insurances <span>(Recommended)</span>
				</h3>

				<div className="FlightsItinerary__left--protection">
					<div className="FlightsItinerary__left--protection__header">
						<p>Protect your trip with baggage protection</p>
					</div>

					<div className="FlightsItinerary__left--protection__content">
						<div>
							<FormControl>
								<RadioGroup
									aria-labelledby=""
									defaultValue="round_trip"
									name="radio-buttons-group"
									className="radio-horizontal"
								>
									<div className="radio">
										<Radio checked />
										<div>
											<p>
												Yes, add travel insurance to protect my trip ({" "}
												<b>₹600</b>/ traveller inclusive of 18%GST)
											</p>
											<h4>
												6000+ travellers on Yatra protect their trip daily.{" "}
												<Link to="/">Learn more</Link>
											</h4>
										</div>
									</div>
								</RadioGroup>
							</FormControl>
						</div>
						<h3>Cover includes:</h3>
						<div className="FlightsItinerary__left--protection__slider">
							<AutoPlaySwipeableViews
								axis={"x"}
								index={activeStep}
								onChangeIndex={(step) => setActiveStep(step)}
								enableMouseEvents
							>
								{new Array(1).fill("").map((_, idx) => (
									<div
										key={idx}
										className="FlightsItinerary__left--protection__slider--item"
									>
										{new Array(5).fill("").map((_, imgIdx) => (
											<div key={imgIdx}>
												<img src="/assets/images/money.svg" alt="" />
												<h6>Trip cancellation</h6>
												<p>
													Claim upto <b>₹25,000</b>
												</p>
											</div>
										))}
									</div>
								))}
							</AutoPlaySwipeableViews>
							<MobileStepper
								steps={6}
								position="static"
								activeStep={activeStep}
								className="FlightsItinerary__left--protection__slider--actions"
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
						</div>
						<small>
							NOTE : Travel insurance is applicable only for indian citizens
							below the age of 70 years. <Link to="/">Terms & conditions</Link>{" "}
							and <Link to="/">security policy</Link>
						</small>
					</div>
				</div>
			</div>
			<div className="FlightsItinerary__right">
				<div className="FlightsItinerary__summary">
					<h3>Price Summary</h3>
					<div className="FlightsItinerary__summary--divider"></div>

					<div className="FlightsItinerary__summary--row">
						<div>
							<p>Base Charges</p>
						</div>
						<div>
							<h4>₹ 65,762</h4>
							<p>2 adults x ₹ 12,900</p>
							<p>2 Kids x ₹ 5,600</p>
						</div>
					</div>

					<div className="FlightsItinerary__summary--divider"></div>

					<div className="FlightsItinerary__summary--row">
						<div>
							<p>Taxes & fees</p>
						</div>
						<div>
							<h4>₹ 65,762</h4>
						</div>
					</div>

					<div className="FlightsItinerary__summary--divider"></div>

					<div className="FlightsItinerary__summary--row">
						<div>
							<p>Insurance cost</p>
						</div>
						<div>
							<h4>₹ 2400</h4>
							<p>4 travellers x ₹ 600</p>
						</div>
					</div>

					<div className="FlightsItinerary__summary--divider"></div>

					<div className="FlightsItinerary__summary--row">
						<div>
							<p>Coupon applied</p>
						</div>
						<div>
							<img src="/assets/images/arrow-red.svg" alt="" />
							<span>23% off</span>
						</div>
						<div>
							<h4>-₹ 7500</h4>
						</div>
					</div>

					<div className="FlightsItinerary__summary--divider"></div>

					<div className="FlightsItinerary__summary--row">
						<div>
							<b>Total Payable</b>
						</div>
						<div>
							<h4>₹ 82,875</h4>
						</div>
					</div>
				</div>

				<div className="FlightsItinerary__summary">
					<h3>Offers and coupons</h3>
					<div className="FlightsItinerary__summary--divider"></div>

					<div className="FlightsItinerary__summary--form">
						<TextField
							className="text-input"
							label="Outlined"
							variant="outlined"
							fullWidth
						/>
						<button className="btn-primary">Apply</button>

						<div>
							<FormControl fullWidth>
								<RadioGroup
									aria-labelledby=""
									defaultValue="round_trip"
									name="radio-buttons-group"
									className="radio-horizontal"
									fullWidth
								>
									<div className="FlightsItinerary__radios">
										<div className="radio">
											<div>
												<Radio />
											</div>
											<div>
												<h3>
													HDFCINT
													<img src="/assets/images/card-money.svg" alt="" />
												</h3>
												<p>
													Get upto Rs 7500 instant cashback discount on HDFC
													Credit cards
												</p>
												<h6>
													<Link to="/">Terms & conditions</Link>
												</h6>
											</div>
										</div>
										<div className="radio">
											<div>
												<Radio />
											</div>
											<div>
												<h3>
													HDFCINT
													<img src="/assets/images/card-money.svg" alt="" />
												</h3>
												<p>
													Get upto Rs 7500 instant cashback discount on HDFC
													Credit cards
												</p>
												<h6>
													<Link to="/">Terms & conditions</Link>
												</h6>
											</div>
										</div>
									</div>
								</RadioGroup>
							</FormControl>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
