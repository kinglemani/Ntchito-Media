import { Fragment, useRef, useState } from "react";
import SCROLL_ANIMATION_HANDLER from "./scroll-detector";
import bzImgUrl from "../assets/img/bz.jpeg";
import klImgUrl from "../assets/img/kl.jpg";
import ceoImgUrl from "../assets/img/ceo.jpg";
import founderImgUrl from "../assets/img/founder.jpg";

const obj = [
	{
		fullname: "Blessings Zuze",
		role: "Chief Programmer",
		photo: bzImgUrl,
		description:
			"The chief programmer with a broad range of skills and certifications. He holds a Computer Science (CS) diploma & degree from the Malawi University of Science and Technology (MUST). He is currently working at United Civil Services SACCO (UCSSACCO) as a Software engineer and Website developer.",
	},
	{
		fullname: "King Lemani",
		role: "Junior web designer",
		photo: klImgUrl,
		description:
			"Work's with Ntchito Media remotely as a part time job. Hoping to get industrial experience involving technical issues. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur ea ducimus. Corrupti deserunt, unde reprehenderit non officiis doloribus accusantium?",
	},
	{
		fullname: "Name Other",
		role: "CEO",
		photo: ceoImgUrl,
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo id maxime repellat? Molestias temporibus laudantium, voluptas exercitationem corrupti nam vel itaque vero natus quos voluptatem sapiente quod error repellat voluptatum nobis non? Nulla soluta praesentium delectus.",
	},
	{
		fullname: "Random Name",
		role: "Founder",
		photo: founderImgUrl,
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sint accusantium provident aliquid neque voluptates nisi beatae aspernatur? Impedit totam minus rem. Accusamus dolor assumenda, maiores, nostrum quisquam impedit alias, repellendus corporis voluptatem voluptatum quas!",
	},
];

function Profile() {
	return obj.map((person, index) => {
		return (
			<ul
				style={{
					backgroundImage: `url(${person.photo})`,
				}}
				key={index}
			>
				<li>{person.fullname}</li>
				<li>{person.role}</li>
				<li>
					<p>{person.description}</p>
				</li>
				<li>
					<button>Read more...</button>
				</li>
			</ul>
		);
	});
}

