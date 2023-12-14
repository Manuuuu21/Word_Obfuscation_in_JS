_0x636f6e76657274546f48657861646563696d616c=()=> {
	var _0x776f7264 = document.getElementById("_0x696e705f6f62667573636174696f6e").value;
	var _0x686578576f7264 = "";

	for (let i = 0; i < _0x776f7264.length; i++) {
		    let _0x68657861646563696d616c = _0x776f7264.charCodeAt(i).toString(16);
		    _0x686578576f7264 += _0x68657861646563696d616c;
	}

	console.log(`Hexadecimal representation of: _0x${_0x686578576f7264}`);
	document.getElementById("_0x6f62667573636174696f6e5f76616c7565").innerHTML = `_0x` + _0x686578576f7264;
}


_0x636f6e76657274546865486578546f4f726967696e616c=()=> {
	let _0x686578537472696e67 = document.getElementById("_0x646563727970745f686578615f76616c").value;
	let _0x737472 = '';

	// Remove the "_0x" prefix
	if (_0x686578537472696e67.startsWith('_0x')) {
		_0x686578537472696e67 = _0x686578537472696e67.slice(3);
	}

	for (let i = 0; i < _0x686578537472696e67.length; i += 2) {
		let _0x686578 = _0x686578537472696e67.substring(i, i+2);
		let _0x63686172 = String.fromCharCode(parseInt(_0x686578, 16));
		_0x737472 += _0x63686172;
	}

	console.log(`English representation of Hexadecimal: ${_0x737472}`);
	document.getElementById("_0x646563727970745f68657861").innerHTML = _0x737472;
}