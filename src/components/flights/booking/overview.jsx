import {
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
} from "@mui/material";

export default function FlightsBookingOverview() {
	return (
		<div className="container">
			<div className="SearchFlights__form--radios">
				<FormControl>
					<RadioGroup
						aria-labelledby=""
						defaultValue="round_trip"
						name="radio-buttons-group"
					>
						<FormControlLabel
							value="one_way"
							control={<Radio />}
							label="One Way"
						/>
						<FormControlLabel
							value="round_trip"
							control={<Radio />}
							label="Round Trip"
						/>
						<FormControlLabel
							value="multi_city"
							control={<Radio />}
							label="Multi-City"
						/>
					</RadioGroup>
				</FormControl>
			</div>
			<div className="FlightsBookingOverview">
				<div className="FlightsBookingOverview__first">
					<div>
						<small>From</small>
						<h3>MUMBAI BOM</h3>
						<p>Chhatrapati Shivaji International</p>
					</div>
					<div>
						<img src="/assets/images/search-flights/switch.svg" alt="" />
					</div>
					<div>
						<small>To</small>
						<h3>Delhi DEL</h3>
						<p>Indira Gandhi International</p>
					</div>
				</div>

				<div className="FlightsBookingOverview__divider"></div>

				<div className="FlightsBookingOverview__second">
					<div>
						<select>
							<option value="Departure">Departure</option>
						</select>
						<h3>Mar 22, 2022</h3>
						<p>Tuesday</p>
					</div>
					<div>
						<select>
							<option value="Return">Return</option>
						</select>
						<h3>Mar 22, 2022</h3>
						<p>Wednesday</p>
					</div>
				</div>

				<div className="FlightsBookingOverview__divider"></div>

				<div className="FlightsBookingOverview__second">
					<div>
						<select>
							<option value="Departure">Passenger and class</option>
						</select>
						<h3>2 Adults, 2 kids</h3>
						<p>Business class</p>
					</div>
				</div>

				<button className="btn-primary">&#8594;</button>
			</div>
		</div>
	);
}
