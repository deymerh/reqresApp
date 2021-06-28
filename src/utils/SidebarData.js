import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    className: 'nav-text'
  },
  {
    title: 'Usuarios',
    path: '/usuarios',
    icon: <IoIcons.IoMdPeople />,
    className: 'nav-text'
  },
  {
    title: 'Crear Usuario',
    path: '/crear',
    icon: <IoIcons.IoMdPersonAdd />,
    className: 'nav-text'
  },
];
