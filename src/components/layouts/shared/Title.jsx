import React from 'react';

const Title = ({mainTitle, subTitle}) => {
  return (
      <div>
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900 text-center">{mainTitle}</h2>
      <p className="mb-8 text-lg text-gray-500 text-center">{subTitle }</p>
      </div>
  );
};

export default Title;