function pyramid(height) {

    for (let i = 0; i < height; i++) {
        let stringVarName = '';
        for (let j = i + 1; j < height; j++) {
            stringVarName += " ";
        }

        for (let k = 0; k <= i; k++) {
            stringVarName += "#";
        }
        console.log(stringVarName);
    }
}

pyramid(4);