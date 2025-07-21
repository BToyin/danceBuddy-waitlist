import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Custom styles
import appLogo from './assets/logo.png'; // Import your local logo
import appRecording from './assets/app-recording.mov'; // Import your local app recording

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState(''); // Add state for email input

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      setSubmitted(true);
      setEmail(''); // Clear email field on successful submission
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your email. Please try again.');
    }
  };

  return (
    <div className="outer-hero-wrapper">
      <Container className="p-5 text-center align-items-center">
        <Row className="align-items-center">
          <Col md={6} className="text-md-start">
            {/* Logo and App Name */}
            <div className="d-flex align-items-center mb-4">
              <Image src={appLogo} alt="DanceBuddy Logo" className="app-logo me-3" />
              <h1 className="display-6 fw-bold mb-0">DanceBuddy</h1>
            </div>

            {/* Headline and Subtitle */}
            <h2 className="display-3 fw-bold mb-3">Dance Dictionary In Your Pocket!</h2>
            <p className="lead mb-4">
              Never lose a dance move, battle or choreography in the pits of your phone gallery again.
            </p>

            {/* Email Collection Form or Success Message */}
            {submitted ? (
              <div className="alert alert-success" role="alert">
                Thanks for joining the waitlist! We'll shoot you an email when DanceBuddy launches.
              </div>
            ) : (
              <Form name="waitlist" method="POST" netlify netlify-honeypot="bot-field" onSubmit={handleSubmit} className="waitlist-form mx-auto mx-md-0" style={{ maxWidth: '400px' }}>
                <input type="hidden" name="form-name" value="waitlist" />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    size="lg"
                    required
                    value={email} // Bind value to state
                    onChange={(e) => setEmail(e.target.value)} // Update state on change
                  />
                </Form.Group>
                <Button variant="primary" type="submit" size="lg" className="w-100">
                  Join the Waitlist
                </Button>
              </Form>
            )}

            {/* YouTube Link */}
            <div className="mt-4">
              <a href="https://youtube.com/playlist?list=PLbs8evb_9V4gPy9HcCf_zFnRvhQ9U2UgP&feature=shared" target="_blank" rel="noopener noreferrer" className="youtube-link">
                <i className="bi bi-youtube me-2"></i> Follow for updates
              </a>
            </div>
          </Col>
          <Col md={6} className="d-md-block">
            {/* Mobile App Recording */}
            <video src={appRecording} alt="DanceBuddy App Recording" autoPlay loop muted playsInline className="app-screenshot" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;