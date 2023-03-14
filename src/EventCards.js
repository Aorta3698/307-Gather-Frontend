import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import VerifiedIcon from "@mui/icons-material/Verified";

function isVerified(event) {
  if (event.verified) {
    return <VerifiedIcon />;
  }
}

export default function EventCards(props) {
  return (
    <Container sx={{ py: 5 }} maxWidth="md">
      <Grid container spacing={4}>
        {props.events.map((event, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: "56.25%",
                }}
                image="images/event.png"
                alt="event discription"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {event.name} {isVerified(event)}
                </Typography>
                <Typography>{event.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
