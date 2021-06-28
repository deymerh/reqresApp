import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../utils/SidebarData';

export const Sidebar = () => {
  return (
    <nav className='nav-menu'>
      <ul className='nav-menu-items'>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.className}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}
