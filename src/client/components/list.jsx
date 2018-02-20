import React from 'react';

const List = ({blogs}) => {
  return (
      <ul>
        {blogs.map(({ id, title, text }) => (
          <li key={id}>
            Title:{title}, Text: {text}
          </li>
        ))}
      </ul>
  );
};

export default List;
