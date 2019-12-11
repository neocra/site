import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//Developing a software is like make à parachute jump. Test, verify, make security and go prod
  //Learn from past, make the present, and live in future.
  //Each day a line. In few days a software. 
  //Life is coded ? So there have bugs !
  //Code, refactor, code, refactor... It's the life.
  //Nothing on monday is not nothing on a sprint.
  //All opportunities are great. Choice one to make the best
  //Understand, learn, code, repeat.
  //Code is like sport, practice more and more to be at the first place
    var sentences = [
    (<>Software is nothing<br />&nbsp;without developers</>),
    (<>Each day a <b>line</b>. In few days a <b>software</b>. </>),
    (<>It's not time for a new <b>job</b>. It's time for a new <b>passion</b>. </>),
    (<>Share <b>experience</b> not <b>content</b>.</>),
    (<>Good developpers are good in good environment.</>),
    (<>Upgrade your mind, you are a software developer.</>),
    (<>Life to code. And not code to live.</>)
  ];

class Sentences extends React.Component{

  constructor(){
    super();
    var i = parseInt(Math.random() * sentences.length, 10);
    this.state ={index:i};
  }

  componentDidMount(){
    this.handler = setInterval(() => {
      var i = parseInt(Math.random() * sentences.length, 10);
      this.setState({index:i});
    }, 5000);
  }

  componentWillUnmount(){
    clearInterval(this.handler);
  }

  render(){
    return(
    <div className="page-index">
      <div className="page-index-title">
        {sentences[this.state.index]}
      </div>
    </div>
  );}
}

class IndexPage extends React.Component
{
  render(){
        return (
          <Layout location={this.props.location}>
            <SEO title="neocra" />
            <Sentences />
          </Layout>
        );

  }
}


export default IndexPage
