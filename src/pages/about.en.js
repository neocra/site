import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


class AboutPage extends React.Component
{
  render(){
        return (
          <Layout location={this.props.location}>
            <SEO title="About neocra" />
            <h2>Who is neocra ?</h2>
            <p>neocra is a french company to create software. The company is created by passionate developpers.</p>
            <h2>Why neocra ?</h2>
            <p>The goal of neocra is to make better software. The company have two responsibility. 
                <ul>
                    <li>The first is to create applications for end users.</li>
                    <li>The second is to help company to use good practice for create better software.</li>
                </ul>
            </p>
          </Layout>
        );

  }
}


export default AboutPage
