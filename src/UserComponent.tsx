import * as React from "react";
import UserInterface from "./UserInterface";

export default class UserComponent extends React.Component<UserInterface, {}> {
	constructor (props: UserInterface){
		super(props);
	}
	render() {
		return ( 
			<div>
				<h1>User Component</h1>
				Hello, {this.props.name}
				<br/>
				Your are {this.props.age} years old,
				<br/>
				You live at: {this.props.address}
				<br/>
				you were born: {this.props.dob.toDateString()}
			</div>
		);
	}
}