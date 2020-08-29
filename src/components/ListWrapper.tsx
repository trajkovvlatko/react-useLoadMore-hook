import React, {useState} from 'react';
import useLoadMore from '../hooks/useLoadMore';
import IRow from '../interfaces/IRow';
import List from './List';
import LoadMore from './LoadMore';

const host = process.env.REACT_APP_HOST;

function ListWrapper() {
  const limit = 3;
  const [offset, setOffet] = useState<number>(0);
  const url = `${host}?offset=${offset}`;
  const {list, loading, error, hasMore} = useLoadMore<IRow>(url, limit);

  if (error) return <>{error}</>;

  const onLoadMore = () => setOffet(offset + limit);

  return (
    <>
      <List list={list} />
      {loading && <div>Loading...</div>}
      <LoadMore disabled={loading} show={hasMore} cb={onLoadMore} />
    </>
  );
}

export default ListWrapper;
