export default function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Access-Control-Allow-Origin');

  // 处理预检请求
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
  } else {
    next();
  }
}
