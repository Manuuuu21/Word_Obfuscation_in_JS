// Function to convert a string to hexadecimal
convertToHexadecimal = () => {
    // Get the input string from the HTML element with id "input_obfuscation"
    let word = document.getElementById("input_obfuscation").value;
    let hexWord = "";

    // Loop through each character in the string
    for (let i = 0; i < word.length; i++) {
        // Convert each character to hexadecimal and append to hexWord
        let hexadecimal = word.charCodeAt(i).toString(16);
        hexWord += hexadecimal;
    }

    // Display the hexadecimal string in the HTML element with id "obfuscation_result"
    document.getElementById("obfuscation_result").innerHTML = `_0x` + hexWord;
}

// Function to convert a hexadecimal string back to the original string
convertHexToOriginal = () => {
    // Get the hexadecimal string from the HTML element with id "decrypt_hex"
    let hexString = document.getElementById("decrypt_hex").value;
    let str = '';

    // Check if the hexadecimal string starts with "_0x" and remove it
    if (hexString.startsWith('_0x')) {
        hexString = hexString.slice(3);
    }

    // Loop through each pair of characters in the hexadecimal string
    for (let i = 0; i < hexString.length; i += 2) {
        // Convert each pair of hexadecimal characters back to the original character
        let hex = hexString.substring(i, i+2);
        let char = String.fromCharCode(parseInt(hex, 16));
        str += char;
    }

    // Display the original string in the HTML element with id "decrypt_hex_result"
    document.getElementById("decrypt_hex_result").innerHTML = str;
}
