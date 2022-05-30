import { Container } from "./styles";

type Props = {
    title: string;
    desc: string;
    icon: string;
    selected: boolean;
    onClick: () => void;
}

const SelectOption = ({ title, desc, icon, selected, onClick }: Props) => {
    return (
        <Container selected={selected} onClick={onClick}>
            <div className="icon">{icon}</div>
            <div className="infoBx">
                <h2 className="title">{title}</h2>
                <p className="desc">{desc}</p>
            </div>
        </Container>
    );
}

export default SelectOption;