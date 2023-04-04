import React from 'react'
import './input.less'

const Input = (props) => {
    console.log(props)
    return (
        <>  
            {
                props.type == 'submit' ?
                <input class="submit" type={props.type} value={props.name} />
                :
                <input class="text" type={props.type} placeholder={props.name} />
            }
        </>
    )
}

export default Input
