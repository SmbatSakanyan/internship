import React from "react" ;
import { useEffect } from "react";
import { useState } from "react";
import{Container} from "react-bootstrap";
import DropSpaceRow from "./DropSpaceRow";




function DropedElementsBox () {
    const [spaces,setSpaces] = useState([1]);
    const [colStyle,setColStyle] = useState({height: `${100/spaces.length}vh`});
    const [mainColStyle,setMainColStyle] = useState({"border": "3px dotted blue","height": `${100/3}vh`});


    const addRow = (row) => {
        const newSpaces = [...spaces];
        newSpaces.push({id: -1});
        newSpaces.unshift({id: 2});
        setSpaces(newSpaces);
        console.log(newSpaces)
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
        console.log(spaces.length)
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
                    /> 
                })
            }
        </Container>
    )   
};

export default DropedElementsBox ;