import { Link } from "react-router-dom";
import FooterInputs from "../common/FooterInputs";

export default function Footer() {
	return (
		<footer className="Footer">
			<div className="Footer__tops">
				<div className="Footer__tops--left">
					<h3 className="Footer__section">Get the flight app today!!!</h3>
					<div className="Footer__tops--left__inner">
						<div>
							<p>Scan the QR code and install</p>
							<img src="/assets/images/footer/iphone.svg" alt="" />
						</div>
						<div>
							<p>Send a download link to install our app:</p>
							<FooterInputs
								placeholder="Enter your mobile here..."
								btnText="Send SMS"
							/>
						</div>
					</div>
				</div>
				<div className="Footer__tops--right">
					<h3 className="Footer__section">Connect with us</h3>
					<p style={{ opacity: 0 }}>Hi</p>
					<FooterInputs
						placeholder="Enter your email here..."
						btnText="Sign up"
					/>
				</div>
			</div>

			<div className="Footer__links">
				<h3 className="Footer__section">Easy Access</h3>

				<div className="Footer__link--grid">
					<div>
						<h4>Quick Links</h4>
						<Link to="/">Popular Airlines</Link>
						<Link to="/">Popular Air routes</Link>
						<Link to="/">Top US destinations</Link>
						<Link to="/">Top international destinations</Link>
						<Link to="/">Site Directories</Link>
					</div>
					<div>
						<h4>Book</h4>
						<Link to="/">Cheap Flights</Link>
						<Link to="/">Cheap Hotels</Link>
						<Link to="/">Car Rentals</Link>
						<Link to="/">Vacation Packages</Link>
						<Link to="/">Group Travel</Link>
					</div>
					<div>
						<h4>Traveller tools</h4>
						<Link to="/">Gift cards</Link>
						<Link to="/">Cheapoair credit cards</Link>
						<Link to="/">Check my booking</Link>
						<Link to="/">Customer support</Link>
						<Link to="/">Online checkin</Link>
						<Link to="/">Airline baggage fees</Link>
					</div>
					<div>
						<h4>LEGAL</h4>
						<Link to="/">General Info</Link>
						<Link to="/">Privacy Policy</Link>
						<Link to="/">Terms of Service</Link>
					</div>
					<div>
						<h4>About flight</h4>
						<Link to="/">support@ercom.com</Link>
						<Link to="/">About Us</Link>
						<Link to="/">Contact Us</Link>
						<Link to="/">Careers</Link>
						<Link to="/">Newsletter</Link>
						<Link to="/">Advertise with us</Link>
					</div>
				</div>
			</div>

			<div className="Footer__copy">
				<div></div>
				<p>© 2022 Flight. All Rights Reserved. </p>
				<div className="Footer__copy--socials">
					<span>
						<img src="/assets/images/footer/facebook.svg" alt="" />
					</span>
					<span>
						<img src="/assets/images/footer/linkedin.svg" alt="" />
					</span>
					<span>
						<img src="/assets/images/footer/twitter.svg" alt="" />
					</span>
				</div>
			</div>
		</footer>
	);
}
