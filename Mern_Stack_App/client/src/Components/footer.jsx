import { Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => (
    {
        footer: {
            backgroundColor: "inherit",
            padding: theme.spacing(6),
        }
    }))

export default function Footer() {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Something here to give the footer a purpose!
            </Typography>
        </footer>
    )
}