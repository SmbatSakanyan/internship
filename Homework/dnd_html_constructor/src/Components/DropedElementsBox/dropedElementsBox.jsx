import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import DropSpaceRow from "./DropSpaceRow";




function DropedElementsBox() {
    const [spaces, setSpaces] = useState([{
        elements: []
    }]);
    // const [spaces,setSpaces] = useState([]);
    const [colStyle, setColStyle] = useState({ height: `${100 / 3}vh` });
    const [mainColStyle, setMainColStyle] = useState({ border: "3px dotted blue", borderRadius: "60px", height: `${100 / 3}vh` });


    const addElemetsToRow = (index, element, side) => {
        const newspaces = [...spaces]
        newspaces[index].elements = [...spaces[index].elements]

        if (side === 0 || side === -1) {
            newspaces[index].elements.push(element);
        }
        if (side === 1) {
            newspaces[index].elements.unshift(element)
        }
        setSpaces(newspaces);
    }

    const addRow = (index) => {
        if (index === 0) {
            const newSpaces = [...spaces];
            newSpaces.unshift({
                elements: []
            });
            setSpaces(newSpaces);
        }
        if (spaces.length === index + 1) {
            const newSpaces = [...spaces];
            newSpaces.push({
                elements: []
            });
            setSpaces(newSpaces);
        }
        if (spaces.length === 1) {
            const newSpaces = [...spaces];
            newSpaces.push({
                elements: []
            });
            newSpaces.unshift({
                elements: []
            });
            setSpaces(newSpaces);
        }
    }


    const changeColStyle = useCallback(
        () => {
            const newColStyle = { ...colStyle };
            newColStyle.height = `${100 / spaces.length}vh`;
            newColStyle.border = "3px dotted red";
            newColStyle.borderRadius = "60px";
            setColStyle(newColStyle);
        },[spaces.length,colStyle]
    )
    const changeMainColStyle = useCallback(
        () => {
            const newMainColStyle = { ...mainColStyle };
            newMainColStyle.border = "3px dotted blue";
            newMainColStyle.height = `${100 / spaces.length}vh`
            setMainColStyle(newMainColStyle); 
        },[spaces.length,mainColStyle]
    )

    // const changeMainColStyle = () => {
    //     const newMainColStyle = { ...mainColStyle };
    //     newMainColStyle.border = "3px dotted blue";
    //     newMainColStyle.height = `${100 / spaces.length}vh`
    //     setMainColStyle(newMainColStyle);
    // }

    return (
        <Container>
            {
                spaces.map((item, index) => {
                    return <DropSpaceRow
                        spacesLength={spaces.length}
                        mainColStyle={mainColStyle}
                        changeMainColStyle={changeMainColStyle}
                        colStyle={colStyle}
                        changeColStyle={changeColStyle}
                        addRow={addRow}
                        key={index}
                        index={index}
                        elements={item.elements}
                        addElemetsToRow={addElemetsToRow}
                    />
                })
            }
        </Container>
    )
};

export default DropedElementsBox;