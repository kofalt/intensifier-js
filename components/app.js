import React from 'react';
import Header from './header';
import Drawing from './drawing';
import Footer from './footer'
export default class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return ( < div > < Header / > < Drawing / > < Footer / > < /div>);
    }
}