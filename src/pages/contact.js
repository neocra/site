import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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

class SecondPage extends React.Component { 
  constructor(){
    super();
    this.send = this.send.bind(this);
  }
  
  async send(){
    var message = {
      email : this.refs.email.value,
      fullName : this.refs.fullName.value,
      subject : this.refs.subject.value,
      content : this.refs.content.value,
    };

    await postData('https://api.neocra.com/contact', message);
    //alert(message);
  }
  render()
  { 
    return (
        <Layout>
          <SEO title="contact" />
          <div className="page-contact">
            <div className="contact-info">
              <h1>neocra</h1>
              <p>128 rue la Boétie<br/>75008 Paris</p>
              <p>contact@neocra.com</p>
            </div>
            <div className="contact-form">
              <span>Contact</span>
              <input ref="fullName" type="text" placeholder="Full name" />
              <input ref="email" type="text" placeholder="E-Mail" />
              <input ref="subject" type="text" placeholder="Subject" />
              <textarea ref="content" type="text" placeholder="Content" />
              <input ref="send" type="button" onClick={this.send} value="Send" />
            </div>
          </div>
        </Layout>
      );
    }
}

export default SecondPage
