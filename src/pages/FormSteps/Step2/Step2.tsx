import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { SelectOption } from "../../../components";
import { Step2Container, OptionBx } from "./styles";
import { useForm, FormActions } from "../../../contexts/FormContext";

const Step2 = () => {
    const navigation = useNavigate();

    const { state, dispatch } = useForm();

    const handleNextStep = () => {
        if(state.name !== "") {
            navigation("/terceiro-passo");
        } else {
            alert("Não deixe campos vazios");
        }
    }

    const setLevel = (level: Number) => dispatch({ type: FormActions.setLevel, payload: level });

    useEffect(() => {
        if(state.name === "") {
            alert("Você ainda não completou o primeiro passo");
            navigation("/");
        } else {
            dispatch({ type: FormActions.setCurrentStep, payload: 2 });
        }
    }, [ dispatch, navigation, state.name ]);

    return (
        <Step2Container>
            <p>Passo 2/3</p>
            <h1 style={{ margin: "12px 0", fontSize: "2rem" }}>{state.name}, o que melhor descreve você?</h1>
            <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>
            <OptionBx>
                <SelectOption title="Sou iniciante" desc="Comecei a programar há menos de 2 anos" icon="🥳" selected={state.level === 0} onClick={() => setLevel(0)} />
                <SelectOption title="Sou programador" desc="Já programo há 2 anos ou mais" icon="😎" selected={state.level === 1} onClick={() => setLevel(1)} />
            </OptionBx>
            <Link to="/" className="btn">Voltar</Link>
            <button type="button" onClick={handleNextStep}>Próximo</button>
        </Step2Container>
    );
}

export default Step2;