import * as React from "react";
import styles from "../css/myproject.less";

export default class Header extends React.Component{
	render(){
		console.log(styles);
		let l = styles.logo +" " + styles.left;
		return <div className={styles.head}>
		<div id={styles.l} className={l}>你号</div>
		<ul>
		<li className={styles.in_block}>陈先生</li>
		<li className={styles.in_block}>李先生</li>
		<li className={styles.in_block}>张先生</li>
		<li className={styles.in_block}>黄先生</li>
		<li className={styles.in_block}>黎先生</li>
		</ul>
		</div>;
	}
}
