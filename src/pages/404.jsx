import React from 'react';
import ReactGA from 'react-ga';
import SEO from '../components/Seo';
import Nav from '../components/Nav';

ReactGA.pageview(window.location.pathname);

const NotFoundPage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <SEO title="404" />
    <h1>PAGE NOT FOUND</h1>
    <Nav global additionalText="view these projects instead" />
  </div>
);

export default NotFoundPage;
