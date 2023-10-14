'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button className='bg-red-400 rounded-full w-8 h-8' onClick={() => setCount(count + 1)}>
        +
      </button>{' '}
      {count}
    </div>
  );
}
