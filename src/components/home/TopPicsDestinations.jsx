import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";
import MobileStepper from "@mui/material/MobileStepper";
import { useState } from "react";
import { Button } from "@mui/material";
import { BookmarkBorder, Star } from "@mui/icons-material";
// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const AutoPlaySwipeableViews = SwipeableViews;

const DEMO_IMAGES = [
	"/assets/images/top-pics/top-pics-one.svg",
	// "/assets/images/top-pics/top-pics-two.svg",
	// "/assets/images/top-pics/top-pics-three.svg",
	// "/assets/images/top-pics/top-pics-four.svg",
	// "/assets/images/top-pics/top-pics-five.svg",
	// "/assets/images/top-pics/top-pics-six.svg",
];

export default function TopPicsDestinations() {
	const [activeStep, setActiveStep] = useState(0);

	return (
		<div className="TopPicsDestinations container">
			<h3>Our Top picks after covid</h3>

			<div className="TopPicsDestinations__slider">
				<AutoPlaySwipeableViews
					axis={"x"}
					index={activeStep}
					onChangeIndex={(step) => setActiveStep(step)}
					enableMouseEvents
				>
					{new Array(1).fill("").map((_, itemIdx) => (
						<div className="TopPicsDestinations__items" key={itemIdx}>
							{new Array(6).fill("").map((_, idx) => (
								<div className="TopPicsDestinations__items--item" key={idx}>
									<div className="TopPicsDestinations__items--item__slider">
										<div className="TopPicsDestinations__items--item__slider--icon">
											<BookmarkBorder />
										</div>
										<AutoPlaySwipeableViews
											axis={"x"}
											index={activeStep}
											onChangeIndex={(step) => setActiveStep(step)}
											enableMouseEvents
										>
											{DEMO_IMAGES.map((src, idx) => (
												<div
													key={idx}
													className="TopPicsDestinations__items--item__slider--item"
												>
													<img
														src={src}
														alt=""
														style={{
															width: "100%",
															objectFit: "cover",
														}}
													/>
												</div>
											))}
										</AutoPlaySwipeableViews>
										<MobileStepper
											steps={6}
											position="static"
											activeStep={activeStep}
											className="TopPicsDestinations__items--item__slider--actions"
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
									<div className="TopPicsDestinations__items--item__info">
										<h3>
											Kakari Hills
											<span>
												4.9 <Star />
											</span>
										</h3>
										<p>Zurich</p>
										<div className="TopPicsDestinations__items--item__list">
											<div>
												<img
													src="/assets/images/top-pics/file-bag.svg"
													alt=""
												/>
												Travel allowed for Vaccinated
											</div>
											<div>
												<img
													src="/assets/images/top-pics/file-bag.svg"
													alt=""
												/>
												Covid test not required
											</div>
											<div>
												<img
													src="/assets/images/top-pics/file-bag.svg"
													alt=""
												/>
												No quarantine required
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					))}
				</AutoPlaySwipeableViews>
				<MobileStepper
					steps={6}
					position="static"
					activeStep={activeStep}
					className="TopPicsDestinations__slider--actions"
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
		</div>
	);
}
