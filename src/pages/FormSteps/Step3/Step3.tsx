import { useEffect, ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Step3Container } from "./styles";
import { useForm, FormActions } from "../../../contexts/FormContext";

const Step3 = () => {
    const navigation = useNavigate();

    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === "") {
            alert("Você ainda não completou o primeiro passo");
            navigation("/");
        } else {
            dispatch({ type: FormActions.setCurrentStep, payload: 3 });
        }
    }, [ dispatch, navigation, state.name ]);

    const handleNextStep = () => {
        if(state.email !== "" && state.git !== "") {
            alert(`Dados: ${state.name} ${state.level} ${state.email} ${state.git}`);
        } else {
            alert("Preencha os dados");
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => dispatch({ type: FormActions.setEmail, payload: e.target.value });
    
    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => dispatch({ type: FormActions.setGit, payload: e.target.value });
    
    return (
        <Step3Container>
            <p>Passo 3/3</p>
            <h1 style={{ margin: "8px 0", fontSize: "2rem" }}>Legal {state.name}, onde te achamos ?</h1>
            <p style={{ marginBottom: "10px" }}>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>
            <div className="inputBx">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Insira seu email" onChange={handleEmailChange} autoFocus />    
            </div>
            <div className="inputBx">
                <label htmlFor="github">Github:</label>
                <input type="text" id="github" placeholder="Insira seu Github" onChange={handleGithubChange} />    
            </div>      
            <Link to="/segundo-passo" className="btn">Voltar</Link>
            <button onClick={handleNextStep}>Finalizar Cadastro</button>
        </Step3Container>
    );
}

export default Step3;