export interface Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    imageUrl: string;
    Level1Id: number;

}

export interface Level1Category {
    id: number;
    name: string;
    colorCode: string; 
}
// export interface Level3Category {
//     id: number;
//     name: string;
//     Level2Id: number;
// }
// export interface Level2Category {
//     id: number;
//     name: string;
//     Level1Id: number;
// }