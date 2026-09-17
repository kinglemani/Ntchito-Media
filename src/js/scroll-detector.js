export default function SCROLL_ANIMATION_HANDLER(
	SCROLL_POSITION_Y,
	ELEMENT_MATCH_TOP,
) {
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
