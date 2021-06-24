import {Component} from "react";
import Card from 'react-bootstrap/Card';
import{ListGroup,Button} from "react-bootstrap";


class Post extends Component {
    render() {
        return (
          <Card border ="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{this.props.title} </Card.Title>
              <Card.Text>
                {this.props.post}
              </Card.Text>
              <ListGroup variant="flush">
                {this.props.coments.map((coment, index)=>{
                    return <ListGroup.Item key ={index}>
                      <p>{coment.text + `   rating....${coment.rating}`}</p>
                      <Button>reply</Button>
                      </ListGroup.Item>
                })}
              </ListGroup>
            </Card.Body>
          </Card>
        )
    }
};

export default Post;