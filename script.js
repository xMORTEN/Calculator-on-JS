let display = '';
let result = '';
let symbol = '';

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (ev) => {
        let val = ev.target.value || ev.target.innerText;

        if (val === '=') {
            if (symbol !== '') {
                switch (symbol) {
                    case '+': {
                        let parts = display.split('+');
                        result = Number(parts[0]) + Number(parts[1]);
                        break;
                    }
                    case '-': {
                        let parts = display.split('-');
                        result = Number(parts[0]) - Number(parts[1]);
                        break;
                    }
                    case '*': {
                        let parts = display.split('*');
                        result = Number(parts[0]) * Number(parts[1]);
                        break;
                    }
                    case '/': {
                        let parts = display.split('/');
                        result = Number(parts[0]) / Number(parts[1]);
                        break;
                    }
                }
                document.querySelector('#display').value = result;
                display = String(result);
                symbol = ''; // Скидаємо символ після рівно
            }
            return;
        }

        if (val === '+' || val === '-' || val === '*' || val === '/') {
            if (symbol !== '') {
                let parts = display.split(symbol);
                if (parts.length > 1 && parts[1] !== '') {
                    switch (symbol) {
                        case '+': result = Number(parts[0]) + Number(parts[1]); break;
                        case '-': result = Number(parts[0]) - Number(parts[1]); break;
                        case '*': result = Number(parts[0]) * Number(parts[1]); break;
                        case '/': result = Number(parts[0]) / Number(parts[1]); break;
                    }
                    display = String(result) + val;
                    document.querySelector('#display').value = display;
                    symbol = val;
                    return;
                }
            }
            symbol = val;
        }

        if (val === 'C') {
            display = '';
            result = '';
            symbol = '';
            document.querySelector('#display').value = '';
            return;
        }

        if (val === '+') {
            symbol = '+';
        }
        if (val === '*') {
            symbol = '*';
        }
        if (val === '/') {
            symbol = '/';
        }
        if (val === '-') {
            symbol = '-';
        }

        display += val;
        document.querySelector('#display').value = display;
    });
});