import { Container,Typography } from "@material-ui/core"

export default function Description() {
    return (
        <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                About opportunitys hear...
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                you can easely finde and book any type of hotel in owr beautiful and fantastic Armenia 
            </Typography>
        </Container>
    )
}