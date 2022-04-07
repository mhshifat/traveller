import { ChevronRight, ChevronLeft } from "@mui/icons-material";

export default function AllFares() {
	return (
		<div className="AllFares container">
			<div className="AllFares__first">
				<h3>Show all fares</h3>

				<div>
					<p>1 stop</p>
					<p>1+ stops</p>
				</div>
			</div>

			<div className="AllFares__divider" />

			<div className="AllFares__second">
				<div>
					<img src="/assets/images/fares/fares.svg" alt="" />
					<p>Air India</p>
					<h3>₹ 64,566.3</h3>
					<h3>₹ 64,566.3</h3>
				</div>
				<div>
					<img src="/assets/images/fares/fares.svg" alt="" />
					<p>Ethihad Airlines</p>
					<h3>-----</h3>
					<h3>₹ 64,566.3</h3>
				</div>
				<div>
					<img src="/assets/images/fares/fares.svg" alt="" />
					<p>Air India</p>
					<h3>₹ 64,566.3</h3>
					<h3>₹ 64,566.3</h3>
				</div>
				<div>
					<img src="/assets/images/fares/fares.svg" alt="" />
					<p>Air India</p>
					<h3>₹ 64,566.3</h3>
					<h3>₹ 64,566.3</h3>
				</div>
				<div>
					<img src="/assets/images/fares/fares.svg" alt="" />
					<p>Air India</p>
					<h3>₹ 64,566.3</h3>
					<h3>₹ 64,566.3</h3>
				</div>
				<div>
					<img src="/assets/images/fares/fares.svg" alt="" />
					<p>Air India</p>
					<h3>₹ 64,566.3</h3>
					<h3>₹ 64,566.3</h3>
				</div>
			</div>

			<div className="AllFares__divider" />

			<div className="AllFares__three">
				<ChevronLeft />
				<ChevronRight />
			</div>
		</div>
	);
}
