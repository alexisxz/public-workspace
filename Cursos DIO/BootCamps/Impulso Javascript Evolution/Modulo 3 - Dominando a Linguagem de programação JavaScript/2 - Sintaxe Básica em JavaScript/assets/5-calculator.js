function calculator() {
    const operation = Number(prompt("Choose the operator [1, 2, 3, 4, 5 or 6]:\n 1 - Sum (+) \n 2 - Subtraction (-) \n 3 - Multiplication (*) \n 4 - Real division (/) \n 5 - Integer division (%) \n 6 - Potentiation (**)"));

    if (!operation || operation >= 7) {
        alert("Error - invalid operation")
        calculator()
    } else {
        let n1 = Number(prompt("insert the numerator:"));
        let n2 = Number(prompt("insert the denominator: "));
        let result;

        if (!n2 || !n2) {
            alert('Error - invalid numerator and denominator, use only numbers');
            calculator();
        } else {
            function sum() {
                result = n1 + n2;
                alert(`${n1} + ${n2} = ${result}`);
                newOperation();
            }

            function subtraction() {
                result = n1 - n2;
                alert(`${n1} - ${n2} = ${result}`);
                newOperation();
            }

            function multiplication() {
                result = n1 * n2;
                alert(`${n1} * ${n2} = ${result}`);
                newOperation();
            }

            function realDivision() {
                result = n1 / n2;
                alert(`${n1} / ${n2} = ${result}`);
                newOperation();
            }

            function integerDivision() {
                result = n1 % n2;
                alert(`the rest of the division of ${n1} % ${n2} is = ${result}`);
                newOperation();
            }

            function potentiation() {
                result = n1 ** n2;
                alert(`${n1} ** ${n2} = ${result}`);
                newOperation();
            }

            function newOperation() {
                let option = Number(prompt("Do you wanna make another operation? \n 1 - Yes \n 2 - No"));

                if (option == 1) {
                    calculator();
                } else if (option == 2) {
                    alert('see you soon');
                } else {
                    alert('Choose a valid opção: \n if yes: 1 \n if no: 2');
                    newOperation();
                }
            }

            /* Substituido por switch case
            if (operation == 1) {
                sum();
            } else if (operation == 2) {
                subtraction();
            } else if (operation == 3) {
                multiplication();
            } else if (operation == 4) {
                realDivision();
            } else if (operation == 5) {
                integerDivision();
            } else if (operation == 6) {
                potentiation();
            }
            */

            switch (operation) {
                case 1:
                    sum();
                    break;
                case 2:
                    subtraction();
                    break;
                case 3:
                    multiplication();
                    break;
                case 4:
                    realDivision();
                    break;
                case 5:
                    integerDivision();
                    break;
                case 6:
                    potentiation();
                    break;
            }
        }
    }
}


calculator();