import React, { useState, useEffect } from 'react'
import '../Ifoodcounter/Ifoodcounter.css'

export default function Ifoodcounter() {

    const [value, setValue] = useState(1)
    const [buttonStyle, setButtonStyle] = useState('counter-button-minus-active')
    const [currency, setCurrency] = useState(4.50)

    useEffect(() => {
        setCurrency(4.50 * value)
    }, [value])

    function down() {

        if (value <= 1) {
            //change the css
            setButtonStyle('counter-button-minus-desactive')
        }

        if (value > 0) {
            setValue(value - 1)
        }

    }

    function up() {
        setValue(value + 1)
        setButtonStyle('counter-button-minus-active')
    }


    return (
        <div className='countex-wrapper'>
            <button className={buttonStyle} onClick={down}>
                -
            </button>

            <p>{value}</p>

            <button className='counter-button-plus-active' onClick={up}>
                +
            </button>

            <button id='currency'>
                {currency}
            </button>

        </div>
    )
}
