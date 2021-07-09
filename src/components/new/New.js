import React from 'react';

const New = (props) => {
  const { createdAt, name, image } = props.props;
  return (
    <div>
      <h1>{name}</h1>
      <h1>{image}</h1>
      <h1>{createdAt}</h1>
    </div>
  );
};

export default New;
