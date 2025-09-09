import React from "react";
import Navbar from "../components/Navbar";
import "../assets/styles/About.css";
import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

const features = [
  "Dual functionality: Create detailed notes while AI summarizes key points in real time.",
  "Perfect for students, professionals, and researchers who want to stay organized without switching between apps.",
  "Built for performance, security, and ease of use – ensuring a smooth and clutter-free user experience.",
  "Access your content anytime, anywhere – whether you're attending a live lecture or reviewing previous discussions.",
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <div className="about-container">
          <h1 className="about-title">About AI Chat Notes</h1>
          <p className="about-description">
            AI Chat Notes is a professional productivity tool that allows users to take notes and generate summaries at the same time.
          </p>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="motion-wrapper"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <Card className="feature-card" elevation={0}>
                  <CardContent>
                    <Typography variant="body1" className="feature-text">
                      ✦ {feature}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
