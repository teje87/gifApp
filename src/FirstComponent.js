import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types'; 


const FirstComponent = ({ text }) => {

    const [ counter, setCounter ] = useState(0);

    const handleAdd = () => {
        setCounter( counter + 1);
    };

    const handleSubstract = () => {
        setCounter(counter - 1);
    };

    return (
    <Fragment>
        <h1>Counter</h1>
        <p>{text}</p>
        <h2>{counter}</h2>
        <button onClick={ handleAdd }>+1</button>
        <button onClick={ handleSubstract }>-1</button>
    </Fragment>
    )
}

FirstComponent.propTypes = {
    text: PropTypes.string
}

FirstComponent.defaultProps = {
    counter: 0
}

export default FirstComponent;

