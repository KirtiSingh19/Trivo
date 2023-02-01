import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./component/Navbar"
import Main from "./component/Main"
import Card from "./component/Card"
import Carddata from "./component/Carddata"
export default function App(){
    const Carddatas=Carddata.map(item=>{
        return <Card  id={item.id}
        {...item}
        />
    })
    return(
            <div>
            <Navbar 
            />
            <Main />
            {Carddatas}
            </div>
    )
}