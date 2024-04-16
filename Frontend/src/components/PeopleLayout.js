import { Outlet } from 'react-router-dom'
import DashNav from './DashNav'
import DashFooter from './DashFooter'
import SideBar from "./SideBar";
const PeopleLayout = () => {
    return (
        <>
            
            <DashNav/>
            <SideBar />
            <div>
                <Outlet />
            </div>
            
        </>
    )
}

export default PeopleLayout