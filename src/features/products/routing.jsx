import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {List} from './components';
const RoutingProducts=(props)=>{
    const {match:{path} }=props;
    console.log(path);
    return(
    <Switch>
        <Route path={`${path}`} component={List}/>
    </Switch>
    )
}
export {
    RoutingProducts
}