//Error Boundary test
import { mount } from 'enzyme';
import React from 'react';
import ErrorBoundary from '../../components/ErrorBoundary'
import jsdom from 'jsdom-global/register';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';


configure({ adapter: new Adapter() });

const Child = () => {
    throw "error";
};

it('catches error and displays message', () => {
    const wrapper = mount(
        <ErrorBoundary render={() => <span>Oops! Error</span>}>
            <Child/>
        </ErrorBoundary>
    );

    const text = wrapper.text();
    expect(text).toEqual('Oops! Error');

});