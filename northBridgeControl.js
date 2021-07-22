const argumentValue = process.argv[2];

const action = String(argumentValue);

if (action === 'EXTEND' ) {
    console.log('Extending bridge!');
}