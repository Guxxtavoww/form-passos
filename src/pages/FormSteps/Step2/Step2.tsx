import { useCallback, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";

import { RootState } from "../../../redux/store";
import { SelectOption } from "../../../components";
import { Step2Container, OptionBx } from "./styles";
import { setCurrentStep, setLevel } from "../../../redux/FormSlice";

const Step2: React.FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const formData = useSelector((state: RootState) => state.formRedux);

    const handleNextStep = () => {
        if(formData.name !== "") {
            navigation("/terceiro-passo");
            return;
        }

        alert("Não deixe campos vazios");
    }

    const setFormLevel = useCallback((level: 0 | 1) => {
        dispatch(setLevel(level));
    }, [dispatch]);

    useEffect(() => {
        if(formData.name === "") {
            alert("Você ainda não completou o primeiro passo");
            navigation("/");

            return;
        }

        dispatch(setLevel(0));
        dispatch(setCurrentStep(2));
    }, [ dispatch, navigation, formData.name ]);

    return (
        <Step2Container>
            <p>Passo 2/3</p>
            <h1 style={{ margin: "12px 0", fontSize: "2rem" }}>{formData.name}, o que melhor descreve você?</h1>
            <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>
            <OptionBx>
                <SelectOption title="Sou iniciante" desc="Comecei a programar há menos de 2 anos" icon="🥳" selected={formData.level === 0} onClick={() => setFormLevel(0)} />
                <SelectOption title="Sou programador" desc="Já programo há 2 anos ou mais" icon="😎" selected={formData.level === 1} onClick={() => setFormLevel(1)} />
            </OptionBx>
            <Link to="/" className="btn">Voltar</Link>
            <button type="button" onClick={handleNextStep}>Próximo</button>
        </Step2Container>
    );
}

export default Step2;