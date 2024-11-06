const merge = require('./app.js')

test("test#1 normal case" , () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];
    const collection_3 = [9, 7, 0]; 
    const result = merge(collection_1, collection_2, collection_3)
    expect(result).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7 ,9]);
})

test("test#2 empty array case" , () => {
    const collection_1 = [];
    const collection_2 = [];
    const collection_3 = []; 
    const result = merge(collection_1, collection_2, collection_3)
    expect(result).toStrictEqual([]);
})

test("test#3 number overlap between array" , () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];
    const collection_3 = [6, 3, 2]; 
    const result = merge(collection_1, collection_2, collection_3)
    expect(result).toStrictEqual([1, 2, 2, 3, 3, 4, 5, 6, 6]);
})

test("test#4 repeating number" , () => {
    const collection_1 = [1, 1, 1];
    const collection_2 = [2, 2, 2];
    const collection_3 = [3, 3, 3]; 
    const result = merge(collection_1, collection_2, collection_3)
    expect(result).toStrictEqual([1, 1, 1, 2, 2, 2, 3, 3, 3]);
})