import React from "react" ;

const style ={
    "marginTop": "20px",
    "backgroundColor": "blue",
    "color": "#fff",
    "height": "50px",
    borderRadius: "60px"
}

function ElementsContainer () {

    const onDragStart = (event) => {
        event.dataTransfer.setData("id",event.target.id)
    }
    return(
        <>
            <h1>Elements</h1>
            <div id = "button" style={style} onDragStart ={onDragStart} draggable="true">Button</div><br/>
            <div id = "textinput" style={style} onDragStart ={onDragStart} draggable="true">textinput</div><br/>            
            <div id = "checkbox" style={style} onDragStart ={onDragStart} draggable="true">checkbox</div><br/>
            <div id = "radio" style={style} onDragStart ={onDragStart} draggable="true">radio</div><br/> 
            <div id = "textarea" style={style} onDragStart ={onDragStart} draggable="true">textarea</div><br/> 
            <div id = "select" style={style} onDragStart ={onDragStart} draggable="true">select</div><br/> 
        </>
    )   
};

export default ElementsContainer ;