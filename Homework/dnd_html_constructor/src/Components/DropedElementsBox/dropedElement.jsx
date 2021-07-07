import React from "react";
import TextInpitModal from "./Modals/textinputModal";
import RadioModal from "./Modals/radioModal";
import TextareaModal from "./Modals/textareaModal";
import SelectModal from "./Modals/selectModal";
import ButtonModal from "./Modals/buttonModal";
import CheckboxModal from "./Modals/checkboxModal";



const DropedElement = (props) => {
    switch (props.type) {
        case "button":
          return <ButtonModal type ={props.type}/>;
        case "textinput":
          return <TextInpitModal type ={props.type}/>;
        case "checkbox":
          return <CheckboxModal type ={props.type}/>;
        case "radio":
          return <RadioModal type ={props.type}/>;
        case "select":
          return <SelectModal type ={props.type}/>;
        case "textarea":
          return <TextareaModal type ={props.type}/>;
        default:
          alert( "I don't know such values" );
      }
}

export default DropedElement;