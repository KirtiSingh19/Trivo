import React from "react"
export default function Star(props){
    const setimg=props.isFilled?"empty.png":"star.png"
    return(<div>
    <img className="w-8" src={`${setimg}`} onClick={props.click} />
    </div>)
}