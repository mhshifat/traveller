import { Link } from "react-router-dom";
import { BookmarkBorder, MoreVert } from "@mui/icons-material";

export default function ExplorePlaces() {
	return (
		<div className="ExplorePlaces container">
			<h3>
				Explore deals from switzerland
				<Link to="/">See all packages</Link>
			</h3>

			<div className="ExplorePlaces__items">
				{new Array(3).fill("").map((_, idx) => (
					<div key={idx} className="ExplorePlaces__items--item">
						<div className="ExplorePlaces__items--item__img">
							<img src="/assets/images/explore-places/1.jpg" alt="" />
							<div>
								<BookmarkBorder />
							</div>
						</div>
						<div className="ExplorePlaces__items--item__content">
							<h3>
								Alpha Majestic
								<MoreVert />
							</h3>
							<p>14 days trip consisting 8 Swiss districts</p>

							<div className="ExplorePlaces__items--item__lists">
								<div>
									<span>2N</span>
									<span>Lucerne</span>
								</div>
								<div>
									<span>2N</span>
									<span>Lucerne</span>
								</div>
								<div>
									<span>2N</span>
									<span>Lucerne</span>
								</div>
								<small>+3 more</small>
							</div>

							<div className="ExplorePlaces__items--item__divider" />

							<div className="ExplorePlaces__items--item__includes">
								<div className="ExplorePlaces__items--item__includes--lists">
									<p>Includes</p>

									<ul>
										<li>Food</li>
										<li>Utilities</li>
										<li>Accomodation</li>
										<li>Activities</li>
									</ul>
								</div>

								<div className="ExplorePlaces__items--item__includes--price">
									<span>
										<h4>₹ 25000</h4>
										<small>per person</small>
									</span>
									<button className="btn-primary">Book</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
