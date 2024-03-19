import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { BiCategory } from 'react-icons/bi';


export const SidebarDataAdmin = [
  {
    title: 'Home',
    path: '/admindashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },

  {
    title: 'Manage User',
    path: '/userdash',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'New Job',
    path: '/jobdash',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Manage Help',
    path: '/helpdash',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];