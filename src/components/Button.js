//This is the Button component
import { useState } from "react"

function Button(props){

    //function for button submission
    const handleSubmit = () => {
        

        //search a random gif using the prop
        props.getGif()
    }

    return<button onClick={handleSubmit}>Random GIF</button>
}

//export out
export default Button