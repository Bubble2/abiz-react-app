import React from 'react';
import {Link} from 'react-router-dom';
import reactLogo from '@images/react-logo.jpg';

export default class Index extends React.Component{
    render(){
        return(
            <div>
                <h1>Abiz React Scaffold Index</h1>
                <img src={reactLogo} alt=""/>
                <Link to="/demo1">demo1</Link>
                <Link to="/demo2">demo2</Link>
            </div>
        )
    }
}