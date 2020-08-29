import React from 'react';

interface IProps {
  disabled: boolean;
  show: boolean;
  cb: () => void;
}

function LoadMore(props: IProps) {
  const {disabled, show, cb} = props;

  return (
    <>
      {show ? (
        <button disabled={disabled} onClick={cb}>
          Load more
        </button>
      ) : (
        <div>No more results.</div>
      )}
    </>
  );
}

export default LoadMore;
