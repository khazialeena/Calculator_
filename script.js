let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);


// Function to process button clicks and keyboard input
function handleInput(value) {
    if (value == '=') {
        try {
            string = eval(string);
            input.value = string;
        } catch (e) {
            input.value = 'Error';
            string = '';
        }
    }
    else if(value == 'AC'){
        string = "";
        input.value = string;  // Shows placeholder "0"
    }
    else if(value == 'DEL'){
        string = string.substring(0, string.length-1);
        input.value = string;  // Shows placeholder "0" when empty
    }
    else if(value == '%'){
        // Handle percentage
        try {
            string = eval(string) / 100;
            input.value = string;
        } catch (e) {
            input.value = 'Error';
        }
    }
    else {
        string += value;
        input.value = string;
    }
}

// Mouse click support
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    })
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    const key = e.key;
    
    // Numbers (0-9)
    if (key >= '0' && key <= '9') {
        e.preventDefault();
        handleInput(key);
    }
    // Operators: +, -, *, /
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        e.preventDefault();
        handleInput(key);
    }
    // Enter or = for equals
    else if (key === 'Enter' || key === '=') {
        e.preventDefault();
        handleInput('=');
    }
    // Backspace for delete
    else if (key === 'Backspace') {
        e.preventDefault();
        handleInput('DEL');
    }
    // Escape for clear
    else if (key === 'Escape') {
        e.preventDefault();
        handleInput('AC');
    }
    // Decimal point
    else if (key === '.') {
        e.preventDefault();
        handleInput('.');
    }
    // Percentage
    else if (key === '%') {
        e.preventDefault();
        handleInput('%');
    }
});
    