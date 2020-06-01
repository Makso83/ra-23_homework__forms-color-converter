import React, { useState, useEffect } from 'react'
import ColorConverter from '../ColorConverter/ColorConverter'


function ColorConverterContainer() {

    const [newColorInput, setNewColorInput] = useState('');
    const [rgbColor, setRgbColor] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        setRgbColor(hexToRGB(newColorInput));
        const isError = ((newColorInput.length === 7) && !rgbColor);
        setError(isError ? true : false);
    }, [newColorInput, rgbColor])

    const onChangeHandler = (data) => {
        setNewColorInput(data);
    }

    const hexToRGB = (color) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
        return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null
    }

    return (
        <div>
            <ColorConverter
                newColorInput={newColorInput}
                onChangeHandler={onChangeHandler}
                rgbColor={!error ? rgbColor : 'Ошибка!'}
                backgroundColor={error ? '#e94b35' : rgbColor}
            />
        </div>
    )
}

export default ColorConverterContainer
