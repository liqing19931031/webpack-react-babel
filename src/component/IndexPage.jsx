import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
class IndexPage extends React.Component{
	render() {
		return (
			<div>
				<Link to='/'>首页</Link>
				<Link to='/shop'>店铺中心</Link>
				<Link to='/user'>用户中心</Link>
				{this.props.children}
			</div>
		)
	}
}
export default IndexPage;