import axios from "axios";
import React, { useState } from "react";
import { Form,Button } from "react-bootstrap";

// const style = {
//     backgroundColor:"#000",
//     color: "white"
// }

function PostingForm() {
    const [post,setPost] =useState({
        author: "",
        text:""
    })

    const onchangeHandler = (e) =>{
        setPost({...post,[e.target.name]:e.target.value})
    }


    const  onAdd = () => {
        axios.post("/api/posts",post)
    }
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Author</Form.Label>
                    <Form.Control name ="author" onChange ={onchangeHandler} type="email" placeholder="type your name ...." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>your article </Form.Label>
                    <Form.Control as="textarea"  rows={3}  onChange ={onchangeHandler} name = "text"/>
                </Form.Group>
                <Button onClick = {onAdd}>ADD</Button>
            </Form>
        </div>
    );
}

export default PostingForm;