import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import renderRoutes from './renderRoutes';
import routes from './spa2Routes';

export default class RootRouter extends React.Component{
    render(){
        return (
            <Router basename="/spa2/">
                {renderRoutes(routes)}
            </Router>
        )
    }
}