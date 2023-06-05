import { Buyable } from "./interface/product";

export class Cart {
    private items: Buyable[] = []; 

    add(item: Buyable): void { 
        this.items.push(item);
    }

    getAll(): Buyable[] { 
        return [...this.items];
    }

    getPurchase(): number {
        return this.items.reduce((acc, item) => acc + item.price, 0 )
    }

    getPurchaseWithDiscount(discount: number): number {
        const sum = this.getPurchase();
        let sumDiscount: number = (sum/ 100) * discount;
        let price: number = sum - sumDiscount;
        if (discount >= 100 || !discount) {
            throw new Error('Некорректная скидка')
        } else {
            return price;
        }
    }

    deleteProduct(id: number): void {
        if (!id || id === 0) {
            throw new Error('Некорректный Id')
        }
        let test =  this.items.some(item => item.id === id)
        if(!test) {
            throw new Error('Id не найден')
        }
        this.items  = this.items.filter(item => item.id !== id);
    }
}