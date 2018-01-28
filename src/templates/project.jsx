import React from 'react';
import Helmet from 'react-helmet';
import Link from "gatsby-link";
import { Fade } from 'react-reveal';
import format from 'date-fns/format';
import config from '../../config/SiteConfig';
import SEO from '../components/SEO/SEO';
import Footer from '../components/Footer/Footer';
import Container from '../components/Container/Container';
import styles from './project.module.scss';

const Project = (props) => {
  const { slug } = props.pathContext;
  const postNode = props.data.markdownRemark;
  const project = postNode.frontmatter;
  const date = format(project.date, config.dateFormat);
  const imageURL = project.cover.childImageSharp.resize.src;
  if (!project.id) {
    project.id = slug;
  }
  return (
    <div className="container project-container">
      <Helmet title={`${project.title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Fade duration={450}>
        <div className={styles.headerWrapper}>
          <section className={styles.header}>
            <h2>{project.title}</h2>
            <p>
              {config.date} {date} {config.client} {project.client}
            </p>
            <p />
            <p>
              {config.service} {project.service}
            </p>
          </section>
        </div>
        <Container text>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: postNode.html }}
          />
        </Container>
        <div className="flex-center mb10">
            <Link to="/">
              ↫ Back to projects
            </Link>
        </div>
      </Fade>
    </div>
  );
};

export default Project;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        client
        service
        cover {
          childImageSharp {
            resize(width: 800) {
              src
            }
          }
        }
      }
      fields {
        slug
      }
      excerpt
    }
  }
`;
