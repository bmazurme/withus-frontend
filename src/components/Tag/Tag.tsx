import React from 'react';

interface IProps {
  tag: string,
}

function Tag({ tag }: IProps) {
  return (
    <li className="techs__item">
      {tag}
    </li>
  );
}

export default Tag;
