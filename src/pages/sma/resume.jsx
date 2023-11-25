import React from 'react'

import { IoIosCall } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";


const Resume = () => {
  const num = 'شماره'
  const number = '09010276284'
  const website = 'https://saeedwebdev.ir'
  const github = 'github.com/saeed00014'
  const email = 'saeedm00014@gmail.com'
  const skillsF = [
    'Html5',
    'Css3',
    'TailWind Css',
    'JavaScript',
    'React JS',
    'Next JS',
    'Redux',
    'Rest-api',
  ]
  const skillsB = [
    'Node JS',
    'Express JS',
    'sql&nosql Databases',
    'mysql',
    'mongodb',
  ]
  const skillsT = [
    'Git&GitHub',
    'postman',

  ]
  return (
    <section className='flex flex-col items-center w-screen h-screen '>
      <div className='flex flex-col items-center w-full h-[1000px] px-8 max-w-[735px] overflow-y-scroll gap-2'>
        <div className='flex w-full justify-between max-w-[735px]'>
          <div className='flex justify-center items-center gap-3'>
            <span className='text-[1.6rem]'>محمد حسین سعید</span>
            <span className='text-[1rem] mt-2'>برنامه نویس وب</span>
          </div>
          <a href='https://saeedwebdev.ir' target='_blank' className='flex items-center justify-center w-fit gap-2 text-[1rem] cursor-pointer'>
            <span className='text-black text-[1.3rem]'>
              {website}
            </span>
            <span className='text-[1.3rem] pt-[.2rem]'>
              <CgWebsite />
            </span>
          </a>
        </div>
        <div className='flex flex-wrap justify-between w-full max-w-[735px] mt-1'>
          <button className='flex items-center justify-center w-fit gap-2 text-[1rem] cursor-pointer'>
            <span className='text-black'>
              {number}
            </span>
            <span className='text-[1.3rem]'>
              <IoIosCall />
            </span>
          </button>
          <a href='https://github.com/saeed00014' target='_blank' className='flex items-center justify-center w-fit gap-2 text-[1rem] cursor-pointer'>
            <span className='text-black'>
              {github}
            </span>
            <span className='text-[1.3rem] pt-[.1rem]'>
              <FaGithub />
            </span>
          </a>
          <button className='flex items-center justify-center w-fit gap-2 text-[1rem] cursor-pointer'>
            <span className='text-black'>
              {email}
            </span>
            <span className='text-[1.3rem] pt-[.1rem]'>
              <MdEmail />
            </span>
          </button>
        </div>
        <div className='flex items-center w-full gap-2'>
          <span className='text-[1.2rem] min-w-max'>محل سکونت :</span>
          <span className='mt-[.1rem]'>اصفهان خیابان جابر انصاری خیابان پنج آذر  کوچه شریف</span>
        </div>
        <div className='flex flex-col items-center w-full max-w-[735px] gap-4'>
          <div className='flex items-end w-full text-[1.3rem] gap-1'>
            <span className='min-w-max'>مهارت ها</span>
            <span className='mb-1 max-w-[735px] overflow-x-hidden'>_____________________________________________________________________________________</span>
          </div>
          <div className='flex flex-col items-center w-full max-w-[735px]'>
            <div className='flex justify-between items-center w-full gap-2'>
              <div className='flex flex-row-reverse flex-wrap justify-around w-full gap-4'>
                {skillsF.map((skill) => {
                  return (
                    <div className='relative overflow-x-hidden text-[.9rem]'>
                      <span className='flex flex-col'>
                        {skill}
                        <span className='absolute -bottom-[.23rem]'>_____________</span>
                      </span>
                    </div>
                  )
                })}
              </div>
              <span style={{direction: 'initial'}} className='text-[1.2rem] min-w-max'>Front-End : </span>
            </div>
            <div className='flex justify-between items-center w-full mt-3 gap-2'>
              <div className='flex flex-row-reverse w-full gap-4'>
                {skillsB.map((skill) => {
                  return (
                    <div className='relative overflow-x-hidden text-[.9rem]'>
                      <span className='flex flex-col'>
                        {skill}
                        <span className='absolute -bottom-[.23rem]'>_________________________</span>
                      </span>
                    </div>
                  )
                })}
              </div>
                <span style={{direction: 'initial'}} className='text-[1.2rem] min-w-max'>Back-End :</span>
            </div>
            <div className='flex items-center justify-end w-full mt-3 gap-2'>
              <div className='relative flex overflow-x-hidden'>
                <span className='text-[1rem] min-w-max'>تسلط کامل بر زبان انگلیسی</span>
                <span className='absolute -bottom-[.23rem]'>__________________________________</span>
              </div>
              <span style={{direction: 'initial'}} className='text-[1.2rem] min-w-max ml-4'>Langueges :</span>
              <div className='flex flex-row-reverse gap-4'>
                {skillsT.map((skill) => {
                  return (
                    <div className='relative overflow-x-hidden text-[.9rem]'>
                      <span className='flex flex-col'>
                        {skill}
                        <span className='absolute -bottom-[.2rem]'>_____________</span>
                      </span>
                    </div>
                  )
                })}
              </div>
              <span style={{direction: 'initial'}} className='text-[1.2rem] min-w-max'>Tools :</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center w-full max-w-[735px]'>
          <div className='relative flex items-center w-full text-[1.3rem] gap-1'>
            <span className='min-w-max'> انتظارات شغلی</span>
            <span className='mb-1 max-w-[735px] overflow-x-hidden'>________________________________________________________________________________________________</span>
          </div>
          <p className='w-full text-[1rem] mt-2'>به دنبال یک شغل تمام وقت حضوری به عنوان برنامه نویس وب فرانت اند و بک اند هستم .</p>
        </div>
        <div className='flex flex-col items-center w-full max-w-[735px]'>
          <div className='relative flex items-center w-full text-[1.3rem] gap-1'>
            <span className='min-w-max'>تجربه های مرتبط</span>
            <span className='mb-1 max-w-[735px] overflow-x-hidden'>______________________________________________________________________________________________</span>
          </div>
          <ul className='felx justify-start gap-1 w-full [&>*]:w-full [&>*]:text-[1rem] [&>*]:mt-1 mt-2 pr-5 list-disc'>
            <li>
              <span>تجربه کار گروهی در پروژه های حضوری و فریلنسینگ در حوزه بک اند و فرانت اند وب</span>
            </li>
            <li>
              <span>تسلط بر طراحی database و ایجاد relationship(طراحی رابطه ای) </span>
            </li>
            <li>
              <span>تجربه کار گروهی با دیزاینرها و کد زدن </span>
              <span>ui</span>
              <span>&nbsp;</span>
              <span>به صورت کاملا ریسپانسیو و بر اساس</span>
              <span>&nbsp;</span>
              <span>Figma Design</span>
            </li>
            <li>
              <span>تجربه ایجاد اپلیکیشن های </span>
              <span>fullstack</span>
              <span>&nbsp;</span>
              <span>وب و دیپلوی کردن آنها بر روی هاست</span>
            </li>
            <li>
              <span>تجربه ساخت و کار با</span>
              <span>&nbsp;</span>
              <span>Reuseble Components در React JS</span>
              <span>&nbsp;</span>
              <span>و بهینه سازی اپلیکیشن با استفاده مناسب از React Hooks و Clean Code</span>
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-center w-full max-w-[735px] gap-2'>
          <div className='relative flex items-center w-full text-[1.3rem] gap-1'>
            <span className='min-w-max'>پروژه های شخصی</span>
            <span className='mb-1 max-w-[735px] overflow-x-hidden'>______________________________________________________________________________________________</span>
          </div>
          <div className='flex flex-col w-full'>
            <div className='flex justify-between'>
              <div className='flex text-[1.2rem]'>
                <span>اپلیکیشن شبکه اجتماعی</span>
                <span>(SMA)</span>
              </div>
              <div className='flex gap-4'>
                <a href='https://github.com/saeed00014/sma' target='_blank' className='flex items-center justify-center w-fit gap-1 text-[.9rem] cursor-pointer'>
                  <span className='text-black'>
                    saeed00014/sma
                  </span>
                  <span className=''>
                    <FaGithub />
                  </span>
                </a>
                <a target='_blank' href="https://saeedwebdev.ir/sma" className='flex text-[.9rem] gap-1 pt-[.15rem]'>
                  <span>
                    saeedwebdev.ir/sma
                  </span>
                  <span className='pt-[.25rem]'>
                    <CgWebsite />
                  </span>
                </a>
              </div>
            </div>
            <div className='felx gap-1 [&>*]:w-full [&>*]:text-[1rem] mt-2'>
              <span>اپلیکیشن fullstack SMA است بخش فرانت دارای ui کاملا ریسپانسیو برای همه سایزها به وسیله Tailwind css است و همچنین دارای state management system redux و تغیرات لحظه ای در ui است و از rest-api جهت ارتباط با بک اند استفاده میکند بک اند با ساخته شده و Node JS و Express Js و mysql database دارای امکان signup و login و logout ساخت پست لایک کردن و اضافه کردن کامنت برای پست ها توسط همه کاربران به صورت کاملا جداگانه امکان ارسال پیام و follow و unfollow کردن و مشاهده پروفایل همه کاربران</span> 
            </div>
          </div>
          <div className='flex flex-col w-full mt-1'>
            <div className='flex justify-between'>
              <div className='flex text-[1.2rem]'>
                <span>اپلیکیشن فروشگاهی</span>
                <span>(Amashop)</span>
              </div>
              <div className='flex gap-4'>
                <a href='https://github.com/saeed00014/amashop' target='_blank' className='flex items-center justify-center w-fit gap-1 text-[.9rem] cursor-pointer'>
                  <span className='text-black'>
                    <span>
                      saeed00014/amashop
                    </span>
                  </span>
                  <span className='pt-[.1rem]'>
                    <FaGithub />
                  </span>
                </a>
                <a target='_blank' href="https://saeedwebdev.ir/amashop" className='flex text-[.9rem] gap-1 pt-1'>
                  <span>
                    saeedwebdev.ir/amashop
                  </span>
                  <span className='pt-[.2rem]'>
                    <CgWebsite />
                  </span>
                </a>
              </div>
            </div>
            <div className='felx gap-1 [&>*]:w-full [&>*]:text-[1rem] mt-2'>
              <span>اپلیکیشن Amashop یک اپ فروشگاهی front-end است که دارای ui کاملا ریسپانسیو برای همه سایزها وسیله Tailwind css است و همچنین دارای state management system redux و تغیرات لحظه ای در ui است  بخش سبد خرید به صورت کامل قرار داده شده که تمام نیازهای سبد خرید یک فروشگاه رو پاسخ گو است .</span>
            </div>
          </div>
          <div className='flex flex-col w-full mt-1'>
            <div className='flex justify-between'>
              <div className='flex text-[1.2rem]'>
                <span>سایت شخصی</span>
                <span>(saeed portfolio)</span>
              </div>
              <div className='flex gap-4'>
                <a href='https://github.com/saeed00014/portfolio' target='_blank' className='flex items-center justify-center w-fit gap-1 text-[.9rem] cursor-pointer'>
                  <span className='text-black'>
                    saeed00014/portfolio
                  </span>
                  <span className='pt-[.1rem]'>
                    <FaGithub />
                  </span>
                </a>
                <a href='https://saeedwebdev.ir' target='_blank' className='flex items-center justify-center w-fit gap-1 text-[.9rem] cursor-pointer'>
                  <span className='text-black'>
                    saeedwebdev.ir
                  </span>
                  <span className='pt-[.15rem]'>
                    <CgWebsite />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between items-center w-full gap-2'>
          <div className='flex items-end w-full text-[1.3rem] gap-1'>
            <span className='min-w-max'>اطلاعات اضافه</span>
            <span className='mb-1 max-w-[735px] overflow-x-hidden'>_____________________________________________________________________________________</span>
          </div>
          <div className='flex w-full gap-6'>
            <div className='flex text-[1.1rem] gap-2'>
              <span>تحصیلات :</span>
              <span className='text-[1rem]'>دیپلم ریاضی فیزیک</span>
            </div>
            <div className='flex text-[1.1rem] gap-2'>
              <span>
وضعیت نظام وظیفه :</span>
              <span className='text-[1rem]'>پایان خدمت</span>
            </div>
            <div className='flex text-[1.1rem] gap-2'>
              <span>سن :</span>
              <span className='text-[1rem] mt-[.2rem]'>21 سال</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume