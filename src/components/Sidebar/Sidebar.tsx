import itemsData from "./itemsData";
import { SidebarContainer } from "./styles";
import SidebarItem from "./SidebarItem/SidebarItem";
import { useForm } from "../../contexts/FormContext";

const Sidebar = () => {
    const { state } = useForm();

    return (
        <SidebarContainer>
            {
                itemsData.map((item, index) => (
                    <SidebarItem key={index} title={item.title} desc={item.desc} icon={item.icon} path={item.path} active={state.currentStep === item.step} />
                ))
            }
        </SidebarContainer>
    );
}

export default Sidebar;