import * as React from 'react';
import Svg, {Rect, Mask, G, Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgSearch = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Rect width={24} height={24} fill="#F40000" rx={7.2} />
    <Mask
      id="Search_svg__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}>
      <Rect width={24} height={24} fill="#fff" rx={7.2} />
    </Mask>
    <G mask="url(#Search_svg__a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="m15.26 13.954 2.473 2.474a.883.883 0 0 1 .267.649c0 .25-.091.466-.274.649a.887.887 0 0 1-.649.274.857.857 0 0 1-.649-.274l-2.474-2.466a4.94 4.94 0 0 1-2.877.894 4.988 4.988 0 0 1-1.972-.4 5.077 5.077 0 0 1-1.623-1.082A5.075 5.075 0 0 1 6.4 13.049a4.99 4.99 0 0 1-.4-1.972c0-.687.133-1.345.4-1.972a5.076 5.076 0 0 1 1.082-1.623A5.075 5.075 0 0 1 9.105 6.4a4.988 4.988 0 0 1 1.972-.4 4.99 4.99 0 0 1 1.973.4 5.075 5.075 0 0 1 1.622 1.082c.454.454.815.995 1.082 1.623.266.627.4 1.285.4 1.972a4.939 4.939 0 0 1-.894 2.877Zm-4.183.354c.89 0 1.65-.316 2.282-.949a3.111 3.111 0 0 0 .949-2.282c0-.89-.316-1.65-.949-2.282a3.112 3.112 0 0 0-2.282-.949c-.89 0-1.65.316-2.282.949a3.112 3.112 0 0 0-.949 2.282c0 .89.316 1.65.949 2.282a3.111 3.111 0 0 0 2.282.949Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SvgSearch;
