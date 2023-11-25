export const navLinks = [
  {
    link: 'about',
    name: '01.About'
  },
  {
    link: 'projects',
    name: '02.Projects'
  },
  {
    link: 'contact',
    name: '03.Contact'
  }
]

export const h1 = {
  nameTop: [
    {name:'H', id:'1'},{name:'i', id:'2'},{name:',', id:'3'},
  ],

  nameLeft: [
    {name:'I', id:'4'},{name:'m', id:'5'},{name:'S', id:'6'},{name:'a', id:'7'},{name:'e', id:'8'},{name:'e', id:'9'},{name:'d', id:'10'},{name:'.', id:'11'}
  ],
  
  nameRight: [
    {name:'W', id:'1'},{name:'e', id:'2'},{name:'b', id:'3'},{name:'D', id:'4'},{name:'e', id:'5'},{name:'v', id:'6'},{name:'e', id:'7'},{name:'l', id:'8'},{name:'o', id:'9'},{name:'p', id:'10'},{name:'e', id:'11'},{name:'r', id:'12'}
  ]

}

import AjorPlus from '../assets/images/Ajorplushdash.png'
import amashop from '../assets/images/amashop.jpg'

export const projects = [
  {
    id: '1',
    img: amashop,
    name: 'اپلیکیشن فروشگاهی',
    nameE: '(Amashop)',
    dis: 'اپلیکیشن Amashop یک اپ فروشگاهی front-end است که دارای ui کاملا ریسپانسیو برای همه سایزها وسیله Tailwind css است و همچنین دارای state management system redux و تغیرات لحظه ای در ui است  بخش سبد خرید به صورت کامل قرار داده شده که تمام نیازهای سبد خرید یک فروشگاه رو پاسخ گو است .',
    Link : [
      {
        name: 'Github',
        path: ''
      },
      {
        name: 'view Demo',
        path: '/shop'
      }
    ],
    skill : [
      'Reactjs', 'Redux', 'Restapi', 'Express', 'Tailwind'
    ]
  },
  {
    id: '2',
    img: AjorPlus,
    name: 'اپلیکیشن شبکه اجتماعی',
    nameE: '(SMA)',
    dis: 'اپلیکیشن SMA یک شبکه اجتماعی fullstack است بخش فرانت دارای ui کاملا ریسپانسیو برای همه سایزها به وسیله Tailwind css است و همچنین دارای state management system redux و تغیرات لحظه ای در ui است و از rest-api جهت ارتباط با بک اند استفاده میکند بک اند با ساخته شده و Node JS و Express Js و mysql database دارای امکان signup و login و logout ساخت پست لایک کردن و اضافه کردن کامنت برای پست ها توسط همه کاربران به صورت کاملا جداگانه امکان ارسال پیام و follow و unfollow کردن و مشاهده پروفایل همه کاربران',
    Link : [
      {
        name: 'Github',
        path: ''
      },
      {
        name: 'view Demo',
        path: '/sma'
      }
    ],
    skill : [
      'Reactjs', 'Redux', 'Mysql', 'Tailwind' 
    ]
  }
]

import express from '../assets/images/express.png'
import html5 from '../assets/images/html5.png'
import css3 from '../assets/images/css3.png'
import javascript from '../assets/images/javascript.png'
import react from '../assets/images/react.png'
import redux from '../assets/images/redux.png'
import tailwind from '../assets/images/tailwind.png'
import restapi from '../assets/images/restapi.png'
import next from '../assets/images/next.png'
import node from '../assets/images/node.png'
import mongodb from '../assets/images/mongodb.png'
import mysql from '../assets/images/mysql.png'

export const skill = [
  {
   name: 'Html5',
   img: html5 
  },
  {
   name: 'Css3',
   img: css3 
  },
  {
   name: 'Tailwind',
   img: tailwind 
  },
  {
   name: 'Javascript',
   img: javascript 
  },
  {
   name: 'ReactJs',
   img: react 
  },
  {
   name: 'NextJs',
   img: next 
  },
  {
   name: 'Redux',
   img: redux 
  },
  {
    name: 'Rest-api',
    img: restapi 
  },
  {
   name: 'NodeJs',
   img: node 
  },
  {
   name: 'ExpressJs',
   img: express 
  },
  {
   name: 'mysql',
   img: mysql 
  },
  {
   name: 'mongodb',
   img: mongodb 
  }
]