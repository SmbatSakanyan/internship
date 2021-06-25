import {Component} from "react";
import Post from "./post";
import Search from "./search";


class PostsContainer extends Component {
    render() {
       return(
        <>
        <Search/>
        {this.props.posts.map((item,index) => {
            return <Post
            title ={item.title}
            post = {item.post}
            coments = {item.coments}
            key = {index}
            />
        })}
        </>
       ) 
    }
}


export default PostsContainer ;