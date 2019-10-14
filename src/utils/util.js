const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
export const getRandomId = (len, radix = chars.lengt) => {
  const uuid = [];

  for (let i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
  return uuid.join('');
}

export const innerCovers = [
  "https://puui.qpic.cn/fans_admin/0/3_1409075683_1570970067979/0",
  "https://puui.qpic.cn/fans_admin/0/3_1409075683_1570970068193/0",
  "https://puui.qpic.cn/fans_admin/0/3_1271937727_1570970068312/0",
  "https://puui.qpic.cn/fans_admin/0/3_1409075683_1570970068266/0",
  "https://puui.qpic.cn/fans_admin/0/3_1271937727_1570970069346/0",
  "https://puui.qpic.cn/fans_admin/0/3_1409075683_1570970083300/0",
  "https://puui.qpic.cn/fans_admin/0/3_1271937727_1570970083358/0",
  "https://puui.qpic.cn/fans_admin/0/3_1271937727_1570970083279/0",
  "https://puui.qpic.cn/fans_admin/0/3_1271937727_1570970083371/0",
  "https://puui.qpic.cn/fans_admin/0/3_1271937727_1570970083563/0",
  "https://puui.qpic.cn/fans_admin/0/3_1409075683_1570970095496/0",
  "https://puui.qpic.cn/fans_admin/0/3_1271937727_1570970095574/0",
  "https://puui.qpic.cn/fans_admin/0/3_1440788960_1570970095609/0",
  "https://puui.qpic.cn/fans_admin/0/3_1409075683_1570970095623/0",
  "https://puui.qpic.cn/fans_admin/0/3_1271937727_1570970095728/0",
  "https://puui.qpic.cn/fans_admin/0/3_1440788960_1570970110018/0",
  "https://puui.qpic.cn/fans_admin/0/3_1440788960_1570970110000/0",
  "https://puui.qpic.cn/fans_admin/0/3_1271937727_1570970110039/0",
  "https://puui.qpic.cn/fans_admin/0/3_1409075683_1570970110270/0",
  "https://puui.qpic.cn/fans_admin/0/3_1271937727_1570970110396/0",
  "https://puui.qpic.cn/fans_admin/0/3_1409075683_1570970121675/0",
  "https://puui.qpic.cn/fans_admin/0/3_1271937727_1570970121803/0",
  "https://puui.qpic.cn/fans_admin/0/3_1271937727_1570970122711/0",
  "https://puui.qpic.cn/fans_admin/0/3_1409075683_1570970121779/0",
  "https://puui.qpic.cn/fans_admin/0/3_1271937727_1570970121998/0",
  "https://puui.qpic.cn/fans_admin/0/3_1271937727_1570970132903/0",
  "https://puui.qpic.cn/fans_admin/0/3_1409075683_1570970133088/0",
];

export const getRandomCover = () => innerCovers[Math.floor(Math.random() * innerCovers.length)];

export const getFirstNote = () => {
  return {
    _id: getRandomId(32, 16),
    created_at: Date.now(),
    updated_at: Date.now(),
    title: '欢迎使用 Reditor 记事本', // 标题
    content: '', // 富文本
    summary: '', // 根据 content 生成，纯文字
    cover: getRandomCover(), // 创建时从封面库随机取
    status: 1, // 0 - 回收站；1 - 正常；2 - 草稿；
    last_edited_content: '', // 暂未发布的修改内容；
  };
}

const MonthMap = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export const getFormtedDate = (date) => {
  const month = date.getMonth();
  const monStr = (MonthMap[month]).toUpperCase();
  return `${monStr} ${date.getDate()}, ${date.getFullYear()}`;
};

export const debounce = (func, duration) => {
  let timeout;
  return (...args) => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        func(...args);
      }, duration)

  }
};
