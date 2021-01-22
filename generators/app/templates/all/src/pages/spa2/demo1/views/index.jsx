import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import Nav from '@components/layout/nav'
import classNames from "classnames/bind";
import styles from "../styles/index.scss";
const cx = classNames.bind(styles);
import {asyncFetchPreData} from '../actions'


const mapStateToProps = (state) => ({
    preData: state.getIn(['demo1Reducer', 'preData']),
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        asyncFetchPreData
    }, dispatch)
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Demo1 extends React.Component{

    componentDidMount(){
        this.props.asyncFetchPreData();
    }

    render(){
        const {preData} = this.props;
        return(
            <div className={cx("wrap")}>
                <Nav actived="demo1"/>
                <ul>
                {
                    preData.get('data') && preData.getIn(['data', 'data']).map(item=>{
                        return <li key={item.get('id')}>
                            <span>{item.get('name')}</span>
                            <img src={item.get('imgUrl')} />
                        </li>
                    })
                }
                </ul>
            </div>
        )
    }
}

