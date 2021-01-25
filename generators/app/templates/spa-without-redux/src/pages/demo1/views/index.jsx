import React from 'react';
import Nav from '@components/layout/nav'
import classNames from "classnames/bind";
import styles from "../styles/index.scss";
const cx = classNames.bind(styles);
import {fetchDemo1Pre} from '../fetch';

export default class Demo1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            preData: []
        }
    }

    componentDidMount(){
        fetchDemo1Pre().then((data)=>{
            console.log('data', data);
            this.setState({
                preData: data.data
            })
        });
    }

    render(){
        return(
            <div className={cx("wrap")}>
                <Nav actived="demo1"/>
                <ul>
                    {
                        this.state.preData.map((item)=>{
                            return <li key={item.id}>
                                    <span>{item.name}</span>
                                    <img src={item.imgUrl} />
                                </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

