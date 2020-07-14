import React, { useState, useEffect } from 'react';
import Parallax from 'parallax-js';
import { navigate, useStaticQuery, graphql } from 'gatsby';
import ReactGA from 'react-ga';
import { fadeOutAllElementsSelector, fadeOutElementSelector } from '../utils/animate';
import { shuffleFloatingItems } from '../utils/floatingItems';
import { getSunsetText } from '../utils/astronomy-api';
import InteractiveIcon from '../components/InteractiveIcon';
import SEO from '../components/Seo';
import '../styles/home.scss';

// window.resize event listener
let timeout = false;

const homeClickEventAction = (actionName) => {
  ReactGA.event({
    category: 'HomeClick',
    action: actionName,
  });
};

const IndexPage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);

    const shuffleOnDebouncedResize = () => {
      // clear the timeout
      clearTimeout(timeout);
      // start timing for event "completion"
      timeout = setTimeout(shuffleFloatingItems, 500);
    };

    const scene = document.getElementById('home-wrapper');
    // eslint-disable-next-line no-new
    new Parallax(scene, {
      calibrateX: false,
      calibrateY: false,
      invertX: true,
      invertY: true,
      limitX: 70,
      limitY: 70,
      pointerEvents: true,
    });

    window.addEventListener('resize', shuffleOnDebouncedResize);
    shuffleFloatingItems();

    return () => {
      window.removeEventListener('resize', shuffleOnDebouncedResize);
    };
  }, []);

  const [sunsetText, setSunsetText] = useState();
  const [emailText, setEmailText] = useState();
  const [aboutText, setAboutText] = useState();
  const [clickedProject, setClickedProject] = useState();

  const handleSunsetClick = async () => {
    const sunsetTextValue = await getSunsetText();
    setSunsetText(sunsetTextValue);
  };

  const { site, allSitePage, allFile } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          email
        }
      }
      allSitePage(filter: {context: {fromMarkDown: {eq: true}}}) {
        edges {
          node {
            context {
              title
            }
            path
          }
        }
      }
      allFile(filter: {relativeDirectory: {eq: ""}, extension: {regex: "/^png|jpg|gif$/"}}) {
      edges {
        node {
          publicURL
          relativePath
        }
      }
    }
    }
  `);

  const projectNameToPublicUrlMap = allFile.edges.reduce((acc, { node }) => {
    const { publicURL, relativePath } = node;
    const fileName = relativePath.replace(/\.[^/.]+$/, '');
    acc[fileName] = publicURL;
    return acc;
  }, {});

  const pageItems = allSitePage.edges.map(({ node: { context, path } }) => {
    const { title } = context;
    const projectName = path.replace('/', '');
    const projectImage = projectNameToPublicUrlMap[projectName];

    const handleProjectClick = (e) => {
      e.preventDefault();
      homeClickEventAction(path);
      setClickedProject(path);
      fadeOutAllElementsSelector('.floating-item:not(.selected)', () => {
        fadeOutElementSelector('.floating-item.selected', () => navigate(path));
      });
    };

    const currentProjectSelected = (clickedProject === path);

    return (
      <div
        key={path}
        className={`floating-item ${currentProjectSelected ? 'selected' : ''}`}
        data-depth={Math.random()}
      >
        <a href={path} onClick={handleProjectClick} alt={title}>
          <img src={projectImage} alt={title} />
        </a>
      </div>
    );
  });

  return (
    <div id="home-wrapper" className="fade-in">
      <SEO title="Welcome" />
      {pageItems}
      <div className="floating-item" data-depth={Math.random()}>
        <InteractiveIcon
          icon="☺︎"
          altText="About Me"
          title="about"
          text={aboutText}
          onClick={() => {
            homeClickEventAction('about');
            setAboutText(site.siteMetadata.description);
          }}
        />
      </div>
      <div className="floating-item" data-depth={Math.random()}>
        <InteractiveIcon
          icon="☀︎"
          altText="Sunset Today"
          title="sunset"
          text={sunsetText}
          onClick={() => {
            homeClickEventAction('sunset');
            handleSunsetClick();
          }}
        />
      </div>
      <div className="floating-item" data-depth={Math.random()}>
        <InteractiveIcon
          icon="✉︎"
          altText="E-mail Me"
          title="email"
          text={emailText}
          onClick={() => {
            homeClickEventAction('email');
            setEmailText(site.siteMetadata.email);
          }}
        />
      </div>
      <div className="floating-item" data-depth={Math.random()}>
        <InteractiveIcon
          icon="↻︎"
          altText="Shuffle"
          title="shuffle"
          onClick={() => {
            homeClickEventAction('shuffle');
            shuffleFloatingItems();
          }}
        />
      </div>
    </div>
  );
};

export default IndexPage;
