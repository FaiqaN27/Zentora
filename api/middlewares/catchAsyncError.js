const catchAsyncError = (theFunc) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};

export default catchAsyncError;
