require('css/main.less');
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from 'react-router';
import Routes from "route/router";


ReactDOM.render(
	<Routes />, document.getElementById("root")//这里需要在index定一个ID然后写入组件不然react-dom会报错
);