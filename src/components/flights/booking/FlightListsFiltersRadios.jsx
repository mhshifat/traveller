import {
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
} from "@mui/material";

export default function FlightListsFiltersRadios({
	label,
	defaultValue,
	options = [],
	filters = [],
}) {
	return (
		<div className="FlightListsFiltersRadios">
			<h3>{label}</h3>

			<div className="FlightListsFiltersRadios__btns">
				{filters.map((filter, filterIdx) => (
					<button key={filterIdx} className={filter.className}>
						{filter.label}
					</button>
				))}
			</div>

			<FormControl>
				<RadioGroup
					aria-labelledby="demo-radio-buttons-group-label"
					defaultValue={defaultValue}
					name="radio-buttons-group"
				>
					{options.map((item, itemIdx) => (
						<div className="FlightListsFiltersRadios__rows" key={itemIdx}>
							<FormControlLabel
								value={item.value}
								control={<Radio />}
								label={item.label}
							/>
							{item.end && <span>₹ 64,566.3</span>}
						</div>
					))}
				</RadioGroup>
			</FormControl>
		</div>
	);
}
