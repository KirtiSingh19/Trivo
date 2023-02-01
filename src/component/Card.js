import React from "react"
import Carddata from "./Carddata"
import Star from "./Star"
export default function Card(props)
{
    const [contact,setcon]=React.useState([""])
    function changeimg(){
        setcon(prevcon=>{
           return{
               ...prevcon,
               bool:!prevcon.bool
           }
        })
       }
       const [contact1,setcon1]=React.useState([""])
       function changeimg1(){
        setcon1(prevcon=>{
           return{
               ...prevcon,
               bool:!prevcon.bool
           }
        })
       }
       const [contact2,setcon2]=React.useState([""])
       function changeimg2(){
        setcon1(prevcon=>{
           return{
               ...prevcon,
               bool:!prevcon.bool
           }
        })
       }
   
    return(
        <div className="ml-20 all cursor-pointer hover:!blur-none">
            <div className="card h-full w-[370px] border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden transform transition duration-500 hover:scale-110">
                <img src={props.imgg} className="lg:h-100 md:h-60 w-full object-cover object-center" />
                <div className="p-6 hover:bg-indigo-500 hover:text-white transition duration-200 ease-in">
                <div className=" card-stats">
                <div className="flex ">
                <img src={props.iconimg} className="h-7"/>
                <span><Star isFilled={contact.bool} click={changeimg}/></span> 
                <span><Star isFilled={contact1.bool} click={changeimg1}/></span>
                <span><Star isFilled={contact2.bool} click={changeimg2}/></span>
                <span className="text-xl text-red-600 font-bold">{props.rating}</span>  
                 </div>
                 <span className="text-xl">{props.name}</span>
                 <h3>{props.content}</h3>
                 </div>
                 </div>
            </div>
        </div>
    

    )
}
