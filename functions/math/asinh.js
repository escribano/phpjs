function asinh(arg) {
  //  discuss at: http://phpjs.org/functions/asinh/
  // original by: Onno Marsman
  //   example 1: asinh(8723321.4);
  //   returns 1: 16.67465779841863

  return Math.log(arg + Math.sqrt(arg * arg + 1));
}