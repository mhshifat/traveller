import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import FlightsLayout from "../components/layouts/FlightsLayout";
import UserLayout from "../components/layouts/UserLayout";
import FlightsBooking from "../pages/flights/Booking";
import FlightsItinerary from "../pages/flights/Itinerary";
import Home from "../pages/Home";

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" element={<UserLayout />}>
					<Route index element={<Home />} />
					<Route path="flights" element={<FlightsLayout />}>
						<Route path="booking" element={<FlightsBooking />} />
						<Route path="itinerary" element={<FlightsItinerary />} />
					</Route>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
