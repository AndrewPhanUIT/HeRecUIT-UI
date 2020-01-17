import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Authorization from '../Authorization';
import Helmet from 'react-helmet';
import PatientInfo from '../PatientInfo';
import Permission from '../Permission';

function App() {

    return (
        <main>
            <Helmet
                titleTemplate="%s - HeREC@DMD.UIT"
                defaultTitle="HeREC@DMD.UIT"
            />
                 
            <Router>
                <Route exact path="/">
                    <Redirect to="/login"/>
                </Route>
                <Route path="/login" component={Authorization}/>
                <Route path="/patient-info" component={PatientInfo}/>
                <Route path="/permission" component={Permission}/>
            </Router>
        </main>
    );
}

export default App;
