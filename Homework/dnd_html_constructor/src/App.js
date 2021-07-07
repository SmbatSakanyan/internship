import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from "react-bootstrap";
import ElementsContainer from './Components/DragableElementsBox/elementsContainer';
import DropedElementsBox from './Components/DropedElementsBox/dropedElementsBox';

const ElementsContainerStyles = {
  border: "3px solid blue",
  height: "100vh",
}


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col style = {ElementsContainerStyles} xs = {3}>
            <ElementsContainer/>
          </Col>
          <Col style = {ElementsContainerStyles}>
            <DropedElementsBox/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
