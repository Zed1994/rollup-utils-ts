/**
 * 查找对应节点
 * @param tree
 * @param id
 * @param key
 * @returns {undefined | any} tree | undefined
 */
 export function treeFindDir(tree: any, id: any, key = 'resourceId') {
  if (!(tree instanceof Array)) return;

  for (let i = 0; i < tree.length; i += 1) {
    const item = tree[i];
    // eslint-disable-next-line consistent-return
    if (item[key] === id) return item;
    if (item.children) {
      const value: any = treeFindDir(item.children, id, key);
      // eslint-disable-next-line consistent-return
      if (value) return value;
    }
  }
}



export function translateUnicode(str: string) {
  return str.replace(/\\u(\d{4})/g, (...args) => unescape(`%u${args[1]}`));
}

// 电子课本封面压缩
export function getCoverUrl(url: string) {
  if (url.indexOf('?') > -1) {
    return `${url}&imageMogr2/size-limit/50k!`;
  }
  return `${url}?imageMogr2/size-limit/50k!`;
}

// 封面图片压缩， 基于原图的长宽，按指定百分比缩放。Scale取值范围1-999。
export function getThumbnailUrl(url: string, scale = 15) {
  // bos 添加压缩参数
  if (url.includes('bos.com')) {
    return `${url}@q_${scale},f_webp`;
  }
  // cos 添加压缩参数
  const index = url.indexOf('imageMogr2');
  if (index > -1) {
    return url.replace(
      /imageMogr2/,
      `imageMogr2/format/webp/thumbnail/!${scale}p`
    );
  }
  if (url.indexOf('?') > -1) {
    return `${url}&imageMogr2/format/webp/thumbnail/!${scale}p`;
  }
  return `${url}?imageMogr2/format/webp/thumbnail/!${scale}p`;
}
/**
 * 时长转时间
 * @param duration
 */
export function durationToTime(duration: number) {
  const mm = Math.floor(duration / 60);
  const ss = (duration % 60).toFixed(0);
  return `${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
}


export function sizeify(n: number): string {
  if (!n) return '-';
  const units = ['', 'K', 'M', 'G', 'T'];
  let i = 0;
  // eslint-disable-next-line
  for (; n >= 1024; n >>= 10, i++);
  return `${n + units[i]}B`;
}

export function toDate(stamp: number): string {
  const d = new Date(stamp * 1000);
  return `${d.getFullYear()}-${((d.getMonth() + 1) / 100)
    .toFixed(2)
    .substr(2)}-${(d.getDate() / 100).toFixed(2).substr(2)}`;
}
