import { useEffect, useRef, useState } from "react";
import SCROLL_ANIMATION_HANDLER from "./scroll-detector";

function Number() {
	const [update, setUpdate] = useState();
	const num = useRef();
	useEffect(() => {
		num.current = 0;
	}, []);
	useEffect(() => {
		const timer = setInterval(() => {
			if (num.current < 100) {
				num.current += 1;
				setUpdate((update) => !update);
			}
		}, 30);

		return function () {
			clearInterval(timer);
		};
	}, [num.current]);
	return <>{num.current || 0}</>;
}

function Trained() {
	const TRAINED = useRef();

	document.addEventListener("scroll", (e) => {
		SCROLL_ANIMATION_HANDLER(window.scrollY, TRAINED.current);
	});

	return (
		<section id="trained" className="full-width" ref={TRAINED}>
			<p>
				Trained over <Number />+ entrepreneurs
			</p>
		</section>
	);
}

export default Trained;
