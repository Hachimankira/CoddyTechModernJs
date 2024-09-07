function pyramids(height) {
    for (let i = 0; i < height; i++) {
        let str = '';
        for (let j = i + 1; j < height; j++) {
            str += ' ';
        }
        for (let k = 0; k <= i; k++) {
            str += '#';
        }

        str += '  ';

        for (k = 0; k <= i; k++) {
            str += '#';
        }
        console.log(str);

    }
}

pyramids(4);