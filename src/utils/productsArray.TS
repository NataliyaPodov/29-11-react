type Product = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const productsArray: Product[] = [
    {
        title: 'iPhone 14 Pro',
        description: 'This is iPhone',
        type: 'Phone',
        capacity: '256',
        price: 1500,
    },
   

    {
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'Phone',
        capacity: '128',
        price: 1000,
    },

    {
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'Phone',
        capacity: '64',
        price: 500,
    },

    {
        title: 'iPhone 14 Pro MAX',
        description: 'This is iPhone 14 Pro MAX',
        type: 'Phone',
        capacity: '128',
        price: 1000,
    },

    {
        title: 'iPhone 11',
        description: 'This is iPhone 11',
        type: 'Phone',
        capacity: '64',
        price: 500,
    },

    {
        title: 'iPhone X',
        description: 'This is iPhone X',
        type: 'Phone',
        capacity: '512',
        price: 1000,
    },
    
]

export default productsArray