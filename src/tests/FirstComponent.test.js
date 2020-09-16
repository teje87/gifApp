import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import FirstComponent from '../FirstComponent';
import { shallow } from 'enzyme';

describe('<FirstComponent>', () => {

    test('El contador debe estar a 0', () => {
        
        const wrapper = shallow(<FirstComponent/>)

        const counter = wrapper.find('h2').text().trim();
        
        expect(counter).toBe('0');
    });

    test('Debe mostrar el mensaje de texto', () => {
        const textInput = "Este es un texto de prueba"

        const wrapper = shallow(<FirstComponent text={textInput} />);

        const text = wrapper.find('p').first().text()
        expect(text).toBe(textInput);
    })

    test('El boton de añadir debe sumar uno al contador', ()=> {

        const wrapper = shallow(<FirstComponent />);

        wrapper.find('button').at(0).simulate('click');
        const counter = wrapper.find('h2').text().trim();

        expect(counter).toBe('1');
    });
    
    test('El boton de restar debe restar uno al contador', ()=> {

        const wrapper = shallow(<FirstComponent />);

        wrapper.find('button').at(1).simulate('click');
        const counter = wrapper.find('h2').text().trim();

        expect(counter).toBe('-1');
    });

    test('El componente coincide con el snapshot', () => {
        const wrapper = shallow(<FirstComponent />);
        expect(wrapper).toMatchSnapshot();
    });
    
});

