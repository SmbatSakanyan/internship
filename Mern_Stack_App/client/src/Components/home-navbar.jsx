import { AppBar, Typography, Toolbar, Button, Box } from "@material-ui/core"
import { useHistory } from "react-router-dom";
import axios from "axios"
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { clearUser } from "../slices/auth";
// import { Redirect } from "react-router-dom";

const useStyles = makeStyles({
    buttons: {
        marginLeft: "auto"
    }
})

export default function HomeNavBar() {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()

    const handleLogout = async () => {
        try {
            await axios.get("/auth/logout", { withCredentials: true })
            dispatch(clearUser());
        } catch (err) {
            console.log(err);
        }
    };

    const jumpToDashboard = () =>{
        return(
            history.push('/dashboard')
        )
    }
    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6">
                    Armenian Hotels ...
                </Typography>
                <Box className={classes.buttons}>
                    <Button color="inherit" onClick={jumpToDashboard}>Dashboard</Button>
                    <Button color="inherit" onClick={handleLogout}>logout</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}