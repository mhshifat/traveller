import FlightsBookingOverview from "../../components/flights/booking/overview";
import AllFares from "../../components/flights/booking/AllFares";
import FlightLists from "../../components/flights/booking/FlightLists";

export default function FlightBooking() {
	return (
		<div className="FlightsBooking">
			<FlightsBookingOverview />
			<AllFares />

			<div className="container">
				<p>
					Fares for our carriers are oneway incl. taxes & fees and our service
					fees. Airfares include applied Booking Bonus. Additional baggage fees
					may apply. ~Some flights displayed may be for alternate dates and/or
					airports. Certain results may be outside your search criteria.
				</p>
			</div>

			<FlightLists />
		</div>
	);
}
