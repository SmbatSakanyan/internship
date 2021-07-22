import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostingForm from "./Components/postingForm";
import SerchArticle from "./Components/gettingform";
import { Container, Row, Col } from "react-bootstrap";



function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <PostingForm />
          </Col>
          <Col>
            <SerchArticle />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
