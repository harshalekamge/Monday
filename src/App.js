// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import CardList from "./components/CardList";
import AddCardForm from "./components/AddCardForm";
import EditCardForm from "./components/EditCardForm";
import CardDetails from "./components/CardDetails";
import CardListMini from "./components/CardListMini";
import UserView from "./components/UserView/UserView";
import Header from "./components/Header/Header"; // Import the new Header component
import Footer from "./components/Footer/Footer"; // Import the Footer component
import './App.css';

function App() {
    const [cards, setCards] = useState([]);

    // Fetch all cards on app load
    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get("http://localhost:5001/cards");
                setCards(response.data.Cards);
            } catch (error) {
                console.error("Error fetching cards:", error);
            }
        };
        fetchCards();
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <main className="content">
                    <Routes>
                        <Route path="/" element={<CardList cards={cards} />} />
                        <Route path="/add" element={<AddCardForm setCards={setCards} />} />
                        <Route path="/edit/:id" element={<EditCardForm setCards={setCards} />} />
                        <Route path="/card/:id" element={<CardDetails />} />
                        <Route path="/user-view" element={<CardListMini cards={cards} />} />
                        <Route path="/userview" element={<UserView />} />
                    </Routes>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}

// ScrollToTop Component
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to the top of the page whenever the route changes
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // This component does not render anything
}

export default App;