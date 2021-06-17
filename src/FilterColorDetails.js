import React from 'react';
import { useParams } from 'react-router-dom';
import Color from './Color';

function FilterColorDetails({colors}) {
  const {name} = useParams();

  if (name) {
    const currentColor = colors.find(
      c => c.name === name
    );
    return <Color color={currentColor} />;
  }
  return null;
}

export default FilterColorDetails;
