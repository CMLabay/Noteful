import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import LinkButton from './LinkButton'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <LinkButton />
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});