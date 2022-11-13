import React from 'react';
import * as images from '../../images/charts';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Logo({ width, height, style, className = '' }: LogoProps) {
  const styles = { width, height, display: 'inline-block', ...style };
  return (
    <div
      style={styles}
      className={`logo-animated logo-animated-delay-half-seconds bounce-in ${className} `}
    >
      <img src={images.StatsICon} alt="Stast Logo" />
    </div>
  );
}
