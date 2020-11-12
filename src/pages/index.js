import React from "react";
import Layout from "../components/layout/layout";
import { graphql } from "gatsby";
import About from "../components/home/about/about";
import Home from "../components/home";
import Tutorial from "../components/home/tutorial/tutorial";
import Partners from "../components/home/partners/partners";
import Feedback from "../components/home/feedback/feedback";
import Contacts from "../components/home/contacts/contacts";
import Beta from "../components/home/beta/beta";

const LandingPage = ({ data }) => (
  <Layout>
    <Home imageUrl={data.allFile.edges[0].node.publicURL}/>
    <About />
    <Tutorial />
    <Partners partners={data.site.siteMetadata.partners}/>
    <Feedback />
    <Contacts />
    <Beta />
  </Layout>
);

export const query = graphql`
  query {
    allFile(filter: { name: { eq: "logo" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    site {
      siteMetadata {
        partners {
          title
          text
        }
      }
    }
  }
`

export default LandingPage;