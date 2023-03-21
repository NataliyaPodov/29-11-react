export type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone',
        type: 'Phone',
        capacity: '256',
        price: 1500,
        image: "/images/iphone-purple.jpg"
    },
   

    {
        id: 2,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'Phone',
        capacity: '128',
        price: 1000,
        image: "/images/iphone-gold.jpg"

    },

    {
        id: 3,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'Phone',
        capacity: '64',
        price: 500,
        image: "/images/iphone-red.jpg"

    },

    {
        id: 4,
        title: 'iPhone 14 Pro MAX',
        description: 'This is iPhone 14 Pro MAX',
        type: 'Phone',
        capacity: '128',
        price: 1000,
        image: "/images/iphone-blue.jpg"

    },

    {
        id: 5,
        title: 'iPhone 11',
        description: 'This is iPhone 11',
        type: 'Phone',
        capacity: '64',
        price: 500,
        image: "/images/iphone-silver.jpg"

    },

    {
        id: 6,
        title: 'iPhone X',
        description: 'This is iPhone X',
        type: 'Phone',
        capacity: '512',
        price: 1000,
        image: "/images/iphone-black.jpg"

    },
    
]

export const getProductsObject = (array: Product[]) => array.reduce(
    (object, product) => ({
        ...object,
        [product.id]: product,
    }),
    {}
)

export default productsArray