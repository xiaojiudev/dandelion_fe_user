import { type } from "os";


type Products = {
    content: ProductDetails[],
    lastPage: boolean,
    pageNumber: number,
    pageSize: number,
    totalElements: number,
    totalPages: number,
}

type ProductDetails = {
    id: number
    name: string,
    weight: number,
    quantity: number,
    price: number,
    description: string,
    information: string,
    tag: string,
    category: string,
    media_url: string,
}


type Wards = {
    name: string,
    code: number,
    codename: string,
    division_type: string,
    short_codename: string,
}

type Districts = {
    name: string,
    code: number,
    codename: string,
    division_type: string,
    short_codename: string,
    wards: Wards[],
}

type Provinces = {
    name: string,
    code: number,
    division_type: string,
    codename: string,
    phone_code: number,
    districts: Districts[],
};



