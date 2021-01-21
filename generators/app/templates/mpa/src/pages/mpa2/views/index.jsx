import React from 'react';
import reactLogo from '@images/react-logo.jpg';

export default class Index extends React.Component{
    render(){
        return(
            <div>
                <h1>Abiz React Scaffold Mpa2</h1>
                <img src={reactLogo} alt=""/>
                <a href="/mpa.html">mpa</a>
                <a href="/mpa2.html">mpa2</a>
            </div>
        )
    }
}