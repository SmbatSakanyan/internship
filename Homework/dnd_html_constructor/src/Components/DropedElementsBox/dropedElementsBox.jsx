import React from "react" ;
import { useState } from "react";
import{Container,Row,Col} from "react-bootstrap";
import DropedElement from "./dropedElement";


const sideColStyle ={
    "height": "31vh"
}


const mainColStyle = {
    "border": "3px dotted blue",
    "height": "31vh"
}

function DropedElementsBox () {
    const [colStyle,setColStyle] = useState({height: "31vh"});
    const[dropedElements,setDropedElements] = useState([]);
    const[topDropedElements,setTopDropedElements] = useState([]);
    const[bottomDropedElements,setBottomDropedElements] = useState([]);


    const onDrop = (e) => {
        e.preventDefault()
        // console.log(e.dataTransfer.getData("id"))
        const newDropedElements = [...dropedElements];
        newDropedElements.push({type: e.dataTransfer.getData("id")});
        setDropedElements(newDropedElements);

        const newColStyle = {...colStyle};
        newColStyle.border = "3px dotted blue";
        setColStyle(newColStyle);
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

    const onTopDrop = (e) => {
        e.preventDefault()
        const newTopDropedElements = [...topDropedElements];
        newTopDropedElements.push({type: e.dataTransfer.getData("id")});
        setTopDropedElements(newTopDropedElements);
    }

    const onBottomDrop = (e) => {
        e.preventDefault()
        const newBottomDropedElements = [...bottomDropedElements];
        newBottomDropedElements.push({type: e.dataTransfer.getData("id")});
        setBottomDropedElements(newBottomDropedElements);
    }

    const onDragOver = (e) => {
        e.preventDefault()
    }
    return(
        <>
            <h1>DropedElementsBox</h1>
            <Container>
                <Row md = {3}>
                    <Col xs ={4} style ={sideColStyle}></Col>
                    <Col onDragOver = {(e) => onDragOver(e)} onDrop = {(e) => onTopDrop(e)} xs ={6} style ={colStyle}>
                        {
                            topDropedElements.map((item,index) => {
                                return <DropedElement
                                        type = {item.type}
                                        key = {index}
                                        /> 
                            })
                        }
                    </Col>
                    <Col xs ={2} style ={sideColStyle}></Col>
                </Row>
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
                <Row md = {3}>
                    <Col xs ={4} style ={sideColStyle}></Col>
                    <Col onDragOver = {(e) => onDragOver(e)} onDrop = {(e) => onBottomDrop(e)} xs ={6} style ={colStyle}>
                        {
                            bottomDropedElements.map((item,index) => {
                                return <DropedElement
                                        type = {item.type}
                                        key = {index}
                                        /> 
                            })
                        }
                    </Col>
                    <Col xs ={2} style ={sideColStyle}></Col>
                </Row>
            </Container>
        </>
    )   
};

export default DropedElementsBox ;