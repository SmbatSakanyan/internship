import { makeStyles,Container,Grid,Card,CardMedia,Button,Typography,CardActions,CardContent } from "@material-ui/core";
import axios from "axios";
import { useState,useEffect } from "react";


const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

export default function HotelsAlbum (){
    const classes = useStyles()
    useEffect(
     ()=>{getHotels()} 
    ,[])

    async function getHotels () {
       const res = await axios.get("/hotels").then(res => res.data)
       console.log(res)
       setHotels(res)
    }
  
    // URL.createObjectURL()
    const [hotels,setHotels] = useState([])

    // function toBase64 (arrayBuffer){
    //   const a = String.fromCharCode(...new Uint8Array(arrayBuffer));
    //   console.log(a)
    //   return a
    // }
    // toBase64(hotels[2].image.data)

    return(
        <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {hotels.map((h) => (
            <Grid item key={h._id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image = {`http://localhost:5000/hotel/image/${ h._id }`}
                  title= {h.title}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {h.title}
                  </Typography>
                  <Typography>
                    {h.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
}