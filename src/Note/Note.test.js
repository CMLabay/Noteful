import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Note from './Note'
import Adapter from 'enzyme-adapter-react-16';

describe('Note component ', () => {
    configure({adapter: new Adapter()});
    const props = {
        id: 'a',
        name: 'test-class-name',
        modified: '15th Aug 2018',
      }
    
    it('renders a .Note by default', () => {
    const wrapper = shallow(<Note />)
    expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders the Note given props', () => {
    const wrapper = shallow(<Note {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
    })

})