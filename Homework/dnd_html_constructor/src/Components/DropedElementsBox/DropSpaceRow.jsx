import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import DropedElement from "./dropedElement";



function DropSpaceRow({ addElemetsToRow, addRow, changeColStyle, colStyle, index, mainColStyle, changeMainColStyle, spacesLength, id, elements }) {



    useEffect(() => {
        if (spacesLength > 1) {
            changeMainColStyle(spacesLength)
            changeColStyle(spacesLength)
        }
    }, [spacesLength])



    const onDrop = (e) => {
        e.preventDefault()
        const element = { type: e.dataTransfer.getData("id") };
        addElemetsToRow(index, element, 0)
        addRow(index)
        console.log(elements)
    }

    const onMiddleLeftDrop = (e) => {
        e.preventDefault()

        const element = { type: e.dataTransfer.getData("id") };
        addElemetsToRow(index, element, 1)

    }

    const onMiddleRightDrop = (e) => {
        e.preventDefault()
        const element = { type: e.dataTransfer.getData("id") };
        addElemetsToRow(index, element, -1)
    }

    const onDragOver = (e) => {
        e.preventDefault()
    }

    return (
        <Row md={3}>
            <Col onDragOver={(e) => onDragOver(e)} onDrop={(e) => onMiddleLeftDrop(e)} xs={4} style={colStyle}></Col>
            <Col xs={6} style={mainColStyle}
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => onDrop(e)}
            >
                {
                    elements.map((item, index) => {
                        return <DropedElement
                            type={item.type}
                            key={index}
                        />
                    })
                }
            </Col>
            <Col onDragOver={(e) => onDragOver(e)} onDrop={(e) => onMiddleRightDrop(e)} xs={2} style={colStyle}></Col>
        </Row>
    )
}

export default DropSpaceRow;