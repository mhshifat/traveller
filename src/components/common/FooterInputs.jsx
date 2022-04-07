import { forwardRef } from "react";

function FooterInputs({ btnText, ...rest }, ref) {
	return (
		<form className="FooterInputs">
			<input type="text" ref={ref} {...rest} />
			<button type="submit" className="btn-primary">
				{btnText}
			</button>
		</form>
	);
}

export default forwardRef(FooterInputs);
