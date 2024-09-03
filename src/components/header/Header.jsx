import { BiMoon } from "react-icons/bi"; 
import { BiSun } from "react-icons/bi"; 
import { AiOutlineSearch } from "react-icons/ai"; 
import Container from '../../utils/index';
import { useState } from 'react';

const Header = ( )   => {
    const [theme, setTheme] = useState('light');
    return(
        <header className="w-full">
            <Container>
              <div className="flex items-center justify-between">
              <h1 className="text-indigo-700 text-2xl font-bold"> Weather app</h1>
                <form  className="border max-w[600px] flex-1 flex border-gray-300  rounded-[30px] p-4">
                    <input type="text"  className="flex-1 border-none outline-none text-lg"/>
                    <button type="submit"><AiOutlineSearch className="text-[26px]" /></button>
                </form>
             <div className="border border-gray-300 rounded-[30px] flex relative items-center ">
             <input onChange={(e) => setTheme(e.target.checked ?   'dark' : 'light')} id="theme-toggle" type="checkbox"  className="appearance-none w-[60px] h-[30px]"/>
                <label htmlFor="theme-toggle" className="w-[35px] h-[35px] bg-indigo-700 text-white rounded-full flex items-center justify-center absolute transition-all left-0 ">
                 {
                     theme === 'light' ? <BiMoon /> :
                      <BiSun />
                 }
                </label>
             </div>
              </div>
            </Container>
        </header>
    )
}

export default Header