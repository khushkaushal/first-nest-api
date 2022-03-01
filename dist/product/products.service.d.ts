import { Product } from './product.model';
export declare class ProductsService {
    private products;
    insertProduct(title: string, desc: string, price: number): string;
    getProducts(): {
        [x: number]: Product;
        length: number;
        toString(): string;
        toLocaleString(): string;
        pop(): Product;
        push(...items: Product[]): number;
        concat(...items: ConcatArray<Product>[]): Product[];
        concat(...items: (Product | ConcatArray<Product>)[]): Product[];
        join(separator?: string): string;
        reverse(): Product[];
        shift(): Product;
        slice(start?: number, end?: number): Product[];
        sort(compareFn?: (a: Product, b: Product) => number): Product[];
        splice(start: number, deleteCount?: number): Product[];
        splice(start: number, deleteCount: number, ...items: Product[]): Product[];
        unshift(...items: Product[]): number;
        indexOf(searchElement: Product, fromIndex?: number): number;
        lastIndexOf(searchElement: Product, fromIndex?: number): number;
        every<S extends Product>(predicate: (value: Product, index: number, array: Product[]) => value is S, thisArg?: any): this is S[];
        every(predicate: (value: Product, index: number, array: Product[]) => unknown, thisArg?: any): boolean;
        some(predicate: (value: Product, index: number, array: Product[]) => unknown, thisArg?: any): boolean;
        forEach(callbackfn: (value: Product, index: number, array: Product[]) => void, thisArg?: any): void;
        map<U>(callbackfn: (value: Product, index: number, array: Product[]) => U, thisArg?: any): U[];
        filter<S_1 extends Product>(predicate: (value: Product, index: number, array: Product[]) => value is S_1, thisArg?: any): S_1[];
        filter(predicate: (value: Product, index: number, array: Product[]) => unknown, thisArg?: any): Product[];
        reduce(callbackfn: (previousValue: Product, currentValue: Product, currentIndex: number, array: Product[]) => Product): Product;
        reduce(callbackfn: (previousValue: Product, currentValue: Product, currentIndex: number, array: Product[]) => Product, initialValue: Product): Product;
        reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: Product, currentIndex: number, array: Product[]) => U_1, initialValue: U_1): U_1;
        reduceRight(callbackfn: (previousValue: Product, currentValue: Product, currentIndex: number, array: Product[]) => Product): Product;
        reduceRight(callbackfn: (previousValue: Product, currentValue: Product, currentIndex: number, array: Product[]) => Product, initialValue: Product): Product;
        reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: Product, currentIndex: number, array: Product[]) => U_2, initialValue: U_2): U_2;
        find<S_2 extends Product>(predicate: (this: void, value: Product, index: number, obj: Product[]) => value is S_2, thisArg?: any): S_2;
        find(predicate: (value: Product, index: number, obj: Product[]) => unknown, thisArg?: any): Product;
        findIndex(predicate: (value: Product, index: number, obj: Product[]) => unknown, thisArg?: any): number;
        fill(value: Product, start?: number, end?: number): Product[];
        copyWithin(target: number, start: number, end?: number): Product[];
        entries(): IterableIterator<[number, Product]>;
        keys(): IterableIterator<number>;
        values(): IterableIterator<Product>;
        includes(searchElement: Product, fromIndex?: number): boolean;
        flatMap<U_3, This = undefined>(callback: (this: This, value: Product, index: number, array: Product[]) => U_3 | readonly U_3[], thisArg?: This): U_3[];
        flat<A, D extends number = 1>(this: A, depth?: D): FlatArray<A, D>[];
        [Symbol.iterator](): IterableIterator<Product>;
        [Symbol.unscopables](): {
            copyWithin: boolean;
            entries: boolean;
            fill: boolean;
            find: boolean;
            findIndex: boolean;
            keys: boolean;
            values: boolean;
        };
        at(index: number): Product;
    };
    getSingleProduct(productID: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
    updateProduct(productID: string, title: string, desc: string, price: number): void;
    deleteProduct(prodId: string): void;
    private findProduct;
}