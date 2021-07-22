import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
const axios = require("axios").default;

function SerchArticle() {
    
    const [value, setValue] = useState("");
    const [posts, setPosts] = useState([]);

    const getdata = async () => {
        const data = await axios.get("/api/posts", {params:{value}}).then(
            (res) => res.data
        )
    setPosts([data])
}
return (
    <div>
        <InputGroup size="sm" className="mb-3">
            <FormControl onChange={(e) => setValue(e.target.value)} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            <Button onClick={getdata}>Search</Button>
        </InputGroup>

        {
            posts.map(
                (item, index) => {
                    return (
                        <div key={index}>
                            <h1 >{item.author}</h1>
                            <p>{item.text}</p>
                            <p>{item.id}</p>
                        </div>
                    )
                }
            )
        }

    </div>
)
}

export default SerchArticle;