import { useEffect, useRef, useState } from "react";

function Purpose() {
	let start = 5;
	const [change, setChange] = useState(true);
	useEffect(() => {
		const timer = setInterval(() => {
			setChange((change) => !change);
		}, start * 1000);
		return () => {
			clearInterval(timer);
		};
	});

	function reuse({ string, num }) {
		return string.split("").map((letter, index) => {
			return (
				<span
					key={index}
					style={{
						animation: `reappear${num || ""} ${start - ((string.length - 1) * 50) / 1000}s ${index * 50}ms forwards`,
					}}
				>
					{letter}
				</span>
			);
		});
	}
	return (
		<>
			{change ? (
				<span className="text">
					{reuse({ string: "promoting businesses" })}
				</span>
			) : (
				<span className="text">
					{reuse({ string: "nurturing entrepreneurs", num: 2 })}
				</span>
			)}
		</>
	);
}

function Hero() {
	const HERO = useRef();
	function SCROLL_ANIMATION_HANDLER(SCROLL_POSITION_Y, ELEMENT_MATCH_TOP) {
		let REDUCED =
			ELEMENT_MATCH_TOP.offsetTop -
			Math.floor((30 / 100) * window.innerHeight);

		if (SCROLL_POSITION_Y >= REDUCED) {
			ELEMENT_MATCH_TOP.classList.add("activate-animation");
		}
		if (SCROLL_POSITION_Y <= REDUCED) {
			ELEMENT_MATCH_TOP.classList.remove("activate-animation");
		}
	}

	document.addEventListener("scroll", (e) => {
		SCROLL_ANIMATION_HANDLER(window.scrollY, HERO.current);
	});

	return (
		<section
			id="hero"
			className="activate-animation grid-container"
			ref={HERO}
		>
			<div className="wrapper">
				<div>
					<p>
						We are a <br /> software organization
						<br />
						dedicated to <br />
						<Purpose />
						<br />
						using <span>technology</span>.
					</p>
				</div>
				<div></div>
			</div>
		</section>
	);
}

export default Hero;
