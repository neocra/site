import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactform";

class ContactPage extends React.Component { 
  render()
  { 
    return (
      <Layout location={this.props.location}>
        <SEO title="contact" />
          <div className="page-contact">
            <div className="contact-info">
              <h1>neocra</h1>
              <p>128 rue la Boétie<br/>75008 Paris</p>
              <p>contact@neocra.com</p>
            </div>
            <ContactForm 
                messageSent="Message sent"
                fullNamePlace="Full name" 
                emailPlace="E-Mail" 
                subjectPlace="Subject" 
                descriptionPlace="Content" 
                sendButton="Send" />
          </div>
        </Layout>
      );
    }
}

export default ContactPage
