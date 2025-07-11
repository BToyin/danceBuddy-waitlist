import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Custom styles
import appLogo from './assets/logo.png'; // Import your local logo
import appScreenshot from './assets/app-screenshot.png'; // Import your local app screenshot

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Netlify will handle the form submission automatically via data-netlify attribute
    // For client-side success message, we can set a state
    setSubmitted(true);
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
            <h2 className="display-3 fw-bold mb-3">Dance Library In Your Pocket!</h2>
            <p className="lead mb-4">
              Never lose a dance move, battle or choreography in the pits of your phone gallery again.
            </p>

            {/* Email Collection Form or Success Message */}
            {submitted ? (
              <div className="alert alert-success" role="alert">
                Thanks for joining the waitlist! You'll be notified when DanceBuddy launches.
              </div>
            ) : (
              <Form name="waitlist" method="POST" data-netlify="true" onSubmit={handleSubmit} className="waitlist-form mx-auto mx-md-0" style={{ maxWidth: '400px' }}>
                <input type="hidden" name="form-name" value="waitlist" />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" name="email" placeholder="Enter your email" size="lg" required />
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
            {/* Mobile App Screenshot */}
            <Image src={appScreenshot} alt="DanceBuddy App Screenshot" fluid className="app-screenshot" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
