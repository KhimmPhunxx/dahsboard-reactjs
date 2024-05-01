import { BiHome, BiLayer } from 'react-icons/bi'
import './App.css'
import SideBar, { SideBarItem } from './component/sidebar/SideBar'
import { LuLayoutDashboard, LuLifeBuoy } from 'react-icons/lu'
import { CiSettings, CiStickyNote } from 'react-icons/ci'
import { SlCalender } from 'react-icons/sl'
import { BsFlag} from 'react-icons/bs'

function App() {
  return (
    <>
      <main className='flex'>
        <SideBar>
          <SideBarItem text='Home' icon={<BiHome size={20}/>} alert />
          <SideBarItem text='Dashboard' icon={<LuLayoutDashboard size={20}/>} active />
          <SideBarItem text='Project' icon={<CiStickyNote size={20}/>} alert />
          <SideBarItem text='Calender' icon={<SlCalender size={20}/>} />
          <SideBarItem text='Tasks' icon={<BiLayer size={20}/>} />
          <SideBarItem text='Reporting' icon={<BsFlag size={20}/>} />
          <hr className='my-3' />
          <SideBarItem text='Setting' icon={<CiSettings size={20}/>} />
          <SideBarItem text='Help' icon={<LuLifeBuoy size={20}/>} />
        </SideBar>
      </main>
    </>
  )
}

export default App
