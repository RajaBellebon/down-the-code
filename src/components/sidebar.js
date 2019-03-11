import React from 'react';

const Sidebar = props => (
  <div
    style={{
      border: '2px solid #e6e6e6',
      maxWidth: 960,
      padding: '0.5rem',
      marginBottom: '25px',
    }}
  >
    <strong>{props.title}: </strong>
    <a href={props.href}>{props.description} </a>
  </div>
);

export default Sidebar;
