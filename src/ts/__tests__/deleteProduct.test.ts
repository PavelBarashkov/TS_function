import { Cart } from "../Cart";
import { Buyable } from "../interface/product";

const product: Buyable = {
    id: 1,
    name: '12',
    price: 10,
};
const product2: Buyable = {
    id: 2,
    name: '10',
    price: 20,
};

test('get sum price', () => {
    const main = new Cart();
    main.add(product);
    main.add(product2);
    main.deleteProduct(1);
    const result: Buyable[] = [ product2 ]; 
    expect(result).toEqual(main.getAll())
})

test('Incorrect Id', () => {
    const main = new Cart();
    expect(() => main.deleteProduct(0)).toThrow('Некорректный Id');
})

test('id not found', () => {
    const main = new Cart();
    expect(() => main.deleteProduct(5)).toThrow('Id не найден');
})