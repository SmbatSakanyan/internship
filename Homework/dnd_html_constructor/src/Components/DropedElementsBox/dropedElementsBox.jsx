import React from "react" ;
import { useEffect } from "react";
import { useState } from "react";
import{Container} from "react-bootstrap";
import DropSpaceRow from "./DropSpaceRow";




function DropedElementsBox () {
    const [spaces,setSpaces] = useState([{
        elements:[]
    }]);
    const [colStyle,setColStyle] = useState({height: `${100/3}vh`});
    const [mainColStyle,setMainColStyle] = useState({"border": "3px dotted blue","height": `${100/3}vh`});


    const addRow = (index) => {
        if(index===0){
            const newSpaces = [...spaces];
            newSpaces.unshift({
                elements:[]
            });
            setSpaces(newSpaces);
        }
        if(spaces.length===index+1){
            const newSpaces = [...spaces];
            newSpaces.push({
                elements:[]
            });
            setSpaces(newSpaces);
        }
        if(spaces.length===1){
            const newSpaces = [...spaces];
            newSpaces.push({
                elements:[]
            });
            newSpaces.unshift({
                elements:[]
            });
            setSpaces(newSpaces);
        }    
    }

    const addingElements = (dropedElement,index) => {
        const newSpaces = [...spaces];
        newSpaces[index+1].elements = dropedElement;
        setSpaces(newSpaces)
    }

    const changeColStyle = () => {
        const newColStyle = {...colStyle};
        newColStyle.height = `${100/spaces.length}vh`;
        newColStyle.border = "3px dotted blue";
        setColStyle(newColStyle);
    }
    
    const changeMainColStyle = () => {
        const newMainColStyle = {...mainColStyle};
        newMainColStyle.border = "3px dotted blue";
        newMainColStyle.height = `${100/spaces.length}vh`
        setMainColStyle(newMainColStyle);
    }
    return(
        <Container>
            {
                spaces.map((item,index)=>{
                    return <DropSpaceRow
                    spacesLength ={spaces.length}
                    mainColStyle ={mainColStyle}
                    changeMainColStyle ={changeMainColStyle}
                    colStyle = {colStyle}
                    changeColStyle = {changeColStyle}
                    addRow = {addRow}
                    key ={index}
                    id = {item.id}
                    index={index}
                    elements={item.elements}
                    addingElements ={addingElements}
                    /> 
                })
            }
        </Container>
    )   
};

export default DropedElementsBox ;