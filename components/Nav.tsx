"use client";

import Image from "next/image";
import { useState } from "react";


interface NavProps {
  title: string;
  notification?: string;
  moreOption?: boolean;
  children?: JSX.Element;
}

const NavLink: React.FC<NavProps> = ({
  title,
  notification,
  moreOption = true,
  children,
}) => {
  const [dropdown, setDropdown] = useState(false);

  function handleClick() {
    setDropdown(!dropdown);
  }

  return (
   <div>
    
   </div>
  );
};

const Nav = () => {
  return (
    <nav className='flex justify-center items-center'>
    
    </nav>
  );
};



export {Nav};
