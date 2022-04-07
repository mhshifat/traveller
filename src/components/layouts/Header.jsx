import { Drawer } from "@mui/material";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { MenuAlt2Icon } from "@heroicons/react/solid";

const NAV_ITEMS = {
	ICONS: [
		{ icon: "/assets/images/headers/plane-fly.svg", title: "Flights" },
		{ icon: "/assets/images/headers/hotels.svg", title: "Hotels" },
		{ icon: "/assets/images/headers/cars.svg", title: "Cars" },
		{ icon: "/assets/images/headers/trains.svg", title: "Trains" },
		{ icon: "/assets/images/headers/packages.svg", title: "Packages" },
	],
	TEXT: [
		{ title: "Support" },
		{ title: "Contact us" },
		{ title: "Login / SignUp", button: true },
	],
};

export default function Header() {
	const [openDrawer, setOpenDrawer] = useState(false);

	return (
		<>
			<Drawer
				anchor="right"
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
			>
				<div className="MobileMenu">
					<div className="MobileMenu__icons">
						{NAV_ITEMS.ICONS.map((nav, navIdx) => (
							<Link
								to="/"
								key={navIdx}
								className={navIdx === 0 ? "active" : ""}
							>
								<img src={nav.icon} alt="" />
								<span>{nav.title}</span>
							</Link>
						))}
					</div>
					<div className="MobileMenu__texts">
						{NAV_ITEMS.TEXT.map((nav, navIdx) => (
							<Link
								key={navIdx}
								to="/"
								className={nav.button ? "btn-primary" : ""}
							>
								{nav.title}
							</Link>
						))}
					</div>
				</div>
			</Drawer>
			<header className="Header">
				<div className="Header__logo">
					<img src="/assets/images/headers/logo-icon.svg" alt="" />
					<img src="/assets/images/headers/traveller-text-logo.svg" alt="" />
				</div>

				<div className="Header__navs">
					<div className="Header__navs--iconTypes">
						{NAV_ITEMS.ICONS.map((nav, navIdx) => (
							<Link
								to="/"
								key={navIdx}
								className={navIdx === 0 ? "active" : ""}
							>
								<img src={nav.icon} alt="" />
								<span>{nav.title}</span>
							</Link>
						))}
					</div>

					<div className="Header__navs--textTypes">
						<a
							href="/"
							className="hamburger"
							onClick={(e) => {
								e.preventDefault();
								setOpenDrawer(true);
							}}
						>
							<MenuAlt2Icon />
						</a>
						{NAV_ITEMS.TEXT.map((nav, navIdx) => (
							<Fragment key={navIdx}>
								<Link to="/" className={nav.button ? "btn-primary" : ""}>
									{nav.title}
								</Link>
							</Fragment>
						))}
					</div>
				</div>
			</header>
		</>
	);
}
