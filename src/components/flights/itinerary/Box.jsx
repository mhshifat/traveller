export default function BoxItinerary({ from, to, subTitle }) {
	return (
		<div className="BoxItinerary">
			<h3>
				{from} &#8594; {to}
			</h3>
			<p>{subTitle}</p>

			<div className="BoxItinerary__list">
				<div className="BoxItinerary__list--item">
					<div className="BoxItinerary__list--header">
						<div>
							<img src="/assets/images/fares/fares.svg" alt="" />
							<span>Etihad Airlines</span>
						</div>

						<span>Economy class</span>
					</div>

					<div className="BoxItinerary__list--main">
						<div className="BoxItinerary__list--main__first">
							<p>20:25</p>
							<p>22:45</p>
						</div>

						<div className="BoxItinerary__list--main__second">
							<div>
								<h4>
									<b>Hyderbad .</b> Rajiv Gandhi International airport
								</h4>
								<p>
									02hr 30 m <span>2 Adults, 2 Kids</span>
								</p>
							</div>
							<div>
								<h4>
									<b>New Delhi .</b> Indira Gandhi International airport
								</h4>
							</div>
						</div>

						<div className="BoxItinerary__list--main__last">
							<div>
								<small>Check-in</small>
								<p>46 kgs</p>
							</div>
							<div>
								<small>Cabin</small>
								<p>7 kgs</p>
							</div>
						</div>
					</div>

					<div className="BoxItinerary__footer">
						<p>Change of planes . 02 hr 55m layover in New Delhi</p>
					</div>
				</div>

				<div className="BoxItinerary__list--item">
					<div className="BoxItinerary__list--header">
						<div>
							<img src="/assets/images/fares/fares.svg" alt="" />
							<span>Etihad Airlines</span>
						</div>

						<span>Economy class</span>
					</div>

					<div className="BoxItinerary__list--main">
						<div className="BoxItinerary__list--main__first">
							<p>20:25</p>
							<p>22:45</p>
						</div>

						<div className="BoxItinerary__list--main__second">
							<div>
								<h4>
									<b>Hyderbad .</b> Rajiv Gandhi International airport
								</h4>
								<p>
									02hr 30 m <span>2 Adults, 2 Kids</span>
								</p>
							</div>
							<div>
								<h4>
									<b>New Delhi .</b> Indira Gandhi International airport
								</h4>
							</div>
						</div>

						<div className="BoxItinerary__list--main__last">
							<div>
								<small>Check-in</small>
								<p>46 kgs</p>
							</div>
							<div>
								<small>Cabin</small>
								<p>7 kgs</p>
							</div>
						</div>
					</div>

					<div className="BoxItinerary__footer">
						<p>Change of planes . 02 hr 55m layover in New Delhi</p>
					</div>
				</div>

				<div className="BoxItinerary__list--item">
					<div className="BoxItinerary__list--header">
						<div>
							<img src="/assets/images/fares/fares.svg" alt="" />
							<span>Etihad Airlines</span>
						</div>

						<span>Economy class</span>
					</div>

					<div className="BoxItinerary__list--main">
						<div className="BoxItinerary__list--main__first">
							<p>20:25</p>
							<p>22:45</p>
						</div>

						<div className="BoxItinerary__list--main__second">
							<div>
								<h4>
									<b>Hyderbad .</b> Rajiv Gandhi International airport
								</h4>
								<p>
									02hr 30 m <span>2 Adults, 2 Kids</span>
								</p>
							</div>
							<div>
								<h4>
									<b>New Delhi .</b> Indira Gandhi International airport
								</h4>
							</div>
						</div>

						<div className="BoxItinerary__list--main__last">
							<div>
								<small>Check-in</small>
								<p>46 kgs</p>
							</div>
							<div>
								<small>Cabin</small>
								<p>7 kgs</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
