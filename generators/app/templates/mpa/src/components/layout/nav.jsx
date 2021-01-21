import React from 'react';

export default class Nav extends React.Component{
    constructor(props){
        super(props);
        this.navList = [
            {
                key: 'mpa1',
                name: 'mpa1',
                link: '/mpa1'
            },
            {
                key: 'mpa2',
                name: 'mpa2',
                link: '/mpa2'
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
                            <a href={item.link} key={item.key}>{item.name}</a>
                        )
                    })
                }
                
                
            </div>
        )
    }
}