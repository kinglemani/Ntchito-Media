import { useRef } from "react";
import SCROLL_ANIMATION_HANDLER from "./scroll-detector";

function About() {
	const ABOUT = useRef();

	document.addEventListener("scroll", (e) => {
		SCROLL_ANIMATION_HANDLER(window.scrollY, ABOUT.current);
	});

	return (
		<section id="about" ref={ABOUT}>
			<div className="wrapper grid-container content">
				<div>
					<h1>ABOUT US</h1>
					<h2>Who we are</h2>
				</div>
				<div>
					<div>
						<p>
							Ntchito media is a software organization offering a
							broad range of technical services to businesses,
							companies and any client. We are expert at digital
							marketing, data analysis, graphic designing,
							developing websites and building software. We also
							offer skill based computer lessons aimed at
							promoting the use of technology for productivity and
							growth.
						</p>
						<p>Your trusted partner in this digital era.</p>
						<p>
							<button>Enroll now</button>
							<button>Hire us</button>
						</p>
					</div>
					<div></div>
				</div>
			</div>
		</section>
	);
}

export default About;
