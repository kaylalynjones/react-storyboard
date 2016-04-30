import React from 'react';
// import '../settings.scss';

function getContrastYIQ(hexcolor) {
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? '#000000' : '#FFFFFF';
}

export default function ContrastAwareText({ children, origBackgroundColor }) {
  const backgroundColor = origBackgroundColor.slice(1);
  const color = getContrastYIQ(backgroundColor);
  return <span style={{ color }}>{children}</span>;
}

ContrastAwareText.propTypes = {
  origBackgroundColor: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired,
};
