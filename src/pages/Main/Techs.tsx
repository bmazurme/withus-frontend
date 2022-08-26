import React from 'react';
import { tags } from './tags';
import Tag from '../../components/Tag/Tag';

function Techs() {
  return (
    <section id="techs" className="techs">
      <h3 className="tag">Технологии</h3>
      <h2 className="techs__title">7 технологий</h2>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии,
        которые применили в дипломном проекте.
      </p>
      <ul className="techs__list">
        {tags.map((tag: string, index: number) => (
          <Tag
            tag={tag}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          />
        ))}
      </ul>
    </section>
  );
}

export default Techs;
