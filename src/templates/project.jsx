import React, { useState, useEffect } from 'react';
import { navigate, graphql } from 'gatsby';
import ReactGA from 'react-ga';
import { fadeOutElementSelector } from '../utils/animate';
import Nav from '../components/Nav';
import SEO from '../components/Seo';
import '../styles/project.scss';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { allSitePage: { nodes } } = data;
  const { html, title, description } = nodes[0].context;

  const [isNavFullScreen, setIsNavFullScreen] = useState(false);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const toggleIsNavFullScreen = () => {
    ReactGA.event({
      category: 'ProjectClick',
      action: 'isNavFullScreen',
    });
    setIsNavFullScreen(!isNavFullScreen);
  };

  const CloseNavButton = () => {
    return (
      <button
        className="close-nav-button"
        type="button"
        onClick={toggleIsNavFullScreen}
      >
        close
      </button>
    );
  };

  return (
    <div className="project-wrapper fade-in">
      <SEO title={title} />
      <button
        className="project-exit shadow"
        type="button"
        onClick={() => {
          ReactGA.event({
            category: 'ProjectClick',
            action: 'X',
          });
          fadeOutElementSelector('.project-wrapper', () => navigate('/'));
        }}
      >
        ✕︎
      </button>
      <div className="project-description">
        <h2>{title}</h2>
        {/* eslint-disable-next-line react/no-danger */}
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <div className="view-more-mobile">
          <button
            type="button"
            onClick={toggleIsNavFullScreen}
          >
            View other projects
          </button>
        </div>
      </div>
      <hr className="mobile-divider" />
      <div className="project-content">
        {/* eslint-disable-next-line react/no-danger */}
        <div className="project-md-html" dangerouslySetInnerHTML={{ __html: html }} />
        <div className={`project-nav ${isNavFullScreen ? 'full-screen' : ''}`}>
          <Nav />
          {isNavFullScreen && <CloseNavButton />}
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
      allSitePage(filter: {path: {eq: $path}, context: {fromMarkDown: {eq: true}}}) {
        nodes {
          context {
            html
            title
            description
          }
        }
      }
  }
`;
