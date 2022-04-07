import { ExpandLess } from "@mui/icons-material";
import { Slider } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function valuetext(value) {
	return `${value}°C`;
}

export default function FlightListsFiltersRange({
	label,
	subLabel,
	ranges = [],
	hideArrivalTimes,
}) {
	const [value, setValue] = useState([20, 37]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="FlightListsFiltersRange">
			<h3>{label}</h3>
			<h5>{subLabel}</h5>

			{ranges.map((range, rangeIdx) => (
				<div key={rangeIdx} className="FlightListsFiltersRange__item">
					<p>{range.info}</p>
					<Slider
						getAriaLabel={() => "Temperature range"}
						value={value}
						onChange={handleChange}
						valueLabelDisplay="auto"
						getAriaValueText={valuetext}
					/>
				</div>
			))}

			{hideArrivalTimes && (
				<Link to="/">
					Hide arrival times <ExpandLess />
				</Link>
			)}
		</div>
	);
}
