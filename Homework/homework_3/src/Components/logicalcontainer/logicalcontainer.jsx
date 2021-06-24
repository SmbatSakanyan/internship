import {Component} from "react";
import {Container,Row,Col,Button} from "react-bootstrap";
import AddedPost from "./addedpost"

class LogicalContainer extends Component {
  constructor(props){
    super(props)
    this.state ={
      firstPostsArr: [],
      secondPostsArr: []
    }
  }

  addPostToFirst = ()=>{
    const posts =[...this.props.posts]
    const addedPost = posts.reverse().find((item)=> item.visibility === undefined);

    if(addedPost){
    const newState = {...this.state};
    newState.firstPostsArr.push(addedPost)
    this.setState(newState)
    this.props.setVisibilityTrue(this.props.posts.indexOf(addedPost))
    } else alert("nothing to add")
  }

  addPostToSecond = ()=>{
    const posts =[...this.props.posts]
    const addedPost = posts.reverse().find((item)=> item.visibility === undefined);
    if(addedPost){
      const newState = {...this.state};
      newState.secondPostsArr.push(addedPost)
      this.setState(newState)
      this.props.setVisibilityTrue(this.props.posts.indexOf(addedPost))
    } else alert("nothing to add")
  }

  onRemoveFromFirst = (item) => {
    const newState = {...this.state};
    newState.firstPostsArr = newState.firstPostsArr.filter((p)=> {
      return p!==item
    } );
    this.setState(newState);
    this.props.setVisibilityFalse(this.props.posts.indexOf(item))
  };

  onRemoveFromSecond = (item) => {
    const newState = {...this.state};
    newState.secondPostsArr = newState.secondPostsArr.filter((p)=> {
      return p!==item
    } );
    this.setState(newState);
    this.props.setVisibilityFalse(this.props.posts.indexOf(item))
  }

  average = (arr) => {
    let result = 0;
    arr.forEach(element => {
       result = result + element.rating 
    });
    return result/arr.length;
  }

  sortByRatingFirst = () => {
    const newState ={...this.state}
    newState.firstPostsArr.sort((a,b) => this.average(a.coments) - this.average(b.coments) )
    this.setState(newState)
  }

  sortByRatingSecond = () => {
    const newState ={...this.state}
    newState.secondPostsArr.sort((a,b) => this.average(a.coments) - this.average(b.coments) )
    this.setState(newState)
  }

    render() {
        return (
          <Container>
            <Row>
              <Col>
                <Button onClick ={this.addPostToFirst}>Add Post</Button>
                <Button onClick ={this.sortByRatingFirst}>Sort</Button>
                { 
                  this.state.firstPostsArr.map((item,index)=>{
                    
                    return(
                      <AddedPost
                      item = {item}
                      title ={item.title}
                      post = {item.post}
                      coments = {item.coments}
                      key = {index}
                      onRemove ={this.onRemoveFromFirst}
                      average ={this.average(item.coments)}
                      />
                    )
                  })
                }
              </Col>
              <Col>
                <Button onClick={this.addPostToSecond}>Add Post</Button>
                <Button onClick ={this.sortByRatingSecond}>Sort</Button>
                {
                  this.state.secondPostsArr.map((item,index)=>{
                    
                    return(
                      <AddedPost
                      item = {item}
                      title ={item.title}
                      post = {item.post}
                      coments = {item.coments}
                      key = {index}
                      onRemove = {this.onRemoveFromSecond}
                      index = {index}
                      average ={this.average(item.coments)}
                      />
                    )
                  })
                }
              </Col>
            </Row>
          </Container>
        )
    }
}


export default LogicalContainer ;