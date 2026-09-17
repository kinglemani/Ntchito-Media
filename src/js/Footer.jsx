import { useRef } from "react";
import SCROLL_ANIMATION_HANDLER from "./scroll-detector";

const obj = [
	{
		label: "Contact Info",
		links: [
			{
				label: "ntchitomedia@gmail.com",
				url: "mailto:ntchitomedia@gmail.com",
				svg: function () {
					return (
						<svg
							viewBox="0 0 514.34052 390.04559"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill="currentColor"
								d="m 67.757542,0.045578 c -13.877525,0 -26.726454,4.16923 -37.407625,11.315769 -6.457014,4.320247 -9.601038,10.748114 -6.742765,17.961575 3.121134,7.876844 10.970064,12.104006 10.449988,12.278536 L 227.74973,204.12761 c 0,0 16.14411,16.79212 28.58008,16.82422 14.21562,0.0367 32.81055,-20.08594 32.81055,-20.08594 L 469.71848,52.272138 c 0,0 21.29682,-13.01403 21.28906,-31.009763 -0.004,-9.071149 -8.73628,-11.871101 -16.95152,-16.523561 -9.77066,-5.533321 -17.07249,-4.693236 -29.15394,-4.693236 z m 438.572268,99.31641 c -9.65636,-4.50285 -18.48578,2.545902 -18.48578,2.545902 L 273.40989,281.83855 c -4.98685,4.18444 -11.05398,6.17041 -17.06446,6.09961 -6.02133,0.0785 -12.09966,-1.90547 -17.0957,-6.09766 L 23.769625,101.03218 c 0,0 -8.195954,-7.978742 -17.4398173,-3.668242 -8.4490053,3.939852 -5.99999997,11.967352 -5.99999997,11.967352 v 213.28656 c 0,37.35539 30.07234227,67.42773 67.42773427,67.42773 H 444.90208 c 37.35539,0 67.07642,-30.07399 67.42773,-67.42773 l 2,-212.65446 c 0,0 0.64055,-6.57223 -8,-10.601402 z"
							/>
						</svg>
					);
				},
			},
			{
				label: "+265 (0) 888704307",
				url: "tel:+265 (0) 888704307",
				svg: function () {
					return (
						<svg
							viewBox="0 0 513.82513 492.88293"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill="currentColor"
								d="M 6.4919073,74.647429 C 0.46373429,99.239864 -2.8645747,127.11947 3.2532943,151.13672 58.102561,366.46158 241.33391,451.31539 346.32889,482.84753 c 44.99315,13.51237 55.57487,10.1952 77.24236,8.02838 21.6675,-2.16682 54.0384,-22.36548 54.0384,-22.36548 0,0 24.79531,-13.7155 33.99386,-42.44503 9.19855,-28.72953 -13.1414,-53.29096 -13.1414,-53.29096 0,0 -12.6184,-23.80215 -38.94443,-28.09114 -26.32603,-4.289 -44.38766,13.8406 -44.38766,13.8406 0,0 -16.8046,20.15172 -34.65678,23.06538 -17.85218,2.91364 -23.05003,-1.09874 -58.15762,-15.90121 -28.06631,-11.83365 -63.83861,-32.42536 -101.70064,-68.21531 -52.13967,-49.28623 -72.31871,-97.03874 -80.12832,-126.68617 -4.95526,-18.81162 -4.66859,-20.01492 -2.62942,-29.9283 2.03919,-9.91339 13.8053,-25.70784 13.8053,-25.70784 0,0 14.15938,-27.763221 11.98059,-43.638161 C 161.46432,55.637339 149.0557,41.489752 149.0557,41.489752 L 122.406,17.586064 c 0,0 -27.322769,-19.4951835 -53.968779,-17.43332954 C 41.791221,2.214588 28.398256,29.539455 28.398256,29.539455 c 0,0 -15.878178,20.515537 -21.9063487,45.107974 z"
							/>
						</svg>
					);
				},
			},
		],
	},
	{
		label: "Services",
		links: [
			{ label: "Web development", url: "" },
			{ label: "Digital marketing", url: "" },
			{ label: "Data analysis", url: "" },
			{ label: "Technical training", url: "" },
			{ label: "Graphic designing", url: "" },
			{ label: "Photography", url: "" },
			{ label: "Social media management", url: "" },
			{ label: "Accounting system installation", url: "" },
		],
	},
	{
		label: "Training",
		links: [
			{ label: "Graphic designing", url: "" },
			{ label: "Photography", url: "" },
			{ label: "Web development", url: "" },
			{ label: "Data analysis", url: "" },
			{ label: "Software training", url: "" },
			{ label: "Basic computer lessons", url: "" },
			{ label: "Accounting & packaging training", url: "" },
			{ label: "Designing training", url: "" },
		],
	},
	{
		label: "Navigation",
		links: [
			{ label: "Home", url: "#hero" },
			{ label: "About us", url: "#about" },
			{ label: "Services", url: "#services" },
			{ label: "The team", url: "#team" },
			{ label: "Projects", url: "" },
			{ label: "Pricing", url: "" },
			{ label: "Testimonials", url: "" },
			{ label: "News", url: "" },
			{ label: "Contact us", url: "#contact-two" },
			{ label: "FAQ", url: "#faq" },
		],
	},
	{
		label: "Social",
		links: [
			{ label: "Facebook", url: "" },
			{ label: "Youtube", url: "" },
			{ label: "LinkedIn", url: "" },
		],
	},
];

function Links() {
	return obj.map((category, index) => {
		return (
			<li key={index}>
				<ul>
					<li>
						<h3>{category.label}</h3>
					</li>
					{category.links.map((link, index2) => (
						<li key={index2}>
							<a href={link.url || "javascript:void"}>
								{link.svg ? link.svg() : ""}
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</li>
		);
	});
}

function Footer() {
	const FOOTER = useRef();

	document.addEventListener("scroll", (e) => {
		SCROLL_ANIMATION_HANDLER(window.scrollY, FOOTER.current);
	});

	return (
		<footer className="full-width grid-container" ref={FOOTER}>
			<div>
				<div>
					<p>
						Ntchito Media. Your trusted partner in this digital era.
					</p>
				</div>
				<ul>
					<Links />
				</ul>
			</div>
			<div>
				<p>Copyright Ntchito Media 2026</p>
			</div>
		</footer>
	);
}

export default Footer;
