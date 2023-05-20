function isInlinePDFSupported() {
  var element = document.createElement('object');
  return (typeof element.canPlayType === 'function' && element.canPlayType('application/pdf') !== '');
}

(function() {
  'use strict';

  if (isInlinePDFSupported()) {
    var objectElement = document.createElement('object');
    objectElement.setAttribute('data', 'RTWA-MN Scholarship 2023.pdf');
    objectElement.setAttribute('type', 'application/pdf');
    objectElement.setAttribute('width', '100%');
    objectElement.setAttribute('height', '1000px');

    document.getElementById('pdf-container').appendChild(objectElement);
  } else {
    var iframeElement = document.createElement('iframe');
    iframeElement.setAttribute('src', 'your_pdf_file.pdf');
    iframeElement.setAttribute('width', '100%');
    iframeElement.setAttribute('height', '1000px');

    document.getElementById('pdf-container').appendChild(iframeElement);
  }
})();
