import React, { useRef } from 'react'
import PropTypes from 'prop-types'

function ColorConverter(props) {
    const { newColorInput, onChangeHandler, rgbColor, backgroundColor} = props;

    const inputData = useRef();

    return (
        <div className='wrapper' >
            <form className='flex' style={{backgroundColor: backgroundColor}}> 
                <input
                className='block'
                ref={inputData} 
                type="textarea" 
                value={newColorInput} 
                onChange={() => onChangeHandler(inputData.current.value)}
                maxLength={7}>
                </input>
                <div className='result'>{rgbColor}</div>
            </form>
        </div>
    )
}

ColorConverter.propTypes = {
    newColorInput: PropTypes.string,
    onChangeHandler: PropTypes.func,
    rgbColor: PropTypes.string,
    backgroundColor: PropTypes.string,
}

export default ColorConverter

