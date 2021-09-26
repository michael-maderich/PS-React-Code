console.log('setSizeScript.js');
const getDocument = () => document;

window.addEventListener('DOMContentLoaded', () => {
    const setSize12 = makeSetSize(12, getDocument);
    const setSize14 = makeSetSize(14, getDocument);

    console.log('setSize functions created.');

    const size12Button = document.getElementById('size-12');
    size12Button.onclick = setSize12;

    document.getElementById('size-14').onclick = setSize14;

    setOnClickHandlerFor('size-16', makeSetSize(16, document));
});

/**
 * Set the onclick callback for element with ID elementID.
 * @param   {string} elementID 
 * @param   {function} callback 
 * @returns null
 */
function setOnClickHandlerFor(elementID, callback) {
    console.log(`setting onclick callback function for element with id ${elementID} to ${callback.toString()}`);
    document.getElementById(elementID).onclick = callback;
}