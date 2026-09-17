import { useRef } from "react";
import imgUrl from "../assets/img/img.jpg";

const obj = [
	{
		service: "Web development",
		description:
			"We design and develop modern websites that scale and stand out with modern tools such as",
		tools: [
			"React",
			"NodeJS",
			"ExpressJS",
			"SEO",
			"HTML, CSS & JavaScript",
		],
	},
	{
		service: "Digital marketing",
		description:
			"We make ads & promote businesses and products on all renown social platforms, that includes",
		tools: [
			"Facebook",
			"Tiktok",
			"LinkedIn",
			"X (Formerly Twitter}",
			"Pinterest",
			"Youtube",
		],
	},
	{
		service: "Graphic designing",
		description:
			"We make logos, icons, posters, wedding and product cards and anything that might involve graphic designing using the following tools",
		tools: [
			"Adobe Photoshop",
			"Adobe Illustrator",
			"Gimph",
			"Inkscape",
			"Figma",
			"Canva",
		],
	},
	{
		service: "Fin-tech services",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique minus possimus? Expedita, nisi illum doloribus quos quisquam porro similique, asperiores saepe velit non reiciendis.",
		tools: ["Accounting", "Software training"],
	},
	{
		service: "Technical training",
		description:
			"We offer skill based technical lessons helping you to strive in this digital era. We train in",
		tools: [
			"Data analysis",
			"Digital marketing",
			"Graphic designing",
			"Basic computer knowledge",
			"Software training",
		],
	},
	{
		service: "Software development",
		description:
			"We make software for any type of business that help in tracking finances and overalll business performance using",
		tools: ["Python", "Flutter & dart", "Laravel", "React Native", "Java"],
	},
];

function Services() {
	const SERVICES = useRef();
	function SCROLL_ANIMATION_HANDLER(SCROLL_POSITION_Y, ELEMENT_MATCH_TOP) {
		let REDUCED =
			ELEMENT_MATCH_TOP.offsetTop -
			Math.floor(
				(70 /*element appears screen is this percent visible*/ / 100) *
					window.innerHeight,
			);

		if (SCROLL_POSITION_Y >= REDUCED) {
			ELEMENT_MATCH_TOP.classList.add("activate-animation");
		}
		if (SCROLL_POSITION_Y <= REDUCED) {
			ELEMENT_MATCH_TOP.classList.remove("activate-animation");
		}
	}

	document.addEventListener("scroll", (e) => {
		SCROLL_ANIMATION_HANDLER(window.scrollY, SERVICES.current);
	});

	function printServices() {
		return obj.map((service, index) => (
			<li key={index}>
				<div>
					<img src={imgUrl} alt="" />
				</div>
				<div>
					<h3>{service.service}</h3>
					<p>{service.description}</p>
					<ol>
						{service.tools.map((tool, index) => (
							<li key={index}>
								<span>{index + 1}</span>
								<span>{tool}</span>
							</li>
						))}
					</ol>
					<button title="Learn more">Learn more...</button>
				</div>
			</li>
		));
	}

	return (
		<section
			id="services"
			className="full-width grid-container"
			ref={SERVICES}
		>
			<div>
				<h1>OUR SERVICES</h1>
				<h2>What we do</h2>
			</div>
			<div>
				<ul>{printServices()}</ul>
			</div>
		</section>
	);
}

export default Services;
