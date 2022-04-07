import { Outlet, useLocation } from "react-router-dom";

const STEPS = [
	{
		label: "Flight",
		path: "/flights/booking",
		icon: "/assets/images/headers/plane-fly.svg",
	},
	{
		label: "Details",
		path: "/flights/itinerary",
		icon: "/assets/images/headers/plane-fly.svg",
	},
	{ label: "Payment", path: "", icon: "/assets/images/headers/plane-fly.svg" },
];

export default function FlightsLayout() {
	const { pathname } = useLocation();

	return (
		<div className="FlightsLayout">
			<div className="FlightsLayout__steps">
				{STEPS.map((step, stepIdx) => (
					<div
						key={stepIdx}
						className={`FlightsLayout__steps--step ${
							step.path === pathname ||
							stepIdx < STEPS.findIndex((step) => step.path === pathname)
								? "active"
								: ""
						}`}
					>
						<p>{step.label}</p>
						<span
							style={{
								...(stepIdx === 2
									? { "--beforeStepWidth": "136px" }
									: stepIdx === 1
									? { "--beforeStepWidth": "125px" }
									: {}),
							}}
						></span>
						<img
							src={step.icon}
							alt=""
							style={{
								...(pathname === step.path ? { opacity: 1 } : { opacity: 0 }),
							}}
						/>
					</div>
				))}
			</div>
			<Outlet />
		</div>
	);
}
