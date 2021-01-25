import React from 'react';
import {Link} from 'react-router-dom';


export default class Nav extends React.Component{
    constructor(props){
        super(props);
        this.navList = [
            {
                key: 'demo1',
                name: 'demo1',
                link: '/demo1'
            },
            {
                key: 'demo2',
                name: 'demo2',
                link: '/demo2'
            }
        ]
    }
    render(){
        const {actived} = this.props;
        return(
            <div className="nav">
                {
                    this.navList.map(item=>{
                        return this.props.actived === item.key?(
                            <span key={item.key}>{item.name}</span>
                        ):(
                            <Link to={item.link} key={item.key}>{item.name}</Link>
                        )
                    })
                }
                
                
            </div>
        )
    }
}