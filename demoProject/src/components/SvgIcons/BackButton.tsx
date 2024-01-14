import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgBackButton = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="none"
    viewBox="0 0 40 40"
    {...props}>
    <Circle cx={20} cy={20} r={20} fill="#1D1E1C" />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="m12.41 18.905 5.495-5.494c.253-.253.6-.411.947-.411.348 0 .695.126.947.41a1.354 1.354 0 0 1 0 1.928l-3.157 3.156h11.02c.757 0 1.358.6 1.358 1.358 0 .758-.6 1.359-1.358 1.359h-11.02l3.19 3.19a1.354 1.354 0 0 1 0 1.927 1.354 1.354 0 0 1-1.927 0L12.41 20.8c-.253-.253-.411-.6-.411-.948 0-.347.158-.694.41-.947Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBackButton;
