import React from "react"

import Layout from "./layout"
import SEO from "./seo"

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

class ContactForm extends React.Component { 
  constructor(){
    super();
    this.send = this.send.bind(this);
    this.state={
      isSent: false,
    };
  }
  
  async send(){
    var message = {
      email : this.refs.email.value,
      fullName : this.refs.fullName.value,
      subject : this.refs.subject.value,
      content : this.refs.content.value,
    };

    await postData('https://api.neocra.com/contact', message);

    this.setState({
      isSent: true,
    });
  }
  render()
  { 
    if(this.state.isSent){
      return (
        <div className="contact-form">
          <span>{this.props.messageSent}</span>
        </div>
      );
    }    
    return (
        <div className="contact-form">
          <span>Contact</span>
          <input ref="fullName" type="text" placeholder={this.props.fullNamePlace} />
          <input ref="email" type="text" placeholder={this.props.emailPlace} />
          <input ref="subject" type="text" placeholder={this.props.subjectPlace} />
          <textarea ref="content" type="text" placeholder={this.props.descriptionPlace} />
          <input ref="send" type="button" onClick={this.send} value={this.props.sendButton} />
        </div>
      );
    }
}

export default ContactForm
