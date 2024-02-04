//This is the Button component
import { useState } from "react"

function Button(props){

    //declare state to track value

    const [ buttonData, setButtonData ] = useState({
        searchterm: "random"
    })

    //handleChange to update the state
    const handleChange = (event) => {
        //grab the input
        const input = event.target

        //get the text - would be 'random' from the input
        const val = input.value
        console.log(val)

        //make a copy of the current state ~ new object
        const newState = {...buttonData}

        //update the new state, the new object
        newState.searchterm = val

        //update the state
        setButtonData(newState)
        console.log(newState)
    }

    //function for button submission
    const handleSubmit = (event) => {
        

        //search a random gif using the prop
        props.getGif(buttonData.searchterm)
    }


    return<button onClick={handleSubmit}>This is the Button component</button>
}

//export out
export default Button