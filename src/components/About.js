import React, {useState } from 'react'

export default function About() {
    const [myStyle,setmyStyle] = useState({
        color:'black',
        backgroundColor:'white'
    })
    const [myText,setMyText] = useState("Enable dark mode")
    
    const toggleClick = ()=>{
        if(myStyle.color === 'black'){
            setmyStyle({
                color:'white',
                backgroundColor:'black',
                border:'1px solid white'
            })
            setMyText('Enable light mode')
        }else{
            setmyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setMyText('Enable dark mode')
        }
    }
    
    return (
        <div className='container'>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About Us #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        <button className="btn btn-primary my-3" onClick={toggleClick}>{myText}</button>
        </div>
    )
}
