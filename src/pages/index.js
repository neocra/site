import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { randomBytes } from "crypto"

const Sentences = () => {

  //Developing a software is like make à parachute jump. Test, verify, make security and go prod
  //Learn from past, make the present, and live in future.
  //Each day a line. In few days a software. 
  //Life is coded ? So there have bugs !
  //Code, refactor, code, refactor... It's the life.
  //Nothing on monday is not nothing on a sprint.
  //All opportunities are great. Choice one to make the best
  //Understand, learn, code, repeat.
  //Code is like sport, practice more and more to be at the first place
  //Life to code. And not code to live.
  //Upgrade your mind, you are a software developer.
  //Good developpers are good in good environment
  //Share experience not content.
var sentences = [
  (<>Software is nothing<br />&nbsp;without developers</>),
  // (<p>Each day a <b>line</b>. In few days a <b>software</b>. </p>),
  // (<p>It's not time for a new job. It's time for a new passion. </p>),
];

  var i = parseInt(Math.random() * sentences.length, 10);

  return(
  <div className="page-index">
    <div className="page-index-title">
      {sentences[i]}
    </div>
  </div>
)};

const IndexPage = () => (
  <Layout>
    <SEO title="neocra" />
    <Sentences />
  </Layout>
)

export default IndexPage
