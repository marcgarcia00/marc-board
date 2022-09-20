import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calendar from "./pages/calendar";
import Main from './pages/main';
import Money from './pages/money';
import Fitness from './pages/fitness';
import WIP from "./pages/wip";
import Todo from './pages/todo';
import TherapyNotes from "./pages/therapy-notes";

const App = () => {
    return(
        <Router>
            <Switch>
                <Route path="/money" component={Money}/>
                <Route path="/fitness" component={Fitness}/>
                <Route path="/wip" component={WIP}/>
                <Route path="/calendar" component={Calendar}/>
                <Route path="/todo" component={Todo}/>
                <Route path="/therapy-notes" component={TherapyNotes}/>
                <Route path="/" component={Main}/>
            </Switch>
        </Router>
    );
};
export default App;