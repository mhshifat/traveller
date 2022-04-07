import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import FlightListsCards from "./FlightListsCards";
import FlightListsFiltersRadios from "./FlightListsFiltersRadios";
import FlightListsFiltersRange from "./FlightListsFiltersRange";

export default function FlightLists() {
	const [showMobileFilters, setShowMobileFilters] = useState(false);

	return (
		<div className="FlightLists container">
			<div className="FlightLists__filters">
				<div className="FlightLists__filters--header">
					<h3>
						Filter search
						<div>
							<small>Clear all</small>
							<small
								onClick={() => setShowMobileFilters((value) => !value)}
								className="filter_toggle"
							>
								{!showMobileFilters ? "Show" : "Collapse"} Filters
							</small>
						</div>
					</h3>
				</div>

				<div
					className={`FlightLists__filters--content ${
						showMobileFilters ? "show" : ""
					}`}
				>
					<div className="FlightLists__filters--divider"></div>

					<FlightListsFiltersRadios
						label="Stops"
						options={[
							{ label: "Non-stop", value: "non-stop", end: "₹ 64,566.3" },
							{ label: "1 stop", value: "one-stop", end: "₹ 64,566.3" },
							{ label: "2+ stops", value: "two-plus-stop", end: "₹ 64,566.3" },
						]}
					/>

					<div className="FlightLists__filters--divider"></div>
					<FlightListsFiltersRange
						label="Flight Times"
						subLabel="Going to New York ( NYC )"
						ranges={[
							{ info: "Depart at 12:15 Am to 11:00 Pm" },
							{ info: "Arrive at 12:15 Am to 11:00 Pm" },
						]}
						hideArrivalTimes
					/>

					<div className="FlightLists__filters--divider"></div>
					<FlightListsFiltersRange
						label="Duration"
						subLabel="Going to New York ( NYC )"
						ranges={[
							{ info: "Total Duration : upto 66h 00m" },
							{ info: "Layover Duration : upto 66h 00m" },
						]}
					/>

					<div className="FlightLists__filters--divider"></div>
					<div>
						<FlightListsFiltersRadios
							label="Departing From"
							options={[
								{ label: "MUM- Mumbai", value: "non-stop", end: "₹ 64,566.3" },
							]}
						/>
						<FlightListsFiltersRadios
							label="Arriving at"
							options={[
								{ label: "JFK- Newyork", value: "non-stop", end: "₹ 64,566.3" },
								{ label: "EWR- Newark", value: "non-stop", end: "₹ 64,566.3" },
								{ label: "LGA- Newark", value: "non-stop", end: "₹ 64,566.3" },
							]}
						/>
						<FlightListsFiltersRadios
							label="Connecting via"
							options={[
								{
									label: "SIN-Singapore",
									value: "non-stop",
									end: "₹ 64,566.3",
								},
								{ label: "DXB- Dubai", value: "non-stop", end: "₹ 64,566.3" },
								{ label: "MCT- Muscat", value: "non-stop", end: "₹ 64,566.3" },
							]}
						/>
						<Link className="link-btn" to="/">
							Show all connecting <ExpandMore />
						</Link>
					</div>

					<div className="FlightLists__filters--divider"></div>
					<FlightListsFiltersRadios
						label="Airlines"
						filters={[
							{ label: "By Airline", className: "btn-primary" },
							{ label: "By Alliance", className: "" },
						]}
						options={[
							{
								label: "JFK- Newyork",
								value: "non-stop",
								end: "₹ 64,566.3",
							},
							{ label: "LGA- Newark", value: "non-stop", end: "₹ 64,566.3" },
							{ label: "EWR- Newark", value: "non-stop", end: "₹ 64,566.3" },
							{ label: "JFK- Newyork", value: "non-stop", end: "₹ 64,566.3" },
							{ label: "EWR- Newark", value: "non-stop", end: "₹ 64,566.3" },
							{ label: "LGA- Newark", value: "non-stop", end: "₹ 64,566.3" },
						]}
					/>
				</div>
			</div>

			<div className="FlightLists__items">
				<div className="FlightLists__items--header">
					<div className="FlightLists__items--header__item">
						<h3 style={{ textAlign: "left" }}>Recommened</h3>
						<p>₹ 64,566.3 | 08h 13m</p>
					</div>
					<div className="FlightLists__items--header__divider"></div>
					<div className="FlightLists__items--header__item">
						<h3>Cheapest</h3>
						<p>₹ 64,566.3 | 08h 13m</p>
					</div>
					<div className="FlightLists__items--header__divider"></div>
					<div className="FlightLists__items--header__item">
						<h3>Shortest</h3>
						<p>₹ 64,566.3 | 08h 13m</p>
					</div>
					<div className="FlightLists__items--header__divider"></div>
					<div className="FlightLists__items--header__item">
						<h3 style={{ textAlign: "right" }}>Alternate dates</h3>
						<p>₹ 64,566.3 | 08h 13m</p>
					</div>
				</div>

				<FlightListsCards
					items={[
						{
							img: "/assets/images/fares/fares.svg",
							title: "Etihad Airlines",
							flights: ["", ""],
						},
						{
							img: "/assets/images/fares/fares.svg",
							title: "Etihad Airlines",
							flights: [""],
							status: { label: "Cheapest flight", bg: "#0FBB67" },
						},
						{
							img: "/assets/images/fares/fares.svg",
							title: "Etihad Airlines",
							flights: [""],
						},
						{
							img: "/assets/images/fares/fares.svg",
							title: "Etihad Airlines",
							flights: [""],
							status: { label: "Shortest duration", bg: "#824749" },
						},
						{
							img: "/assets/images/fares/fares.svg",
							title: "Etihad Airlines",
							flights: ["", ""],
						},
						{
							img: "/assets/images/fares/fares.svg",
							title: "Etihad Airlines",
							flights: ["", ""],
						},
						{
							img: "/assets/images/fares/fares.svg",
							title: "Etihad Airlines",
							flights: [""],
						},
					]}
				/>
			</div>
		</div>
	);
}
