import { Link } from "react-router-dom";

import { ItemContainer, IconArea, Point } from "./styles";

interface Props {
    title: string;
    desc: string;
    icon: string;
    path: string;
    active: boolean;
}

const SidebarItem: React.FC<Props> = ({ title, desc, icon, path, active }) => {
    return (
        <ItemContainer>
            <Link to={path}>
                <div className="info_sidebar">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
                <IconArea active={active}>
                    <img src={icon} alt="SidebarImg" width={24} height={24} style={{ fill: "white" }} />
                </IconArea>
                <Point />
            </Link>
        </ItemContainer>
    );
}

export default SidebarItem;