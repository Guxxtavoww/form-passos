import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Step1Container } from "./styles";
import { useForm, FormActions } from "../../../contexts/FormContext";

const Step1: React.FC = () => {    
    const navigation = useNavigate();

    const { state, dispatch } = useForm();

    const handleNextStep = () => {
        if(state.name !== "") {
            navigation("/segundo-passo");
        } else {
            alert("Não deixe campos vazios");
        }
    }
    
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => dispatch({ type: FormActions.setName, payload: e.target.value });

    useEffect(() => {
        dispatch({ type: FormActions.setCurrentStep, payload: 1 });
    }, [ dispatch ]);

    return (
        <Step1Container>
            <p>Passo 1/3</p>
            <h1>Vamos começar com o seu nome</h1>
            <p>Preencha o campo abaixo com seu nome completo</p>
            <div className="inputBx">
                <label htmlFor="name">Nome Completo:</label>
                <input type="text" id="name" placeholder="Insira seu nome" onChange={handleNameChange} autoFocus />    
            </div>       
            <button type="button" onClick={handleNextStep}>Próximo</button>
        </Step1Container>
    );
}

export default Step1;