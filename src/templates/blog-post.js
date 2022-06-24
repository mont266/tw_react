import React from "react"
import Layout from "../components/_App/layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import * as Icon from "react-feather"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const BlogDetails = props => {
  return (
    <Layout>
      <SEO title="Blog Details" />

      <Navbar />

      <PageBanner pageTitle={props.data.contentfulBlogs.slug} />

      <div className="blog-details-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">

                <div className="article-content">
                <div className="article-image">
                    <GatsbyImage
                        image={props.data.contentfulBlogs.featureImage.gatsbyImageData}
                        alt="Image"
                        width="640"
                        height="340"
                      />
                  </div>
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Icon.Clock /> {props.data.contentfulBlogs.createdAt}
                      </li>
                      <li>
                        <Icon.User /> <Link to="#">Scott Montford</Link>
                      </li>
                    </ul>
                  </div>

                  <h2>{props.data.contentfulBlogs.title}</h2>

                  <p>
                    {props.data.contentfulBlogs.description.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query BlogPost($slug: String!) {
    contentfulBlogs(slug: { eq: $slug }) {
      title
      slug
      node_locale
      description {
        description
      }
      featureImage {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 10
          height: 10
          formats: WEBP
        )
      }
      createdAt(formatString: "DD/MM/YYYY")
    }
  }
`

export default BlogDetails
