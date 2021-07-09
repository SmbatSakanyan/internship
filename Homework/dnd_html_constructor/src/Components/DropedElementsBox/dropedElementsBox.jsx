import React from "react" ;
import { useEffect } from "react";
import { useState } from "react";
import{Container} from "react-bootstrap";
import DropSpaceRow from "./DropSpaceRow";




function DropedElementsBox () {
    const [spaces,setSpaces] = useState([[]]);
    const [colStyle,setColStyle] = useState({height: `${100/spaces.length}vh`});
    const [mainColStyle,setMainColStyle] = useState({"border": "3px dotted blue","height": `${100/3}vh`});



    const addRow = (index) => {
        const newSpaces = [...spaces];
        if(newSpaces[!index+1]){
            newSpaces.push({id: -1});
        }
        if(newSpaces[!index-1]){
            newSpaces.unshift({id: 2});
        }
        console.log(spaces[index+1])
        setSpaces(newSpaces);
    }

    const changeColStyle = (spacesLength) => {
        const newColStyle = {...colStyle};
        newColStyle.height = `${100/spacesLength}vh`;
        newColStyle.border = "3px dotted blue";
        setColStyle(newColStyle);
    }
    
    const changeMainColStyle = (spacesLength) => {
        const newMainColStyle = {...mainColStyle};
        newMainColStyle.border = "3px dotted blue";
        newMainColStyle.height = `${100/spacesLength}vh`
        setMainColStyle(newMainColStyle);
    }
    return(
        <Container>
            {
                spaces.map((item,index)=>{
                    return <DropSpaceRow
                    spacesLength ={spaces.length}
                    index ={index}
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