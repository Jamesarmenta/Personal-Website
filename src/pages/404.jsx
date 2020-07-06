import React from 'react';
import SEO from '../components/Seo';
import Nav from '../components/Nav';

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <Nav global={false} additionalText="view these projects instead" />
  </div>
);

export default NotFoundPage;
