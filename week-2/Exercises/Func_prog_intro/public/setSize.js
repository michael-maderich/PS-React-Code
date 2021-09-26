/**
 * Creates a function which when called will set the Document font size.
 * @param {number} size
 *        Font size to set
 * @param {function} getDocument
 *        A function which returns the browser Document object.
 * @returns {function}
 *          Returns a function which will set the font size for the document to desired size - our `size` argument.
 */
function makeSetSize(size, getDocument) {
  console.log("creating makeSetSize size " + size);
  const document = getDocument();
  return function () {
    document.body.style.fontSize = size + "px";
    console.log(`document font size set to ${size}`);
  };
}