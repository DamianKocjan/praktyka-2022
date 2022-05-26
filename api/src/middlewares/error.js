function errorMiddleware(err, _req, res, next) {
  if (!err) {
    next();
    return;
  }

  res.status(err.status || 500);
  res.json({
    error: err?.message || err,
  });
}

module.exports = errorMiddleware;
