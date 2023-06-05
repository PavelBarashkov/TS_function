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
    const result: number = 27; 
    expect(result).toBe(main.getPurchaseWithDiscount(10))
})

test('incorrect discount', () => {
    const main = new Cart();
    expect(() => main.getPurchaseWithDiscount(100)).toThrow('Некорректная скидка');
})