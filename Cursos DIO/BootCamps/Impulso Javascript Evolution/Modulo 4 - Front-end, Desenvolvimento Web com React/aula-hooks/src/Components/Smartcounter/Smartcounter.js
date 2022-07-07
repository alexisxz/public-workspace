import { useState } from 'react';

function Smartcounter() {
    const [quantity, upQuantity] = useState(1);
    //retorna um valor
    //1. variavel stateful
    //2. função amarrada a essa variável que atualiza seu valor

    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={() => upQuantity(quantity + 1)}>Increase</button>
        </>
    )
}

export default Smartcounter;