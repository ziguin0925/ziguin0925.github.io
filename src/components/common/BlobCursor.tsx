import { useTrail, animated } from '@react-spring/web';
import { useRef, useEffect, useCallback } from 'react';

import './BlobCursor.css';

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x: number, y: number) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

interface BlobCursorProps {
  blobType?: 'circle' | 'square';
  fillColor?: string;
}

export const BlobCursor = ({ blobType = 'circle', fillColor = '#fegefe' }: BlobCursorProps) => {
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));

  const ref = useRef<HTMLDivElement>(null);
  const updatePosition = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      return { left: rect.left, top: rect.top };
    }
    return { left: 0, top: 0 };
  }, []);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const { left, top } = updatePosition();
    let x: number, y: number;
    
    if ('touches' in e && e.touches) {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    } else if ('clientX' in e) {
      x = e.clientX;
      y = e.clientY;
    } else {
      return;
    }
    
    api.start({ xy: [x - left, y - top] });
  };

  useEffect(() => {
    const handleResize = () => {
      updatePosition();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updatePosition]);

  return (
    <div className="bg-gray-900 text-gray-400 h-screen">
      <div className='container '>
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id='blob'>
            <feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='30' />
            <feColorMatrix
              in='blur'
              values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10'
            />
          </filter>
        </svg>
        <div
          ref={ref}
          className='main'
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {trail.map((props, index) => (
            <animated.div
              key={index}
              style={{
                transform: props.xy.to(trans),
                borderRadius: blobType === 'circle' ? '50%' : '0%',
                backgroundColor: fillColor,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

