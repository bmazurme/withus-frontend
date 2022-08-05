import React from 'react';

function Tag(props) {
  const { tag } = props;
  return (
    <li className="techs__item">
      {tag}
    </li>
  );
}

export default Tag;
