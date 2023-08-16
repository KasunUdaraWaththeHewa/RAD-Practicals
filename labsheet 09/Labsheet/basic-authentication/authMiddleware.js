function authenticationMiddleware(req, res, next) {
    const apiKeyHeader = req.headers.authorization;
  
    if (apiKeyHeader === 'my-secret-key') {
      next();
    } else {
      res.sendStatus(401);
    }
  }
  
  module.exports = authenticationMiddleware;
  