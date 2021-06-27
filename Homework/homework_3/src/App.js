import 'bootstrap/dist/css/bootstrap.min.css';
import PostsContainer from "./Components/postscontainer/postscontainer";
import LogicalContainer from "./Components/logicalcontainer/logicalcontainer";
import {Container,Row,Col} from "react-bootstrap";
import someposts from "./someposts";
import { useState } from 'react';



  function App() {

    const [posts,setPosts] = useState(someposts);

    const setVisibilityTrue = (index)=>{
      const newPosts = [...posts];
      newPosts[index].visibility = true;
      setPosts(newPosts)
    }
    const setVisibilityFalse = (index)=>{
      const newPosts = [...posts];
      newPosts[index].visibility = undefined;
      setPosts(newPosts)
    }

    const addComent = (index,coment) => {
      const newPosts = [...posts];
      newPosts[index].coments.push({rating: 0, text: coment});
      setPosts(newPosts)
    }

    const onReply = (a,b) =>{
      const newPosts = [...posts];
      newPosts[a].coments[b].replying = true;
      setPosts(newPosts)
    }
    const onAddReply = (a,b,value) => {
      const newPosts = [...posts];
      newPosts[a].coments[b].reply = value;
      newPosts[a].coments[b].replying = false;
      setPosts(newPosts)
    }


  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm={4}>
            <PostsContainer
            posts ={posts}
            addComent ={addComent}
            onReply = {onReply}
            onAddReply ={onAddReply}
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
