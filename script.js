
const DEFAULT_VALUE = 0;

let currentValue = [DEFAULT_VALUE];

const displayElement = document.getElementById('display');

const keys = document.querySelectorAll('.calculator_keys button');

keys.forEach((key) => {
    key.addEventListener('click', changeDisplay);
})

function changeDisplay(event) {
    const key = event.target.textContent;
    currentValue.push(key);
    displayElement.textContent = currentValue.join('');
    
}

// TODO
/*¡Haz que la calculadora funcione!
Deberá almacenar el primer número que se ingresa en la calculadora cuando un usuario presiona un operador,
y también guardar qué operación se ha elegido y luego operate()en ellos cuando el usuario presiona la tecla "=".
Ya debería tener el código que puede llenar la pantalla, así que una vez que operate()se haya llamado,
actualice la pantalla con la 'solución' de la operación.
Esta es la parte más difícil del proyecto.
Debe descubrir cómo almacenar todos los valores y llamar a la función operar con ellos.
No te sientas mal si te toma un tiempo descubrir la lógica.
*/






// Auxiliares


const add = (a, b) => {
	return a + b;
};

const subtract = (a, b) => {
	return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

const operate = (operation, a, b) => {
    return operation(a, b);
};
