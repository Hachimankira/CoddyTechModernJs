function substitution(key, message) {
    let encryptMsg = '';
    const arr = message.split('');
    
    for (let i = 0; i < message.length; i++) {
        const result = isLetter(arr[i]);
        
        if (!result.isLetter) {
            encryptMsg += arr[i];
        } else {
            const char = arr[i].toUpperCase(); // Ensure the char is uppercase to match with key
            let encIndex = result.index;
            const encryptedChar = key[encIndex];
            
            // Preserve the case of the original character
            if (arr[i] === arr[i].toUpperCase()) {
                encryptMsg += encryptedChar;
            } else {
                encryptMsg += encryptedChar.toLowerCase();
            }
        }
    }
    
    console.log(encryptMsg);
}

function isLetter(char) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const index = letters.indexOf(char.toUpperCase()); // Convert to uppercase for consistency

    return {
        isLetter: index !== -1,
        index: index
    };
}

const key = ['N', 'Q', 'X', 'P', 'O', 'M', 'A', 'F', 'T', 'R', 'H', 'L', 'Z', 'G', 'E', 'C', 'Y', 'J', 'I', 'U', 'W', 'S', 'K', 'D', 'V', 'B'];
substitution(key, 'Hello, World!'); // Output: Folle, Kejlp!