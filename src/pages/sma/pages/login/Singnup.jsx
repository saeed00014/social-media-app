import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { selectOptionsMounths } from '../../assets/data/data'
import { BiSolidErrorAlt } from 'react-icons/bi'
import { signup } from '../../services/user'
import { setToken } from '../../store/UiSlice'

const Signup = ({setShowSignUp}) => {
  const ref = useRef()
  const dispatch = useDispatch()
  const [firstNameS, setFirstNameS] = useState(false)
  const [lastNameS, setLastNameS] = useState(false)
  const [emailS, setEmailS] = useState(false)
  const [usernameS, setUsernameS] = useState(false)
  const [birthS, setBirthS] = useState(false)
  const [genderS, setGenderS] = useState(false)
  const [passwordS, setPasswordS] = useState(false)
  const [confirmPasswordS, setConfirmPasswordS] = useState(false)
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState(false)
  const [ru, setRu] = useState('')
  const [re, setRe] = useState('')

  const handleSubmit = (e, text) => {
    e.preventDefault()
    const target = e.target.name
    const firstName = ref.current.firstName.value
    const lastName = ref.current.lastName.value
    const email = ref.current.email.value
    const username = ref.current.username.value
    const days = ref.current.days.value
    const mounths = ref.current.mounths.value
    const years = ref.current.years.value
    const gender = ref.current.gender.value
    const password = ref.current.password.value
    const confirmPassword = ref.current.confirmPassword.value
    const url = 'http://127.0.0.1:8000/api/auth/signup'
    if(text == 'submit') {
      if(password == confirmPassword) { setConfirmPasswordMessage(false) }
      if(password !== confirmPassword) { setConfirmPasswordMessage(true) }
      if(firstName == '') { setFirstNameS(true) }
      if(lastName == '') { setLastNameS(true) }
      if(email.length < 3 || email.length > 25  || !email.includes('@')) { setEmailS(true) }
      if(username.length < 3 || username.length > 15) { setUsernameS(true) }
      if(password.length < 8 || password.length > 18) { setPasswordS(true) }
      if(confirmPassword == '') { setConfirmPasswordS(true) }
      if(gender == '' || gender == 'off') { setGenderS(true) }
      if(years >= 1384) { setBirthS(true) }
      if((password == confirmPassword) && !firstNameS && !lastNameS && !emailS && !passwordS && (gender == 'male' || gender == 'female') && years < 1384) {
        async function tokenMaker() {
          const data = await signup(url, firstName, lastName, email, username, days, mounths, years, gender, password)
          if(data) {
            if(data.ru !== '' && data.re !== '') {
              setRu(data.ru)
              setRe(data.re)
            }
            if(data.ru !== '') {
              setRu(data.ru)
            }
            if(data.re !== '') {
              setRe(data.re)
            }
            if(data.user && data.token) {
              localStorage.setItem('token', data.token)
              localStorage.setItem('user', JSON.stringify([data.user]))
              location.reload()
            }
          }
        }
        tokenMaker()
      }
    }

    if(target == 'firstName') {
      if(firstName == '') { setFirstNameS(true) }
      if(firstName !== '') { setFirstNameS(false) }
    }

    if(target == 'lastName' ) {
      if(lastName == '') { setLastNameS(true) }
      if(lastName !== '') { setLastNameS(false) }
    }

    if(target == 'email') {
      if(email.length <= 10 || email.length >= 25  || !email.includes('@')) { setEmailS(true) }
      if(email.length >= 10 && email.length <= 25 && email.includes('@')) { setEmailS(false) }
    }

    if(target == 'username') {
      if(username.length <= 3 || username.length >= 15) { setUsernameS(true) }
      if(username.length >= 3 && username.length <= 15) { setUsernameS(false) }
    }

    if(target == 'password') {
      if(password.length <= 8 || password.length >= 18) { setPasswordS(true) }
      if(password.length >= 8 && password.length <= 18) { setPasswordS(false) }
    }

    if(target == 'confirmPassword') {
      if(confirmPassword == '') { setConfirmPasswordS(true) }
      if(confirmPassword !== '') { setConfirmPasswordS(false) }
    }

    if(target == 'gender') {
      if(gender == 'off') { setGenderS(true) }
      if(gender == 'on') { setGenderS(false) }
    }

    if(target == 'years') {
      if(years >= 1384) { setBirthS(true) }
      if(years < 1384) { setBirthS(false) }
    }
  } 

  const days = []
  for (let i = 1; i <= 31; i++ ) {
    days.push(i)
  }

  const years = []
  for (let i = 1402; i >= 1302; i-- ) {
    years.push(i)
  }

  return (  
    <form onSubmit={(e) => handleSubmit(e, 'submit')} ref={ref} className='flex flex-col bg-white md:gap-4 gap-3 [&>div]:relative [&>div]:flex [&>div]:items-center [&>div>input]:bg-bg-hover [&>div>input]:h-10 [&>div>input]:w-full [&>div>input]:px-2 [&>div>input]:pb-1 [&>div>i]:absolute [&>div>i]:left-2 [&>div>i]:text-text-error [&>div>i]:text-[1.3rem] [&>div>i]:cursor-pointer [&>div>div>i]:cursor-pointer shadow-3xl p-4 pt-2 w-[400px] rounded-[.5rem]'>
      <div className='flex justify-between w-full'>
        <h1 className='text-2xl pb-1'>تبت نام</h1>
        <button onClick={() => setShowSignUp(false)} className='relative flex items-center justify-center font-normal w-10 h-10 rounded-full hover:bg-bg-hover'>
          <i className='absolute w-[.1rem] h-5 rotate-45 bg-black'></i>  
          <i className='absolute w-5 h-[.1rem] rotate-45 bg-black'></i>  
        </button>
      </div>
      <div className='flex items-center w-full gap-2 [&>div]:relative [&>div]:flex [&>div]:items-center [&>div>input]:bg-bg-hover [&>div>input]:h-10 [&>div>input]:w-full [&>div>input]:px-2 [&>div>input]:pb-1 [&>div>i]:absolute [&>div>i]:left-2 [&>div>i]:text-text-error [&>div>i]:text-[1.3rem]'>
        <div>
          <input onBlur={(e) => handleSubmit(e)} onChange={(e) => handleSubmit(e)} className={`${firstNameS ? 'border-text-error border-[1px]' : ''}`} type="name" id='firstName' name='firstName' placeholder='نام'/>
          {firstNameS && 
            <i className='group'>
              <BiSolidErrorAlt />
              <span className='group-hover:flex hidden absolute -left-1 -top-6 min-w-max bg-red-600 text-white rounded-full px-2 py-[.1rem] text-[.9rem]'>باید پر شود</span>
            </i>
          }
        </div>
        <div>
          <input onBlur={(e) => handleSubmit(e)} onChange={(e) => handleSubmit(e)} className={`${lastNameS ? 'border-text-error border-[1px]' : ''}`} type="name" id='lastName' name='lastName' placeholder='نام خوانوادگی'/>
          {lastNameS && 
            <i className='group'>
              <BiSolidErrorAlt />
              <span className='group-hover:flex hidden absolute -left-1 -top-6 min-w-max bg-red-600 text-white rounded-full px-2 py-[.1rem] text-[.9rem]'>باید پر شود</span>
            </i>
          }
        </div>
      </div>
      <div className='flex flex-col justify-center'>
        <input onBlur={(e) => handleSubmit(e)} onChange={(e) => handleSubmit(e)} className={`${emailS ? 'border-text-error border-[1px]' : ''}`} type="email" id='email' name='email' placeholder='ایمیل'/>
        {emailS && 
          <i className='group'>
            <BiSolidErrorAlt />
            <span className='group-hover:flex hidden absolute -left-1 -top-6 min-w-max bg-red-600 text-white rounded-full px-2 py-[.1rem] text-[.9rem]'>باید شامل @ و بیش از 10 حرف باشد</span>
          </i>
        }
        {re && <span className='flex w-full text-red-600 text-[.9rem]'>ایمیل تکراری است</span>}
      </div>
      <div className='flex flex-col justify-center'>
        <input onBlur={(e) => handleSubmit(e)} onChange={(e) => handleSubmit(e)} className={`${usernameS ? 'border-text-error border-[1px]' : ''}`} type="username" id='username' name='username' placeholder='نام کاربری'/>
        {usernameS && 
          <i className='group'>
            <BiSolidErrorAlt />
            <span className='group-hover:flex hidden absolute -left-1 -top-6 min-w-max bg-red-600 text-white rounded-full px-2 py-[.1rem] text-[.9rem]'>باید بین 3 تا 15 حرف باشد</span>
          </i>
        }
        {ru && <span className='flex w-full text-red-600 text-[.9rem]'>نام کاربری تکراری است</span>}
      </div>
      <span className='relative -my-2 -mb-3'>
        <span className='text-[.9rem]'>تاریخ تولد</span>
        {birthS && 
          <span className='absolute top-1 pr-1 text-text-error -my-2 text-[1.5rem]'>*</span>
        }
      </span>
      <div className='flex w-full md:gap-2 gap-1 [&>select]:h-10 [&>select]:w-full [&>select]:px-2 [&>select]:border-2 [&>select]:bg-white [&>select]:appearance-none [&>select]:bg-arrow [&>select]:bg-no-repeat [&>select]:bg-[length:12px_12px] [&>select]:bg-[center_left_.5rem]'>
        <select onChange={(e) => handleSubmit(e)} name="days" id="days">
          {days.map((day) => {
            return (
              <option value={day}>{day}</option>
              )
            })}
        </select>
        <select onChange={(e) => handleSubmit(e)} name="mounths" id="mounths">
          {selectOptionsMounths.map((mounth) => {
            return (
              <option value={mounth}>{mounth}</option>
              )
            })}
        </select>
        <select onChange={(e) => handleSubmit(e)} name="years" id="years">
          {years.map((year) => {
            return (
              <option value={year}>{year}</option>
              )
            })}
        </select>
      </div>
      <span className='relative -my-2 -mb-3'>
        <span className='text-[.9rem]'>جنسیت</span>
        {genderS && 
          <span className='absolute top-1 pr-1 text-text-error -my-2 text-[1.5rem]'>*</span>
        }
      </span>
      <div className='flex items-center w-full md:gap-2 gap-1 [&>span]:flex [&>span]:items-center [&>span]:justify-between [&>span>label]:w-full [&>span]:h-10 [&>span]:w-full [&>span]:px-4 [&>span]:border-2 [&>span]:border-bg-theme-darker [&>span]:bg-white'>
        <span>
          <label htmlFor="female">زن</label>
          <input onChange={(e) => handleSubmit(e)} type="radio" id="female" name='gender' value='female'/>
        </span>
        <span>
          <label htmlFor="male">مرد</label>
          <input onChange={(e) => handleSubmit(e)} type="radio" id="male" name='gender' value='male'/>
        </span>
      </div>
      <div>
        <input onBlur={(e) => handleSubmit(e)} onChange={(e) => handleSubmit(e)} className={`${passwordS ? 'border-text-error border-[1px]' : ''}`} id='password' name='password' type='password' placeholder='رمز عبور'/>
        {passwordS && 
          <i className='group'>
            <BiSolidErrorAlt />
            <span className='group-hover:flex hidden absolute -left-1 -top-6 min-w-max bg-red-600 text-white rounded-full px-2 py-[.1rem] text-[.9rem]'>باید بین 8 تا 18 حرف باشد</span>
          </i>
        }
      </div>
      <div>
        <input onBlur={(e) => handleSubmit(e)} onChange={(e) => handleSubmit(e)} className={`${confirmPasswordS ? 'border-text-error border-[1px]' : ''}`} id='confirmPassword' name='confirmPassword' type='password' placeholder='تکرار رمز عبور'/>
        {confirmPasswordS && 
          <i className='group'>
            <BiSolidErrorAlt />
            <span className='group-hover:flex hidden absolute -left-1 -top-6 min-w-max bg-red-600 text-white rounded-full px-2 py-[.1rem] text-[.9rem]'>رمز عبور باید تکرار شود</span>
          </i>
        }
      </div>
      {confirmPasswordMessage && 
        <span className='text-text-error -my-2 text-[.95rem]'>رمز تکرار شده صحیح نیست</span>
      }
      <span className='flex justify-center w-full'>
        <input type="submit" value='تبت نام' className='bg-green-500 hover:bg-green-600 w-[200px] h-10 text-white rounded-[.3rem] md:mt-4 mt-2 cursor-pointer'/>
      </span>
    </form>
  )
}

export default Signup