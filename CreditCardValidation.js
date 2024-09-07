function validateCard(cardNumber) {
    let originalCardNumber = cardNumber; // Store the original number
    let counter = 0; // Counter for the number of digits
    
    // Step 1: Count the digits by dividing the number by 10 in each iteration
    while (cardNumber > 0) {
        cardNumber = Math.floor(cardNumber / 10);
        counter++;
    }
    
    // Reset cardNumber to original for further checks
    cardNumber = originalCardNumber;
    
    // Step 2: Check if the number of digits is valid (either 15 or 16)
    if (counter !== 15 && counter !== 16) {
        console.log("INVALID");
        return;
    }
    
    // Step 3: Apply Luhn's Algorithm
    let sum1 = 0, sum2 = 0;
    let isEvenPosition = false; // Start from the last digit (odd position)

    do {
        let digit = cardNumber % 10;
        cardNumber = Math.floor(cardNumber / 10); // Remove last digit
        
        if (isEvenPosition) {
            let mul = digit * 2;
            if (mul > 9) {
                mul = Math.floor(mul / 10) + (mul % 10); // Sum the digits
            }
            sum1 += mul;
        } else {
            sum2 += digit;
        }

        isEvenPosition = !isEvenPosition; // Toggle position
    } while (cardNumber > 0);
    
    let total = sum1 + sum2;
    if (total % 10 !== 0) {
        console.log("INVALID");
        return;
    }
    
    // Step 4: Check for AMEX or MasterCard based on length and starting numbers
    cardNumber = originalCardNumber;
    
    if (counter === 15) {
        // For AMEX, the card should start with 34 or 37
        while (cardNumber >= 100) {
            cardNumber = Math.floor(cardNumber / 10);
        }
        if (cardNumber === 34 || cardNumber === 37) {
            console.log("AMEX");
        } else {
            console.log("INVALID");
        }
    } else if (counter === 16) {
        // For MasterCard, the card should start with 5
        while (cardNumber >= 10) {
            cardNumber = Math.floor(cardNumber / 10);
        }
        if (cardNumber === 5) {
            console.log("MASTERCARD");
        } else {
            console.log("INVALID");
        }
    }
}

validateCard(5418878773156819); // MASTERCARD
