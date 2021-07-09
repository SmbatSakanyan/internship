import { useEffect } from "react";
import {React,useState} from "react";
import { Row,Col} from "react-bootstrap";
import DropedElement from "./dropedElement";



function DropSpaceRow ({addRow,changeColStyle,colStyle,index,mainColStyle,changeMainColStyle,spacesLength}){
    const[dropedElements,setDropedElements] = useState([]);

    useEffect(()=>{
        changeMainColStyle(spacesLength)
        changeColStyle(spacesLength)
    })


    const onDrop = (e) => {
        e.preventDefault()
        // console.log(e.dataTransfer.getData("id"))
        const newDropedElements = [...dropedElements];
        newDropedElements.push({type: e.dataTransfer.getData("id")});
        setDropedElements(newDropedElements);
        // console.log(index)
        addRow(index)
        changeMainColStyle()
        changeColStyle()   
    }

    const onMiddleLeftDrop = (e) => {
        e.preventDefault()
        const newDropedElements = [...dropedElements];
        newDropedElements.unshift({type: e.dataTransfer.getData("id")});
        setDropedElements(newDropedElements);
    }

    const onMiddleRightDrop = (e) => {
        e.preventDefault()
        const newDropedElements = [...dropedElements];
        newDropedElements.push({type: e.dataTransfer.getData("id")});
        setDropedElements(newDropedElements);
    }

    const onDragOver = (e) => {
        e.preventDefault()
    }

    return (
        <Row md = {3}>
            <Col onDragOver = {(e) => onDragOver(e)} onDrop = {(e) => onMiddleLeftDrop(e)} xs ={4} style ={colStyle}></Col>
            <Col xs ={6} style ={mainColStyle} 
            onDragOver = {(e) => onDragOver(e)}
            onDrop = {(e) => onDrop(e)}
            >
                {
                    dropedElements.map((item,index) => {
                        return <DropedElement
                                type = {item.type}
                                key = {index}
                                /> 
                    })
                            }
            </Col>
            <Col onDragOver = {(e) => onDragOver(e)} onDrop = {(e) => onMiddleRightDrop(e)} xs ={2} style ={colStyle}></Col>
        </Row>
    )
}

export default DropSpaceRow;