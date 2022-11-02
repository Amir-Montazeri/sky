import './index.tailwind.css';
import React from 'react';
import { Link } from 'react-router-dom';

import { textDirectionClassName } from 'methods/class-names';

interface AuthLayoutPropTypes {
  children: JSX.Element;
  pages: { title: string; linkTo: string }[];
  title: string;
  titleNote?: string;
  activePage: string;
}

function AuthLayout({
  children,
  pages,
  title,
  titleNote,
  activePage,
}: AuthLayoutPropTypes) {
  const renderedPageButtons = pages.map((page) => (
    <Link
      to={`/auth/${page.linkTo}`}
      className="auth-page-navigator-link"
      key={page.linkTo}
    >
      <button
        className={`auth-page-navigator-button hover:border-blue-500
         ${activePage === page.linkTo ? 'active' : ''}`}
      >
        {page.title}
      </button>
    </Link>
  ));

  return (
    <div className="auth-container">
      <img src="" alt="logo" className="auth-logo" />
      <div className="auth-content">
        <div className="auth-page-navigator-container">
          {renderedPageButtons}
        </div>
        <h1 className={`auth-page-title ${textDirectionClassName(title)}`}>
          {title}
        </h1>
        {titleNote && (
          <p
            className={`auth-page-title-note ${textDirectionClassName(
              titleNote
            )}`}
          >
            {titleNote}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