function ShiftButtons({ shifted }) {
	const [svgPrevious, setSvgPrevious] = useState(true);
	const [svgNext, setSvgNext] = useState(true);

	function previousRegularState() {
		setSvgPrevious(true);
	}

	function previousSolidState() {
		setSvgPrevious(false);
	}

	function nextRegularState() {
		setSvgNext(true);
	}

	function nextSolidState() {
		setSvgNext(false);
	}

	function previous() {
		shifted.current.scrollBy(-10, 0);
	}

	function next() {
		shifted.current.scrollBy(10, 0);
	}

	return (
		<>
			<button
				onMouseEnter={previousSolidState}
				onMouseLeave={previousRegularState}
				onClick={previous}
				title="Shift to previous member"
			>
				{svgPrevious ? (
					<svg
						viewBox="0 0 512 512"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill="currentColor"
							d="M 256,0 A 256,256 0 0 1 512,256 256,256 0 0 1 256,512 256,256 0 0 1 0,256 256,256 0 0 1 256,0 Z m 0,64 A 192,192 0 0 0 64,256 192,192 0 0 0 256,448 192,192 0 0 0 448,256 192,192 0 0 0 256,64 Z m 73.26562,36.26367 c 9.21061,-0.0789 18.37725,3.82 24.78711,11.45899 11.39532,13.5804 9.6351,33.68671 -3.94531,45.08203 L 231.89258,256 350.10742,355.19336 c 13.58041,11.39532 15.34063,31.50358 3.94531,45.08398 -11.3953,13.58041 -31.50357,15.33868 -45.08398,3.94336 L 161.88867,280.80469 C 154.24428,274.39028 150.34699,265.21719 150.43164,256 c -0.0847,-9.21718 3.81264,-18.39223 11.45703,-24.80664 L 308.96875,107.7793 c 5.94143,-4.98545 13.13309,-7.45422 20.29687,-7.51563 z"
						/>
					</svg>
				) : (
					<svg
						viewBox="0 0 512 512"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill="currentColor"
							d="M 256,0 A 256,256 0 0 1 512,256 256,256 0 0 1 256,512 256,256 0 0 1 0,256 256,256 0 0 1 256,0 Z m 73.26562,100.26367 c -7.16378,0.0614 -14.35544,2.53018 -20.29687,7.51563 L 161.88867,231.19336 c -7.64439,6.41441 -11.54173,15.58946 -11.45703,24.80664 -0.0846,9.21719 3.81264,18.39028 11.45703,24.80469 L 308.96875,404.2207 c 13.58041,11.39532 33.68868,9.63705 45.08398,-3.94336 11.39532,-13.5804 9.6351,-33.68866 -3.94531,-45.08398 L 231.89258,256 350.10742,156.80469 c 13.58041,-11.39532 15.34063,-31.50163 3.94531,-45.08203 -6.40986,-7.63899 -15.5765,-11.53789 -24.78711,-11.45899 z"
						/>
					</svg>
				)}
			</button>
			<button
				onMouseEnter={nextSolidState}
				onMouseLeave={nextRegularState}
				onClick={next}
				title="Shift to next member"
			>
				{svgNext ? (
					<svg
						viewBox="0 0 512 512"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill="currentColor"
							d="M 256,0 A 256,256 0 0 0 0,256 256,256 0 0 0 256,512 256,256 0 0 0 512,256 256,256 0 0 0 256,0 Z m 0,64 A 192,192 0 0 1 448,256 192,192 0 0 1 256,448 192,192 0 0 1 64,256 192,192 0 0 1 256,64 Z m -73.26562,36.26367 c -9.21061,-0.0789 -18.37725,3.82 -24.78711,11.45899 -11.39532,13.5804 -9.6351,33.68671 3.94531,45.08203 L 280.10742,256 161.89258,355.19336 c -13.58041,11.39532 -15.34063,31.50358 -3.94531,45.08398 11.3953,13.58041 31.50357,15.33868 45.08398,3.94336 L 350.11133,280.80469 c 7.64439,-6.41441 11.54168,-15.5875 11.45703,-24.80469 0.0847,-9.21718 -3.81264,-18.39223 -11.45703,-24.80664 L 203.03125,107.7793 c -5.94143,-4.98545 -13.13309,-7.45422 -20.29687,-7.51563 z"
						/>
					</svg>
				) : (
					<svg
						viewBox="0 0 512 512"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill="currentColor"
							d="M 256,0 A 256,256 0 0 0 0,256 256,256 0 0 0 256,512 256,256 0 0 0 512,256 256,256 0 0 0 256,0 Z m -73.26562,100.26367 c 7.16378,0.0614 14.35544,2.53018 20.29687,7.51563 l 147.08008,123.41406 c 7.64439,6.41441 11.54173,15.58946 11.45703,24.80664 0.0847,9.21719 -3.81264,18.39028 -11.45703,24.80469 L 203.03125,404.2207 c -13.58041,11.39532 -33.68868,9.63705 -45.08398,-3.94336 -11.39532,-13.5804 -9.6351,-33.68866 3.94531,-45.08398 L 280.10742,256 161.89258,156.80469 c -13.58041,-11.39532 -15.34063,-31.50163 -3.94531,-45.08203 6.40986,-7.63899 15.5765,-11.53789 24.78711,-11.45899 z"
						/>
					</svg>
				)}
			</button>
		</>
	);
}

function Team() {
	const SCROLLABLE = useRef();
	const TEAM = useRef();

	document.addEventListener("scroll", (e) => {
		SCROLL_ANIMATION_HANDLER(window.scrollY, TEAM.current);
	});

	return (
		<section id="team" className="full-width grid-container" ref={TEAM}>
			<div>
				<h1>THE TEAM</h1>
				<h2>Meet the team</h2>
			</div>
			<div>
				<div ref={SCROLLABLE}>
					<Profile />
				</div>
				<div>
					<ShiftButtons shifted={SCROLLABLE} />
				</div>
			</div>
		</section>
	);
}

export default Team;
