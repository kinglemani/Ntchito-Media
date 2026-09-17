import { useRef } from "react";
import SCROLL_ANIMATION_HANDLER from "./scroll-detector";
import imgUrl from "../assets/img/img.jpg";

function ContactTwo() {
	const CONTACT_TWO = useRef();

	document.addEventListener("scroll", (e) => {
		SCROLL_ANIMATION_HANDLER(window.scrollY, CONTACT_TWO.current);
	});

	return (
		<section id="contact-two" className="grid-container" ref={CONTACT_TWO}>
			<div>
				<h1>CONTACT US</h1>
				<h2>Reach out to us</h2>
			</div>
			<div>
				<form action="">
					<div>
						<input type="text" id="name" placeholder="" />
						<label htmlFor="name">Name</label>
					</div>
					<div>
						<input type="text" id="email" placeholder="" />
						<label htmlFor="email">Email</label>
					</div>
					<div>
						<textarea
							type="text"
							id="message"
							placeholder=""
						></textarea>
						<label htmlFor="message">Message</label>
					</div>
					<div>
						<input type="submit" value="Send message" />
					</div>
				</form>
				<img src={imgUrl} alt="" />
			</div>
		</section>
	);
}

export default ContactTwo;
