import 'bootstrap/dist/css/bootstrap.min.css';
import PostsContainer from "./Components/postscontainer/postscontainer";
import LogicalContainer from "./Components/logicalcontainer/logicalcontainer";
import {Container,Row,Col} from "react-bootstrap";
import someposts from "./someposts";



  function App() {
    const posts = someposts;
    const setVisibilityTrue = (index)=>{
      posts[index].visibility = true;
    }
    const setVisibilityFalse = (index)=>{
      posts[index].visibility = undefined;
    }


  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm={4}>
            <PostsContainer
            posts ={posts}
            />
          </Col>
          <Col>
            <LogicalContainer
            setVisibilityTrue = {setVisibilityTrue}
            setVisibilityFalse = {setVisibilityFalse}
            posts ={posts}
            />
          </Col>
        </Row>
      </Container> 
    </div>
  );
}

export default App;
