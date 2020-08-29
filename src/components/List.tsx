import React from 'react';
import IRow from '../interfaces/IRow';
import Row from './Row';

interface IProps {
  list: IRow[];
}

function List(props: IProps) {
  const {list} = props;

  return (
    <ul>
      {list &&
        list.length > 0 &&
        list.map((row: IRow) => <Row key={row.id} row={row} />)}
    </ul>
  );
}

export default List;
