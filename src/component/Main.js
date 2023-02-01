import React from "react"
export default function Main(){

    const imagestyles={
        width:"100%",
        height:"530px",
        position:"relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }
    const heading={
        position: "absolute",
        textAlign: "center",
        top:"35%",
        color:"white",
        marginLeft:"9%",
        fontSize:"70px",
        fontWeight:"bold",
        overflow: "hidden",
        whiteSpace: "nowrap",
        animation:"text 8s steps(30) infinite",
        

    }
  
     
    const para=
    {
    fontSize:"25px",
    position: "absolute",
    textAlign: "center",
    top:"50%",
    color:"white",
    marginLeft:"4%",
   }
   
    return (
        <div>
            <main>
            <img style={imagestyles} src="h4.jpg"/>
            </main>
            <div className="headd" style={heading} >Leave Your Footprints</div>
            <div style={para}>“Once the Travel bug bites there is no known antidote, and I know that I shall be <br/> happily infected until the end of my life.”</div>
            <br />
            <br />
            <div className="text-3xl text-center font-family: primary,secondary,serif;">Featured Tours</div>
            <br/>
            <div className="text-5xl font-extrabold text-center ">Most Popular Tours</div>
            <br />
            <br />
           </div>
    )
}