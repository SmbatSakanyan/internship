import {Component} from "react";
import {Button,FormControl,InputGroup} from "react-bootstrap";

class Search extends Component{

    render(){
        return(
    <InputGroup className="mb-3">
        <FormControl
          placeholder="....search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
    </InputGroup>
        )
    }
};

export default Search;