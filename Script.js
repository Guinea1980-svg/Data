
function Redirect(Link) {
	window.location.href = Link
}
function download(file, text) {

        //creating an invisible element
        let element = document.createElement('a');
        element.setAttribute('href',
            'data:text/plain;charset=utf-8, '
            + encodeURIComponent(text));
        element.setAttribute('download', file);
        document.body.appendChild(element);
        element.click();

	document.body.removeChild(element);
}
