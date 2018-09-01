import React, { Component } from 'react';
import { Text, Heading } from './components';

export default class App extends Component {
    render() {
        return (
            <div>
                <Heading.h1>React app now running</Heading.h1>
                <Text color="primary">Some styled text</Text>
            </div>
        );
    }
}
