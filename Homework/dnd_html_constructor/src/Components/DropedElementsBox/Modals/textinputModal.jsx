import{React,useState} from "react";
import {Button,Modal,InputGroup,FormControl} from "react-bootstrap"

function TextInpitModal(props) {
    const [show, setShow] = useState(false);
    const[finaltype, setFinalType] = useState("");
    const[placeholder, setPlaceholder] = useState("");
    const[minlength, setMinlength] = useState("");
    const[maxlength, setMaxLength] = useState("");
    const [atributedElement,setAtributedElement] = useState(["",{}]);
    
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const saveChanges =() => {
        const newAtributedElement =[...atributedElement]
        newAtributedElement[0] = finaltype;
        newAtributedElement[1] = {
            placeholder: placeholder,
            maxlength: maxlength,
            minlength: minlength
        }
        setAtributedElement(newAtributedElement[1])
        setShow(false);
        console.log(atributedElement)
    }
  
    return (
      <>
        <Button size ="sm" variant="primary" onClick={handleShow}>
          {props.type}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>choose atributes for {props.type}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox />
              <FormControl onChange ={(e) => setFinalType(e.target.value)} placeholder ="type atribute"/>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox  />
              <FormControl onChange ={(e) => setPlaceholder(e.target.value)} placeholder ="placeholder atribute"/>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox />
              <FormControl onChange ={(e) => setMaxLength(e.target.value)} placeholder ="maxlenght atribute"/>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox />
              <FormControl onChange ={(e) => setMinlength(e.target.value)} placeholder ="minlenght atribute"/>
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={saveChanges}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default TextInpitModal;

  