import React, { memo } from 'react';

function Child2({ count }) {
  console.log('hello from child 2');
  return (
    <div>
      <h1>Child 2</h1>
      <p>{`count: ${count}`}</p>
    </div>
  );
}

Child2.propTypes = String;

export default memo(Child2);
// export default memo(Child2, (prevPorps, nextProps) => {
//   return false; // rerenders every time
// });
