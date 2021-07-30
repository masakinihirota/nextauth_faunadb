// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export defaultに続く関数宣言では
// 特別に名前なしの関数宣言——すなわち無名関数宣言——が認められている
// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  res.status(200).json({ name: 'John Doe' });
};
