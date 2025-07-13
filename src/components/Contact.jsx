import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  XCircle,
  CheckCircle,
  Youtube,
} from "lucide-react";

// Notification component
const Notification = ({ message, type, onClose, visible }) => {
  if (!visible) return null;

  const notificationClass =
    type === "success" ? "notification-success" : "notification-error";
  const IconComponent = type === "success" ? CheckCircle : XCircle;

  return (
    <div className={`notification ${notificationClass}`}>
      <IconComponent className="notification-icon" />
      <p className="notification-message">{message}</p>
      <button onClick={onClose} className="notification-close-button">
        <XCircle className="notification-close-icon" />
      </button>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    message: "",
    type: "success",
    visible: false,
  });

  // Handles input changes for the form fields
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Displays a notification message
  const showNotification = (message, type) => {
    setNotification({ message, type, visible: true });
    setTimeout(() => {
      setNotification({ ...notification, visible: false });
    }, 5000); // Notification disappears after 5 seconds
  };

  // Handles form submission to send email using EmailJS browser SDK
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.init("m4sVId4u98Cu1bb4S");
      const serviceId = "service_lied2sp";
      const templateId = "template_xudfmcc";
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
      };
      await emailjs.send(serviceId, templateId, templateParams);
      showNotification("Your message has been sent successfully!", "success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      showNotification("Failed to send message. Please try again.", "error");
      console.error("Email sending failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact information details
  const contactInfo = [
    {
      icon: Mail,

      value: "yagnarashagan2@gmail.com",
      href: "mailto:yagnarashagan2@gmail.com",
    },
    {
      icon: Phone,

      value: "+91 6374008719",
      href: "tel:+916374008719",
    },
    {
      icon: MapPin,

      value: "Chennai, Tamil Nadu, India",
      href: "https://maps.app.goo.gl/your-location-link", // Replace with an actual map link if desired
    },
  ];

  // Social media links
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yagnarashagan6",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yagnarashagan",
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://www.youtube.com/@yagnarashagan",
    },
  ];

  return (
    <section id="contact" className="overall-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Get In Touch</h2>
          <div className="underline"></div>
          <p className="section-description">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information Section */}
          <div className="contact-info-section">
            <div>
              <h3 className="contact-heading">Let's Connect</h3>
              <div className="contact-info-list">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                      className="contact-info-item"
                    >
                      <div className="contact-info-icon-wrapper">
                        <IconComponent className="contact-info-icon" />
                      </div>
                      <div>
                        <p className="contact-info-label">{info.label}</p>
                        <p className="contact-info-value">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links Section */}
            <div>
              <h4 className="social-heading">Follow Me</h4>
              <div className="social-links-list">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-link social-link-${social.label.toLowerCase()}`}
                      aria-label={social.label}
                    >
                      <IconComponent className="social-link-icon" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form-section">
            <h3 className="contact-heading" id="head">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Regarding a project collaboration"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="form-textarea"
                  placeholder="I'd like to discuss a potential project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? (
                  <span className="submit-button-content">
                    <svg className="spinner" viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="spinner-path-bg"
                      ></circle>
                      <path
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        className="spinner-path-fg"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </span>
                ) : (
                  <>
                    <Send className="send-icon" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Notification Component */}
      <Notification
        message={notification.message}
        type={notification.type}
        visible={notification.visible}
        onClose={() => setNotification({ ...notification, visible: false })}
      />
    </section>
  );
};

export default Contact;
