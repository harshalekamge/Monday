import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import CardList from "./components/CardList";
import AddCardForm from "./components/AddCardForm";
import EditCardForm from "./components/EditCardForm";
import CardDetails from "./components/CardDetails";
import CardListMini from "./components/CardListMini"; // Import the new component

//import './App.css';


function App() {
    const [cards, setCards] = useState([]);

    // Fetch all cards on app load
    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get("http://localhost:5001/cards");
                setCards(response.data.Cards); // Ensure backend returns data in this format
            } catch (error) {
                console.error("Error fetching cards:", error);
            }
        };
        fetchCards();
    }, []);

    return (
        <Router>
            <div className="App">
                {/* Header */}
                <header className="header">
                    <nav>
                        <ul className="nav-links">
                            <li>
                               <h1><Link to="/" id="a">Home</Link></h1> 
                            </li>
                        </ul>
                    </nav>
                </header>

                {/* Main Content */}
                <main className="content">
                    <Routes>
                        <Route path="/" element={<CardList cards={cards} />} />
                        <Route path="/add" element={<AddCardForm setCards={setCards} />} />
                        <Route path="/edit/:id" element={<EditCardForm setCards={setCards} />} />
                        <Route path="/card/:id" element={<CardDetails />} />
                        <Route path="/user-view" element={<CardListMini cards={cards} />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}


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



export default App;