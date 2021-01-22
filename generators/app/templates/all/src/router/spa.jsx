import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import renderRoutes from './renderRoutes';
import routes from './spaRoutes';

export default class RootRouter extends React.Component{
    render(){
        return (
            <Router basename="/spa/">
                {renderRoutes(routes)}
            </Router>
        )
    }
}