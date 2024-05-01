import React, { createContext, useContext, useState } from 'react'
import logo from './../../assets/logo.webp'
import profile from './../../assets/profile.webp'
import { LuChevronFirst, LuChevronLast } from 'react-icons/lu'
import { CgMoreVertical } from 'react-icons/cg'

const SidebarContext = createContext()

function SideBar({ children }) {

    const [expanded, setExpanded] = useState(true)

  return (
   <>
     <aside className=' h-screen'>
        <nav className=' h-full flex flex-col bg-white border-r shadow-sm'>
            <div className='p-4 pb-2 justify-between items-center flex'>
                <img className={` overflow-hidden transition-all ${expanded ? 'w-14' : 'w-0'} `} src={logo} alt="" />
                <button
                onClick={()=> setExpanded((curr) => !curr)}
                className=' p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
                   {expanded ? <LuChevronFirst className='text-2xl' /> : <LuChevronLast className='text-2xl' />}
                </button>
            </div>

            <SidebarContext.Provider value={{expanded}}>
                <ul className='flex-1 px-3'>
                    {children}
                </ul>
            </SidebarContext.Provider>

            <div className=' border-t flex p-3'>
                <img className='w-[33px] object-cover rounded-full' src={profile} alt="" />
                <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'} `}>
                    <div className=' leading-4'>
                        <h1 className=' font-semibold'>ImVakhim</h1>
                        <span className=' text-xs text-gray-500'>vakhimim11@gmail.com</span>
                    </div>
                    <CgMoreVertical className='text-lg' />
                </div>
            </div>
        </nav>
     </aside>
   </>
  )
}

export default SideBar


export function SideBarItem({icon, text, active, alert}){

    const {expanded} = React.useContext(SidebarContext)
    return (
       <li className={`relative flex items-center py-2 px-3 my-1 font-medium 
       rounded-md cursor-pointer transition-colors group ${active ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800' 
       : "hover:bg-indigo-50 text-gray-600" }`}>
            {icon}
            <span className={` overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}>
                {text}
            </span>
            {
                alert && (<div className={`absolute right-2 h-2 w-2
                 bg-indigo-400 rounded-full ${expanded ? '' : 'top-2' } `}></div>
            )}

            {!expanded && (
                <div className={` absolute left-full rounded-md px-2 py-1 ml-6
                 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 
                 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {text} 
                </div>
            )}

       </li>
    )
}
