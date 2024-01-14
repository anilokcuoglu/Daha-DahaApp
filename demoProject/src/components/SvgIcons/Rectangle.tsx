import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgRectangle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="none"
    viewBox="0 0 305 377"
    {...props}>
    <Path
      fill="#009639"
      d="M0 22.48c0-7.866 0-11.799 1.533-14.799a14 14 0 0 1 6.143-6.12C10.68.037 14.614.052 22.48.08l259.803.933c7.807.028 11.711.042 14.693 1.57a14 14 0 0 1 6.093 6.108c1.52 2.986 1.525 6.89 1.533 14.697l.359 320.978c.013 11.715.02 17.572-2.292 21.96a20.007 20.007 0 0 1-9.22 8.791c-4.492 2.101-10.343 1.816-22.044 1.247L30.444 364.634c-10.706-.521-16.058-.782-20.125-3.031a20.008 20.008 0 0 1-8.27-8.682C0 348.749 0 343.39 0 332.672V22.481Z"
    />
  </Svg>
);
export default SvgRectangle;
