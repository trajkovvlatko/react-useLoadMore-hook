import React from 'react';
import IRow from '../interfaces/IRow';

interface IProps {
  row: IRow;
}

function Row(props: IProps) {
  const {row} = props;

  return (
    <li>
      {row.id} -{row.name}
    </li>
  );
}

export default Row;
