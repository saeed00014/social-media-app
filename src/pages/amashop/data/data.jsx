import {TbDiscount} from 'react-icons/tb'
import {AiFillShop} from 'react-icons/ai'
import {AiOutlineFire} from 'react-icons/ai'
import {AiFillAmazonCircle} from 'react-icons/ai'
import {BiShoppingBag} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'

export const navLink = [
  {
    name: 'دسته‌بندی کالاها',
    path: '/shop',
    icon: <GiHamburgerMenu />
  },
  {
    name: 'شگفت‌انگیزها',
    path: '/shop',
    icon: <TbDiscount />
  },
  {
    name: 'سوپرمارکت',
    path: '/shop',
    icon: <BiShoppingBag />
  },
  {
    name: 'پرفروش‌ترین‌ها',
    path: '/shop',
    icon: <AiOutlineFire />
  },
  {
    name: 'دریافت نمایندگی',
    path: '/shop',
    icon: <AiFillShop />
  },
  {
    name: 'درباره ما',
    path: '/shop',
    icon: <AiFillAmazonCircle />
  }
]

import {TbCategory} from 'react-icons/tb'
import {BiSolidCategory} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {GoPerson} from 'react-icons/go'
import {BsFillPersonFill} from 'react-icons/bs'
import {RiShoppingCartLine} from 'react-icons/ri'
import {RiShoppingCart2Fill} from 'react-icons/ri'

export const navLinkPhone = [
  {
    ename: 'shop',
    name: 'خانه',
    path: '/shop',
    icon: <AiOutlineHome />,
    activeIcon: <AiFillHome />
  },
  {
    ename: 'category',
    name: 'دسته‌بندی',
    path: '/shop/category',
    icon: <TbCategory />,
    activeIcon: <BiSolidCategory />
  },
  {
    ename: 'card',
    name: 'سبد خرید',
    path: '/shop/card',
    icon: <RiShoppingCartLine />,
    activeIcon: <RiShoppingCart2Fill />
  },
  {
    ename: 'myama',
    name: 'آمای من',
    path: '/shop/myama',
    icon: <GoPerson />,
    activeIcon: <BsFillPersonFill />
  }
]

import header1 from '../assets/images/header1.webp'
import header2 from '../assets/images/header2.webp'
import header3 from '../assets/images/header3.webp'
import header4 from '../assets/images/header4.webp'
import header5 from '../assets/images/header5.webp'
import header6 from '../assets/images/header6.webp'

export const headerImg = [
  {
    index: 1,
    img: header1 
  },
  {
    index: 2,
    img: header2 
  },
  {
    index: 3,
    img: header3 
  },
  {
    index: 4,
    img: header4 
  },
  {
    index: 5,
    img: header5 
  },
  {
    index: 6,
    img: header6 
  }
]

import product1 from '../assets/images/product1.webp'
import product2 from '../assets/images/product2.webp'
import product3 from '../assets/images/product3.webp'
import product4 from '../assets/images/product4.webp'
import product5 from '../assets/images/product5.webp'
import product6 from '../assets/images/product6.webp'
import product7 from '../assets/images/product7.webp'
import product8 from '../assets/images/product8.webp'
import product9 from '../assets/images/product9.webp'
import product10 from '../assets/images/product10.webp'

