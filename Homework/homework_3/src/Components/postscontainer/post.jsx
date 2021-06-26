import {Component} from "react";
import Card from 'react-bootstrap/Card';
import{ListGroup,Button} from "react-bootstrap";


class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      adding: false ,
      newComentValue: ""
    }
  }

  onAddComent = () =>{
    const newstate = {...this.state}
    newstate.adding = true;
    this.setState(newstate);
  }

  onAdd = () => {
      this.props.onAddComent(this.props.index , this.state.newComentValue)
      this.setState({adding: false,newComentValue:""})
  }

  onIputValueChange = (e) => {
      const newState ={...this.state}
      newState.newComentValue = e.target.value
      this.setState(newState)
  }

  
    render() {
      let input;
      if(this.state.adding){
        input = 
        <>
          <input type="text" onChange ={this.onIputValueChange}/>
          <Button onClick ={this.onAdd}>add</Button>
        </>
      }
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
              <Button onClick = {this.onAddComent}>Add Coment</Button>
              {input}
            </Card.Body>
          </Card>
        )
    }
};

export default Post;