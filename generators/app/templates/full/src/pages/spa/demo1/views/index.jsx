import React from 'react';
import Nav from '@components/layout/nav'
import classNames from "classnames/bind";
import styles from "../styles/index.scss";
const cx = classNames.bind(styles);


export default class Index extends React.Component{
    render(){
        return(
            <div className={cx("wrap")}>
                <Nav actived="demo1"/>
            </div>
        )
    }
}