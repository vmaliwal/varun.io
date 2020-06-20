// Refer: https://semortea.wordpress.com/2020/04/06/p5-js-with-gatsbyjs-tutorial/

import Loadable from '@loadable/component';

export const P5Wrapper = Loadable(() => import('react-p5-wrapper'));
