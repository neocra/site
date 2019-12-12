import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


class AboutPage extends React.Component
{
  render(){
        return (
          <Layout location={this.props.location}>
            <SEO title="About neocra" />
            <h2>Qui est neocra ?</h2>
            <p>neocra est une société française de création de logiciels.</p>
            <h2>Why neocra ?</h2>
            <p>Le but de neocra est de créer de meilleur logiciels. La société a deux objectifs : 
                <ul>
                    <li>Le premier est de créer des applications pour des utilisateurs. </li>
                    <li>Le second est d'aider les société dans les bonnes pratiques pour créer leur logiciels.</li>
                </ul>
            </p>
          </Layout>
        );

  }
}


export default AboutPage
