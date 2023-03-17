const text = 'Hola Mundo';
const fruits = ['manzana', 'pera', 'banano']

// string
test('debe contener un texto', ()=>{
    expect(text).toMatch(/Mundo/);
})

// array
test('Tenemos un banano?', ()=>{
    expect(fruits).toContain('banano');
});

// numbers
test('Mayor que', ()=>{
    expect(10).toBeGreaterThan(9);
});

//Boolean
test('Verdadero', () => {
    expect(true).toBeTruthy
})

//callback
const reverseString = (str, callback) => {
    callback(str.split('').reverse().join(''))
};

test('Probar un CallBack', () => {
    reverseString('Hola', (str) =>{
        expect(str).toBe('aloH')
    });
});