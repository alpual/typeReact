import * as React from "react";

let Logo = "http://paulweekswright.com/img/logo-small.png";

export default class FirstComponent extends React.Component <{}> {
	render() {
		return (
			<div>
				{/* React components must have a wrapper node/element */}
				<h1>A badass react component with Typescript</h1>
				<div>
					<img src={Logo} />
				</div>
				<p>Fantastic bit of coding.</p>
			</div>
		);
	}
}
