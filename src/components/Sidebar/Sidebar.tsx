import { useSelector } from "react-redux/es/exports";

import itemsData from "./itemsData";
import { SidebarContainer } from "./styles";
import { RootState } from "../../redux/store";
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar: React.FC = () => {
    const currentStep = useSelector((state: RootState) => state.formRedux.currentStep);

    return (
        <SidebarContainer>
            {itemsData.map((item, index) => (
                <SidebarItem 
                    key={index} 
                    title={item.title} 
                    desc={item.desc} 
                    icon={item.icon} 
                    path={item.path} 
                    active={currentStep === item.step} 
                />
            ))}
        </SidebarContainer>
    );
}

export default Sidebar;