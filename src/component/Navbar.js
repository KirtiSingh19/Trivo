import React from "react"
export default function Navbar(){
    const navs={
        display: "flex",
        alignItems: "center",
        height:"10px",
        padding:"30px 25px",
       boxShadow:"0px 2.98256px 7.456px rgba(0,0,0,0.1)",
       


    }
    const tri={
        marginRight:"auto",
        color:"rgb(236, 31, 3)",
        fontSize:"40px",
        fontWeight:"bold"
    
    }
    const ull={
        display: "flex",
        padding:"50px",
        gap:"60px"
    }
    return(
        <div>
            <nav style={navs}>
                <h1 className="text-xl "style={tri}>Tri<span>Vo</span>
                </h1>
                <ul style={ull}>
                    <li className="h"> Home</li>
                    <li className="h">About</li>
                    <li className="h">Blogs</li>
                    <li className="h">Contact</li>
                </ul>
            </nav>
            </div>
    )
}