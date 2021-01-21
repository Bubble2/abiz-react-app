import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from '@router/spa';

import 'core-js/es6/map';
import 'core-js/es6/set';

const render = (App) => {
    ReactDOM.render(<App/>,document.getElementById('root'))
};
render(RootRouter);




