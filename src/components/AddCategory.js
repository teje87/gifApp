import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleType = (e)=> {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.length > 2){
            setCategories( cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <>
            <h2>Add Category</h2>  
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleType}
                /> 
            </form>
            
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

AddCategory.defaultProps = {

}

export default AddCategory;