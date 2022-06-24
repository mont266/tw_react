import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as Icon from "react-feather"
import Layout from "../components/_App/layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import MainBanner from "../components/ITStartup/MainBanner"
import Features from "../components/ITStartup/Features"
import ServicesArea from "../components/ITStartup/ServicesArea"
import Team from "../components/Common/Team"
import FunFactsArea from "../components/Common/FunFactsArea"
import RecentWorks from "../components/Common/RecentWorks"
import PricingStyleOne from "../components/PricingPlans/PricingStyleOne"
import Feedback from "../components/Common/Feedback"
import BlogPost from "../components/Common/BlogPost"
import Footer from "../components/_App/Footer"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <MainBanner />
    <Features />
    <ServicesArea />
    <FunFactsArea />
    <Team />
    <RecentWorks />
    <PricingStyleOne />
    <Feedback />
    <div className="blog-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>The News from Our Blog</h2>
          <div className="bar"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row justify-content-center">
          {props.data.allContentfulBlogs.edges.map(post => (
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link to={`/blog-post/${post.node.slug}`}>
                    <GatsbyImage
                      image={post.node.featureImage.gatsbyImageData}
                      alt="Image"
                      width="320"
                      height="170"
                    />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> {post.node.createdAt}
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link to={`/blog-post/${post.node.slug}`}>
                      {post.node.title}
                    </Link>
                  </h3>

                  <span>
                    By <Link>Scott Montford</Link>
                  </span>

                  <p>{post.node.description.description}</p>

                  <Link
                    to={`/blog-post/${post.node.slug}`}
                    className="read-more-btn"
                  >
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </Layout>
)

export const query = graphql`
  query HomePageBlogs {
    allContentfulBlogs {
      edges {
        node {
          title
          slug
          node_locale
          featureImage {
            gatsbyImageData(
              layout: FULL_WIDTH
              width: 10
              height: 10
              formats: WEBP
            )
          }
          description {
            description
          }
          createdAt(formatString: "DD/MM/YYYY")
        }
      }
    }
  }
`

export default IndexPage
