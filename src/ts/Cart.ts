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
        let sum: number = 0;
        this.items.forEach(item => {
            sum += item.price
        })
        return sum;
    }

    getPurchaseWithDiscount(discount: number): number {
        let sum: number = 0;
        this.items.forEach(item => {
            sum += item.price
        })
        let sumDiscount: number = (sum / 100) * discount;
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