import React from 'react';

function usePrevious<T>(value: T): T {
  const ref = React.useRef(value);
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export { usePrevious };
