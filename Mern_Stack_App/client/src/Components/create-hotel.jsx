import { Button, Grid, TextField, makeStyles } from "@material-ui/core"
import axios from "axios";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function CreateHotel() {
    const classes = useStyles()

    const [input, setInput] = useState({
        title: '',
        content: '',
        location: '',
        image: '',
        price: '',
        bed: '',
    });

    const handleImageChange = (e) => {
        let imageValue = e.target.files[0];
        if (!e.target.files[0]) {
            imageValue = input.image;
        }
        setInput({
            ...input,
            image: imageValue,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        let hotelData = new FormData();

        hotelData.append('title', input.title);
        hotelData.append('content', input.content);
        hotelData.append('location', input.location);
        hotelData.append('price', input.price);
        hotelData.append('image', input.image);
        hotelData.append('withCredentials', true);

        console.log(hotelData)

        await axios.post("/hotels",hotelData).then(res=>console.log(res))
    }

    // // const handleChange = () => {

    // }
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <>
            <form onSubmit={handleSubmit} className={classes.form} enctype="multipart/form-data" noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            name="title"
                            value={input.username}
                            onChange={handleChange}
                            variant="outlined"
                            required
                            fullWidth
                            id="title"
                            label="title"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            value={input.password}
                            onChange={handleChange}
                            name="content"
                            label="content"
                            id="content"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            value={input.confirmPassword}
                            onChange={handleChange}
                            name="location"
                            label="location"
                            id="location"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            value={input.confirmPassword}
                            onChange={handleChange}
                            name="price"
                            label="price"
                            id="price"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <input
                            name="image"
                            type="file"
                            onChange={handleImageChange}
                            variant="outlined"
                            required
                            id="image"
                            label="image"
                            autoFocus
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    create
                </Button>
            </form>
        </>
    )
}