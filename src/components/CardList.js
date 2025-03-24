import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Typography, CardMedia, Button, Box } from "@mui/material";

const CardList = ({ cards }) => {
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this card?")) {
            fetch(`http://localhost:5001/cards/${id}`, { method: "DELETE" })
                .then((res) => res.json())
                .then(() => {
                    window.location.reload(); // Refresh page after deletion
                })
                .catch((err) => console.error(err));
        }
    };

    return (
        <div style={styles.container}>
            <Typography variant="h3" style={styles.heading}>
                All Cards - - - - - This is admin side UI
            </Typography>

            {/* Buttons for Add New Card and User View */}
            <div style={styles.buttonGroup}>
                <Link to="/add" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="primary">
                        Add New Card
                    </Button>
                </Link>
                <Link to="/user-view" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="secondary">
                        User View
                    </Button>
                </Link>
            </div>

            {/* Card Grid */}
            <Grid container spacing={4} justifyContent="center">
                {cards.length > 0 ? (
                    cards.map((card) => (
                        <Grid item xs={12} sm={6} md={4} key={card._id}>
                            <Card style={styles.card}>
                                <CardMedia
                                    component="img"
                                    alt={card.title}
                                    height="auto"
                                    maxHeight= "500px"// Limits the height to 500px
                                    image={card.imageLink}
                                />
                                <CardContent>
                                    <Typography variant="h5">{card.title}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {card.shortDescription}
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: "flex", justifyContent: "space-around", padding: "10px" }}>
                                    <Link to={`/card/${card._id}`} style={{ textDecoration: "none" }}>
                                        <Button size="small" color="primary">
                                        Learn More
                                        </Button>
                                    </Link>
                                    <Link to={`/edit/${card._id}`} style={{ textDecoration: "none" }}>
                                        <Button size="small" color="secondary">
                                            Edit
                                        </Button>
                                    </Link>
                                    <Button size="small" color="error" onClick={() => handleDelete(card._id)}>
                                        Delete
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body1" style={{ textAlign: "center", width: "100%" }}>
                        No cards available.
                    </Typography>
                )}
            </Grid>
        </div>
    );
};

//Styles
const styles = {
    container: {
        padding: "20px",
        textAlign: "center",
        maxHeight: "500px", // Limits the height to 500px
        height: "auto",
    },
    heading: {
        fontSize: "2.5rem",
        marginTop: "0px",
        fontWeight: "bold",
        padding: "20px",
    },
    buttonGroup: {
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        marginBottom: "100px",
    },
    card: {
        maxWidth: "345px",
        margin: "0 auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        height: "auto",

    },
    cardActions: {
        display: "flex",
        justifyContent: "center",
        padding: "10px",

    },
};


export default CardList;
/*
// Styles
const styles = {
    container: {
        padding: "20px",
        textAlign: "center",
      //  backgroundColor: "#000000", // Adding a light gray background color
       // backgroundImage: "url('https://i.pinimg.com/474x/9e/d9/b2/9ed9b211e61d4211168da447763966a6.jpg')", // URL of the background image
       // backgroundSize: "cover", // Ensures the image covers the entire container
       // backgroundPosition: "center", // Centers the image within the container
       // backgroundRepeat: "no-repeat", // Ensures the image doesn't repeat
        backgroundColor: "#f0f0f0", // Adding a light gray background color



    },
    heading: {
        fontSize: "2.5rem",
        marginTop: "70px",
        fontWeight: "bold",
        padding: "00px",
    },
    card: {
        maxWidth: "345px",
        margin: "0 auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
};

export default CardList;*/