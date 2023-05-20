function isInlinePDFSupported() {
  var element = document.createElement('object');
  return (typeof element.canPlayType === 'function' && element.canPlayType('application/pdf') !== '');
}
