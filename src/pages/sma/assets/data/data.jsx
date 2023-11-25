import { HiOutlineHome } from 'react-icons/hi'
import { PiMagnifyingGlassBold } from 'react-icons/pi'
import { TiMessages } from 'react-icons/ti'
import { HiOutlineUser } from 'react-icons/hi'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { CgMoreO } from 'react-icons/cg'
import { MdOutlineNotificationsNone } from 'react-icons/md'

export const mainHeaderLinks = [
  {
    name: 'خانه',
    path: 'sma/',
    icon: <HiOutlineHome />
  },
  {
    name: 'جستجو',
    path: 'sma/explore',
    icon: <PiMagnifyingGlassBold />
  },
  {
    name: 'هشدار ها',
    path: 'sma/explore',
    icon: <MdOutlineNotificationsNone />
  },
  {
    name: 'پیام ها',
    path: 'sma/my/messages',
    icon: <TiMessages />
  },
  {
    name: 'گروه ها',
    path: 'sma/my/groups',
    icon: <HiOutlineUserGroup />
  },
  {
    name: 'بیشتر',
    path: '#',
    icon: <CgMoreO />
  }
]

export const bottomHeaderLinks = [
  {
    name: 'خانه',
    path: 'sma/',
    icon: <HiOutlineHome />
  },
  {
    name: 'جستجو',
    path: 'sma/explore',
    icon: <PiMagnifyingGlassBold />
  },
  {
    name: 'هشدار ها',
    path: 'sma/explore',
    icon: <MdOutlineNotificationsNone />
  },
  {
    name: 'پیام ها',
    path: 'sma/my/messages',
    icon: <TiMessages />
  }
]

export const selectOptionsMounths = ['فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند']
