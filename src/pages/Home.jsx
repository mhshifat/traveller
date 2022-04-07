import SearchFlights from "../components/home/SearchFlights";
import TopPicsDestinations from "../components/home/TopPicsDestinations";
import ExplorePlaces from "../components/home/ExplorePlaces";

export default function Home() {
	return (
		<div className="Home">
			<SearchFlights />
			<TopPicsDestinations />
			<ExplorePlaces />
		</div>
	);
}