export const productInfo = [
  {
    id: 1,
    img: product1,
    category: 'گیمینگ',
    type: 'هدست',
    model: ' هدست تسکو',
    title: 'هدست مخصوص بازی تسکو مدل TH 5124',
    isAvailable: false,
    remaining: '',
    rate: 4.4,
    rateCount: 2500,
    price: 950000,
    discountPrecent: 0,
  },
  {
    id: 2,
    img: product2,
    category: 'الکتریکی',
    type: 'کنسول بازی',
    model: 'Playstation 5',
    title: 'کنسول بازی سونی مدل Playstation 5 سری 1216A ظرفیت 825 گیگابایت',
    isAvailable: true,
    remaining: '4',
    rate: 4.9,
    rateCount: 2500,
    price: 25000000,
    discountPrecent: 3,
  },
  {
    id: 3,
    img: product3,
    category: 'زیبایی',
    type: 'زیبایی',
    model: 'ضد آفتاب مای',
    title: 'فلوئید ضد آفتاب مای مدل Hyaluronic Acid حجم 50 میلی لیتر',
    isAvailable: true,
    remaining: '1',
    rate: 1.3,
    rateCount: 2500,
    price: 100000,
    discountPrecent: 15,
  },
  {
    id: 4,
    img: product4,
    category: 'موبایل',
    type: 'موبایل',
    model: 'Galaxy A13',
    title: 'گوشی موبایل سامسونگ مدل Galaxy A13 دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت به همراه شارژر',
    isAvailable: true,
    remaining: '',
    rate: 3.5,
    rateCount: 2500,
    price: 12500000,
    discountPrecent: 1,
  },
  {
    id: 5,
    img: product5,
    category: 'گیمینگ',
    type: 'هدست',
    model: 'K19 هدفون',
    title: 'هدفون مخصوص بازی اونیکوما مدل K19',
    isAvailable: true,
    remaining: '',
    rate: 2.3,
    rateCount: 2500,
    price: 1975000,
    discountPrecent: 0,
  },
  {
    id: 6,
    img: product6,
    category: 'الکتریکی',
    type: 'لپتاب',
    model: 'لپ تاپ MacBook',
    title: 'لپ تاپ 13.3 اینچی اپل مدل MacBook Air MGN63 2020',
    isAvailable: false,
    remaining: '',
    rate: 2.5,
    rateCount: 2500,
    price: 20000000,
    discountPrecent: 10,
  },
  {
    id: 7,
    img: product7,
    category: 'زیبایی',
    type: 'زیبایی',
    model: 'ادو ورساچه',
    title: 'ادو پرفیوم زنانه نیفتی مدل ورساچه ورسوز حجم 100 میلی لیتر',
    isAvailable: true,
    remaining: '',
    rate: 4,
    rateCount: 2500,
    price: 450000,
    discountPrecent: 20,
  },
  {
    id: 8,
    img: product8,
    category: 'موبایل',
    type: 'قلم',
    model: '',
    title: 'این محصول را بخرید',
    isAvailable: true,
    remaining: '',
    rate: .5,
    rateCount: 320,
    price: 300000,
    discountPrecent: 35,
  },
  {
    id: 9,
    img: product9,
    category: 'لباس و پوشاک',
    type: 'کفش',
    model: '204 Fili',
    title: 'کفش پیاده روی کفش سعیدی مدل 204Fili',
    isAvailable: true,
    remaining: '',
    rate: 4.1,
    rateCount: 25,
    price: 3950000,
    discountPrecent: 11,
  },
  {
    id: 10,
    img: product10,
    category: 'الکتریکی',
    type: 'لپتاب OMEN',
    model: 'OMEN',
    title: 'لپ تاپ 16.1 اینچی اچ‌پی مدل OMEN 16-B0001-i7 32GB 1TB 3070',
    isAvailable: true,
    remaining: '5',
    rate: 5,
    rateCount: 2500,
    price: 35000000,
    discountPrecent: 2,
  }
]

import category9 from '../assets/images/category9.jpg'
import category1 from '../assets/images/category1.jpg'
import category2 from '../assets/images/category2.jpg'
import category3 from '../assets/images/category3.jpg'
import category4 from '../assets/images/category4.jpg'
import category5 from '../assets/images/category5.jpg'
import category6 from '../assets/images/category6.jpg'
import category7 from '../assets/images/category7.jpg'
import category8 from '../assets/images/category8.jpg'

export const categoryCard = [
  {
    title: 'گوشی موبایل',
    img: category9,
    moreButton: ''
  },
  {
    title: 'مد و پوشاک',
    img: category1,
    moreButton: ''
  },
  {
    title: 'اسباب بازی، کودک و نوزاد',
    img: category6,
    moreButton: ''
  },
  {
    title: 'ابزار آلات و تجهیزات',
    img: category8,
    moreButton: ''
  },
  {
    title: 'کالای دیجیتال',
    img: category3,
    moreButton: ''
  },
  {
    title: 'زیبایی و سلامت',
    img: category5,
    moreButton: ''
  },
  {
    title: 'ورزش',
    img: category4,
    moreButton: ''
  },
  {
    title: 'خانه و آشپزخانه',
    img: category7,
    moreButton: ''
  },
  {
    title: 'کتاب، لوازم تحریر و هنر',
    img: category2,
    moreButton: ''
  }
]

export const footer = [
  {
    title: 'دسترسی سریع',
    link : [
     ' تماس با ما',
     ' نصب اپلیکیشن',
     ' پرسش و پاسخ متداول',
     ' فروش سازمانی',
     ' فروش آما کارت',
     ' فروش انبوه (کالا)',
     ' مجله آما',
    ]
  },
  {
    title: 'درباره آما ',
    link : [
     ' درباره ما',
     ' فروشگاه ها',
     ' اخبار',
     ' اعضاء هیئت مدیره',
     ' کمیته‌های تخصصی',
     ' امور سهام'
    ]
  },
  {
    title: 'همکاری با ما',
    link : [
     ' کارمند فروشگاه',
     ' مشاغل حوزه انبار',
     ' فرصت های شغلی',
     ' دریافت نمایندگی (فرانچایز)',
    ]
  },
  {
    title: 'همراه ما باشید!',
    link : [
      'https://www.instagram.com/digikalacom/',
      'https://twitter.com/digikalacom',
      'https://www.linkedin.com/company/digikala/mycompany/',
      'https://www.aparat.com/digikala/'
    ]
  }
]