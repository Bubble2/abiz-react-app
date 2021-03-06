import React from 'react';
import reactLogo from '@images/react-logo.jpg';
import {fetchDemo1Pre} from '../fetch';

export default class Index extends React.Component{

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
            <div>
                <h1>Abiz React Scaffold Mpa1</h1>
                <img src={reactLogo} alt=""/>
                <a href="/mpa1.html">mpa1</a>
                <a href="/mpa2.html">mpa2</a>
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