const operaciones = require('./operaciones');

const arguments = process.argv.slice(2)
const [funcion, ...args] = arguments;

switch(funcion) {
    case 'read':
        operaciones.read()
        break;
    case 'create':
        operaciones.create(args);
        break;
    case 'remove':
        operaciones.remove(args);
        break;
    case 'update':
        operaciones.update(args);
        break;
        
    default:
        console.log('no se paso una funcion correcta')
        break;
}