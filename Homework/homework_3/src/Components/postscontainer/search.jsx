import {Component} from "react";
import {Button,FormControl,InputGroup} from "react-bootstrap";

class Search extends Component{
  constructor(props){
    super(props);
    this.state ={
      searchInput: "",
      resultArr: []
    }
  }

  searchInPosts = () => {
      this.props.posts.forEach((post) => {
          if(post.post.includes(this.state.searchInput)){
            const newState = {...this.state}
            newState.resultArr.push(post)
            this.setState(newState)
            this.props.searchedPosts(this.state.resultArr)
            this.setState({
             searchInput: "",
             resultArr: []
            })
          }
      })
  }

    render(){
        return(
          <InputGroup className="mb-3">
              <FormControl
                onChange ={(e)=>{
                  const newState = {...this.state}
                  newState.searchInput = e.target.value;
                  this.setState(newState)
                }}
                placeholder="....search"
                aria-describedby="basic-addon2"
              />
              <Button onClick={this.searchInPosts} variant="outline-secondary" id="button-addon2">
                Search
              </Button>
          </InputGroup>
        )
    }
};

export default Search;