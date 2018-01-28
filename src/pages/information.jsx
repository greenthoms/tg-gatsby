import React from 'react';
import Helmet from 'react-helmet';
import Container from '../components/Container/Container';
import config from '../../config/SiteConfig';

const About = () => (
  <div className="container about-container">
    <Helmet title={`Information | ${config.siteTitle}`} />
    <Container>
      <div className="hello-world flex-container">
        <span role="img" aria-label="Hello world">
          👋🏻 🌏
        </span>
      </div>
      <div className="flex-container font-large">
        <div className="pitch">
          <p className="mt0">
            Hey I'm Thomas Green — a digital product designer based in
            Melbourne, Australia. I focus on UX/UI for web applications and I'm currently available
            for contracts or a perm role.{" "}
            <a href="mailto:thomasgreen@fastmail.com">
              Send me electronic mail
            </a>{" "}
            ✨
          </p>
          <p className="font-grey mt2">
            This site was built with{" "}
            <a
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby.js
            </a>{" "}
            and the source is{" "}
            <a
              href="https://github.com/greenthoms"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a> however I often experiment here and will occasionally break things. The typeface is{" "}
            <a
              href="https://www.boldmonday.com/custom/ibm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plex
            </a>.
          </p>
        </div>
        <div className="contact-details no-underline">
          <p className="mt0">
            Say hello:<br />
            <a href="mailto:thomasgreen@fastmail.com" title="Send me an email">
              thomasgreen@fastmail.com
            </a>
            <br />
            <br />
            Ephemera:<br />
            <ul className="ui-list">
              <li>
                <a
                  href="https://twitter.com/greenthoms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/greenthoms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/thomasgreenau"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com/thomasgreen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dribbble
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </Container>
  </div>
);

export default About;
