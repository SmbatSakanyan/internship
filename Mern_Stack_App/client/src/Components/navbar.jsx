import { AppBar, Typography, Toolbar, Button,Box } from "@material-ui/core"
import { useHistory } from "react-router-dom";
// import  "./navbar.css"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    buttons: {
        marginLeft: "auto"
    }
})

export default function NavBar() {
    const classes = useStyles()
    const history = useHistory()

    const onLogin = () => {
        history.push("/login")
    }
    const onRegister = () => {
        history.push("/register")
    }
    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6">
                    Armenian Hotels ...
                </Typography>
                <Box className = {classes.buttons}>
                    <Button color="inherit" onClick={onLogin}>login</Button>
                    <Button color="inherit" onClick={onRegister}>register</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}