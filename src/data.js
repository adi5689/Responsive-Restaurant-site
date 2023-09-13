// import BG from './assets/images/background_img.png';
// import Img1 from './assets/images/img1.png';
import Menu1 from './assets/images/menu-1.png';
import Menu2 from './assets/images/menu-2.png';
import Menu3 from './assets/images/menu-3.png';
import Menu4 from './assets/images/menu-4.png';
import Menu5 from './assets/images/menu-5.png';
import Menu6 from './assets/images/menu-6.png';
import Product1 from './assets/images/product-1.png';
import Product2 from './assets/images/product-2.png';
// import Product3 from './assets/images/product-3.png';
import CartItem1 from './assets/images/cart-item-1.png';
import CartItem2 from './assets/images/cart-item-2.png';
import CartItem3 from './assets/images/cart-item-3.png';
import CartItem4 from './assets/images/cart-item-4.png';
import BlogItem1 from './assets/images/blog-img-1.png';
import BlogItem2 from './assets/images/blog-img-2.png';
import BlogItem3 from './assets/images/blog-img-3.png';
import Review from './assets/images/review.png';

const menu = [
    {
        id: 1,
        img: Menu1,
        name: 'Happy Meal Combo!',
        price: '₹350',
        mrp: '₹370'
    },
    {
        id: 2,
        img: Menu2,
        name: 'Nuggets Combo',
        price: '₹289',
        mrp: '₹300',
    },
    {
        id: 3,
        img: Menu3,
        name: 'Nuggets',
        price: '₹99',
        mrp: '₹120'
    },
    {
        id: 4,
        img: Menu4,
        name: 'Pizza',
        price: '₹79',
        mrp: '₹99'
    },
    {
        id: 5,
        img: Menu5,
        name: 'Tacos Combo',
        price: '₹139',
        mrp: '₹170',
    },
    {
        id: 6,
        img: Menu6,
        name:'Coffee',
        price: '₹49',
        mrp: '₹80',
    }
];

const cart1 = [
    {
        id: 1,
        name: 'Burger',
        img: CartItem1,
        price: '₹ 59',
    },
    {
        id: 2,
        name: 'Nuggets',
        img: CartItem2,
        price: '₹ 99',
    },
    {
        id: 3,
        name: 'Nuggets and Fries Combo',
        img: CartItem3,
        price: '₹ 189',
    },
    {
        id: 4,
        name: 'Tacos Combo',
        img: CartItem4,
        price: '₹139'
    }
];

const product = [
    {
        id:1,
        img: Product1,
        name: 'Burger',
        price: '₹59',
        mrp: '₹90',
    },
    {
        id: 2,
        img: Product2,
        name: 'Ice-Cream',
        price: '₹79',
        mrp: '₹99',
    },
    {
        id: 3,
        img: Menu6,
        name: 'Coffee',
        price: '₹49',
        mrp: '₹80',
    }
];

const review = [
    {
        id: 1,
        img: Review,
        name: 'Dinesh',
        para:'Good Service with proper hygiene and tasty food. A fav one!',
    },
    {
        id: 2,
        img: Review,
        name: 'Ricky',
        para: 'Really delicious dishes with good collection of items in menu.',
    },
    {
        id: 3,
        img: Review,
        name:'Dwarka',
        para: 'Solid and healthy food with a wide range of dishes and variety of choices.',
    }
];

const blog = [
    {
        id: 1,
        title: 'Exploring the Culinary Delights of Our Mediterranean Menu',
        wd: 'By Dinesh / 20th Sept, 2000',
        img: BlogItem1,
        para: 'Indulge your taste buds in a Mediterranean journey like no other at our restaurant. Our menu offers a tantalizing.',
    },
    {
        id: 2,
        title: 'From Farm to Table: The Importance of Local Sourcing',
        wd: 'By Ricky / 31st May,2000',
        img: BlogItem3,
        para: 'At K2, we believe that great food starts with fresh ingredients. In this blog post, we delve into our commitment.',
    },
    {
        id: 3,
        title: 'The Art of Pairing: Wine and Dine at K2',
        wd: 'By Muskan / 31st Dec,2000',
        img: BlogItem2,
        para: "Wine and food have a special relationship, and at K2, we take pride in curating an exceptional dining experience.",
    }
]; 

export { menu, cart1, product, review, blog };