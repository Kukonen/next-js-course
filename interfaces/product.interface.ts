export interface ProductCharteristic {
    value: string;
    name: string;
}

export interface ReviewModel {
    _id: string;
    name: string;
    title: string;
    description: string;
    ration: number;
    createdAt: Date;
}

export interface ProductModel {
    _id: string;
    categories: string[];
    tags: string[];
    title: string;
    link: string;
    price: number;
    credit: number;
    oldPrice: number;
    description: string;
    charteristics: ProductCharteristic[];
    createdAt: Date;
    updatedAt: Date;
    image: string;
    initialrating: number;
    reviews: ReviewModel[];
    reviewCount: number;
    reviewAvg: number;
    advantages: string;
}