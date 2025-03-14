import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import LoadingScreen from "../components/ScreenLoader"; 
import "./Grievance.css";

const Grievance = () => {
  const email = useRef();
  const grievance = useRef();
  const [loading, setLoading] = useState(false); 

  function submit() {
    const emailValue = email.current.value.trim();
    const messageValue = grievance.current.value.trim();

    if (!emailValue || !messageValue) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true); 

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: emailValue,
      message: messageValue,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://superhero-backend-460q.onrender.com/grievance/add", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        if (result.data) {
          alert("Grievance Registered Successfully!");
          email.current.value = "";
          grievance.current.value = "";
        } else {
          alert("Grievance Registration Failed.");
        }
      })
      .catch((error) => {
        setLoading(false); 
        console.error("Submission Error:", error);
        alert("Server Error. Please try again later.");
      });
  }

  return (
    <>
      <Navbar />
      {loading && <LoadingScreen />} 
      <motion.div 
        className="grievance-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div className="grievance-content">
          <motion.h1 
            initial={{ y: -30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            Raise Your Concern
          </motion.h1>
          <h4>Your voice matters. Let it be heard.</h4>

          <div className="input-container">
            <label>Email:</label>
            <motion.input 
              type="email" 
              name="email" 
              ref={email} 
              placeholder="Enter your email"
              whileFocus={{ scale: 1.03 }}
              required
            />
            <br />
            <label>Message:</label>
            <motion.textarea 
              name="message" 
              ref={grievance} 
              placeholder="Describe your issue..."
              whileFocus={{ scale: 1.03 }}
              required
            />
          </div>

          <motion.button 
            onClick={submit} 
            whileHover={{ scale: 1.1, backgroundColor: "#d43939" }}
            whileTap={{ scale: 0.95 }}
            className="submit-button"
            disabled={loading} 
          >
            {loading ? "Submitting..." : "Submit Grievance"}
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Grievance;
