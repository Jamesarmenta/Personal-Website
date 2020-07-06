import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import '../styles/nav.scss';

const Nav = ({ additionalText = '' }) => {
  const { allSitePage } = useStaticQuery(
    graphql`
      query {
          allSitePage(filter: {context: {fromMarkDown: {eq: true}}}) {
              nodes {
              path
            }
          }
      }
    `,
  );

  const pages = allSitePage.nodes.map(({ path }) => {
    const isActive = ({ isCurrent }) => {
      return isCurrent ? { className: 'is-current-page' } : {};
    };

    return (
      <li key={path}>
        <Link to={path} getProps={isActive}>
          {path}
        </Link>
      </li>
    );
  });

  const additionalTextOptions = [
    'other good stuff',
    'more to see',
    'check it out',
    'also good',
    'hey, look at these',
    'nice, right? look at',
    'more projects',
    'more links',
    'hey... also',
    'more projects',
    'additional',
    'clicky click more',
    'some more good stuff',
    'like that? more here',
    'you might also like',
    'other projects',
    'more from me',
    'james also made these',
    'I also made these',
    'you can click these',
    'view more',
    'ta-da! more here',
    'links to other stuff',
  ];

  const additionalProjectTextIndex = Math.floor(Math.random() * additionalTextOptions.length);
  const additionalProjectText = additionalText || additionalTextOptions[additionalProjectTextIndex];

  return (
    <nav className="nav-common">
      <ul>
        <li>{`${additionalProjectText}:`}</li>
        {pages}
      </ul>
    </nav>
  );
};

export default Nav;
