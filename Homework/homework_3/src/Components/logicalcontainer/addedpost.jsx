import { Component } from "react";
import {Card,Button} from "react-bootstrap";

class AddedPost extends Component{
    handleSubmit = ()=>{
        // console.log(this.props.index)
        this.props.onRemove(this.props.item)
    }

    render(){
        return(
            <Card border ="primary" style={{ width: '22rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.title} </Card.Title>
                    <Card.Text>{this.props.post}</Card.Text>
                    <p>rating is {this.props.average}</p>
                    <Button variant="danger" onClick={this.handleSubmit}>remove</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default AddedPost;