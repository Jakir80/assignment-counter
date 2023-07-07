import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './CounterAction';

const Header = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Counter: {count}</h2>
      <div>
        <button
          style={{ marginRight: '8px', padding: '8px 16px', fontSize: '16px' }}
          onClick={() => dispatch(increment())}
        >
          Increase
        </button>
        <button
          style={{ marginRight: '8px', padding: '8px 16px', fontSize: '16px' }}
          onClick={() => dispatch(decrement())}
        >
          Decrease
        </button>
        <button
          style={{ padding: '8px 16px', fontSize: '16px' }}
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default Header;