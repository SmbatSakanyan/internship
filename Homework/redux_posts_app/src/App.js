import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import PostsContainer from "./Components/PostsContainer/PostsContainer";
import LogicalContainer from "./Components/LogicalContainer/LogicalContainer";


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <PostsContainer/>
          </Col>
          <Col>
            <LogicalContainer/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
