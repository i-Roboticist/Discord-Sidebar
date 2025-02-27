import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';


const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16
                        flex flex-col items-center
                        bg-gray-900 text-white shadow-lg space-y-4 pt-3">

            <SideBarIcon icon={<FaFire size="28" />}/>
            <SideBarIcon icon={<BsPlus size="32" />}/>
            <SideBarIcon icon={<BsFillLightningFill size="20" />}/>
            <SideBarIcon icon={<FaPoo size="20" />}/>

        </div>
    );
};

const SideBarIcon = ({icon, text = 'tooltip 💡'}) => (
    <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)

export default SideBar;
