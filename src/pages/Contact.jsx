import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../assets/styles/Contact.css";
import { Card, CardContent, Typography, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card sx={{ backgroundColor: "#fff", border: "2px solid #03031f", borderRadius: "12px", padding: 1 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Contact Us
              </Typography>
              <form className="contact-form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  variant="outlined"
                  margin="normal"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  variant="outlined"
                  margin="normal"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  multiline
                  rows={6}
                  variant="outlined"
                  margin="normal"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button type="submit" variant="contained" fullWidth>
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
