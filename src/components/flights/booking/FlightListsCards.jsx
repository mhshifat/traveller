import { ExpandMore, FavoriteBorder } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function FlightListsCards({ items = [] }) {
	return (
		<div className="FlightListsCards">
			{items.map((item, itemId) => (
				<div
					key={itemId}
					className="FlightListsCards__item"
					// style={{
					// 	...(item.status
					// 		? {
					// 				paddingTop: "4rem",
					// 		  }
					// 		: {}),
					// }}
				>
					{item.status && (
						<span
							className="FlightListsCards__item--status"
							style={{ background: item.status.bg }}
						>
							{item.status.label}
						</span>
					)}
					<div className="FlightListsCards__item--firstRow">
						<div className="FlightListsCards__item--first">
							<div>
								<img src={item.img} alt="" />
								<span>{item.title}</span>
							</div>
						</div>

						<div className="FlightListsCards__item--second">
							<div className="FlightListsCards__item--second__row">
								<div className="FlightListsCards__item--second__text">
									<h3>11:00</h3>
									<p>
										14 Apr <b>BOM</b>
									</p>
								</div>
								<div className="FlightListsCards__item--second__diagram">
									<p>28h 32m</p>
									<p>
										-------- <span></span> ---- <span></span> ---------{" "}
										<img src="/assets/images/headers/plane-fly.svg" alt="" />
									</p>
									<p>2 stops</p>
								</div>
								<div className="FlightListsCards__item--second__text">
									<h3>23:45</h3>
									<p>
										<b>DEL</b>
									</p>
								</div>
							</div>
							{item.flights.length === 2 && (
								<div className="FlightListsCards__item--second__row">
									<div className="FlightListsCards__item--second__text">
										<h3>11:00</h3>
										<p>
											14 Apr <b>BOM</b>
										</p>
									</div>
									<div className="FlightListsCards__item--second__diagram">
										<p>28h 32m</p>
										<p>
											-------- <span></span> ---- <span></span> ---------{" "}
											<img src="/assets/images/headers/plane-fly.svg" alt="" />
										</p>
										<p>2 stops</p>
									</div>
									<div className="FlightListsCards__item--second__text">
										<h3>23:45</h3>
										<p>
											<b>DEL</b>
										</p>
									</div>
								</div>
							)}
						</div>

						<div className="FlightListsCards__item--last">
							<div>
								<h3>₹ 47,996</h3>
								<p>*including tax</p>
							</div>
							<div>
								<button className="btn-primary">Book</button>
							</div>
						</div>
					</div>
					<div className="FlightListsCards__item--divider"></div>
					<div className="FlightListsCards__item--footer">
						<Link to="/">
							Flight details <ExpandMore />
						</Link>
						<div>
							<p>Economy class</p>
							<p>2 Adults, 2 Kids</p>
							<FavoriteBorder />
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
