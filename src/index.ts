// import App from '@/core/app.class';
// import length from '../utils/length';
// import position from '../utils/position';
// import nodeText from '../utils/node-text';
// import { MINI_ARTICLE_AREA } from './config';
// import linkDensity from '../utils/link-density';

export default function () {
  return {
    filterParseSuccessAbort() {
      // app.fire('loading', true, true);

      // todo 更严格的验证（加上选项值控制）
      // const node = app.data('node');
      // const article = node.content;
      // const links = maybeNode.getElementsByTagName('a');
      // // 维基百科 0.31 左右
      // if (links.length > 16 && linkDensity(maybeNode) > 0.35) {
      //   // console.log('linkDensity --->', links.length, linkDensity(maybeNode));
      //   return false;
      // }
      return false;
    },
  };
}
