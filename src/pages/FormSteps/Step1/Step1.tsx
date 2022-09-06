import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { ChangeEvent, useEffect, useState } from "react";

import { Step1Container } from "./styles";
import { setCurrentStep, setName } from "../../../redux/FormSlice";

const Step1: React.FC = () => {    
    const [ inputName, setInputName ] = useState("");

    const dispatch = useDispatch();
    const navigation = useNavigate();

    const handleNextStep = () => {
        if(inputName !== "") {
            navigation("/segundo-passo");
            return;
        }

        alert("Não deixe campos vazios");
    }
    
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputName(e.target.value);
        dispatch(setName(e.target.value));
    }

    useEffect(() => {
        dispatch(setCurrentStep(1));
    }, [ dispatch ]);

    return (
        <Step1Container>
            <p>Passo 1/3</p>
            <h1>Vamos começar com o seu nome</h1>
            <p>Preencha o campo abaixo com seu nome completo</p>
            <div className="inputBx">
                <label htmlFor="name">Nome Completo:</label>
                <input type="text" id="name" value={inputName} placeholder="Insira seu nome" onChange={handleNameChange} autoFocus />    
            </div>       
            <button type="button" onClick={handleNextStep}>Próximo</button>
        </Step1Container>
    );
}

export default Step1;