// const text = 'Hola Mundo';
// const fruits = ['manzana', 'pera', 'banano']

// // string
// test('debe contener un texto', ()=>{
//     expect(text).toMatch(/Mundo/);
// })

// // array
// test('Tenemos un banano?', ()=>{
//     expect(fruits).toContain('banano');
// });

// // numbers
// test('Mayor que', ()=>{
//     expect(10).toBeGreaterThan(9);
// });

// //Boolean
// test('Verdadero', () => {
//     expect(true).toBeTruthy
// })

// //callback
// const reverseString = (str, callback) => {
//     callback(str.split('').reverse().join(''))
// };

// test('Probar un CallBack', () => {
//     reverseString('Hola', (str) =>{
//         expect(str).toBe('aloH')
//     });
// });

//Promise

const reverseString = str => {
    return new Promise((resolve, reject) => {
        if(!str) {
            reject(Error('Error'))
        }
        resolve(str.split('').reverse().join(''))
    });
};

test('Probar una promesa', () => {
    return reverseString('Hola')
    .then(string => {
        expect(string).toBe('aloH')

    })
})

test('Probar async/await', async () => {
    const string = await reverseString('Hola');
    expect(string).toBe('aloH');
});

// afterEach(() => console.log('Después de cada prueba'));
// afterAll(() => console.log('Después de todas las pruebas'));

// beforeEach(() => console.log('Antes de cada prueba'));
// beforeAll(() => console.log('Antes de Todas las pruebas'));