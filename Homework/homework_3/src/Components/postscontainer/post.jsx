import {Component} from "react";
import Card from 'react-bootstrap/Card';
import{ListGroup,Button} from "react-bootstrap";


class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      adding: false ,
      newComentValue: "",
      newReplyValue: ""
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

  replyInputChange = (e) => {
      const newState ={...this.state}
      newState.newReplyValue = e.target.value
      this.setState(newState)
  }

    render() {
      let input;
      
      let replyButton;
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
                {
                this.props.coments.map((coment, index)=>{
                  let reply
                  if(coment.reply){
                      reply = `reply =>   ${coment.reply}`
                  }
                  let comindex;
                  comindex =index;
                  let replyInput;
                    if(!coment.replying && !coment.reply)  {
                      replyButton = <Button onClick = {() =>{
                        this.props.onReply(this.props.index,comindex)
                      }}>reply</Button>
                    }

                    if(coment.replying){
                      replyInput =
                      <>
                        <input type="text" onChange ={this.replyInputChange}/>
                        <Button onClick ={
                          ()=>{
                              this.props.onAddReply(this.props.index,comindex,this.state.newReplyValue)
                              const newState ={...this.state}
                              newState.newReplyValue = ""
                              this.setState(newState)
                          }
                        }>Reply</Button>
                      </>
                    }
                    return <ListGroup.Item key ={index}>
                      <p>{coment.text + `   rating....${coment.rating}`}</p>
                      <p>{reply}</p>
                      {replyButton}
                      {replyInput}
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