import { useNavigate, Link } from "react-router-dom";
import { useEffect, ChangeEvent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

import { Step3Container } from "./styles";
import { RootState } from "../../../redux/store";
import { setCurrentStep, setEmail, setGit } from "../../../redux/FormSlice";

const Step3: React.FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const formData = useSelector((state: RootState) => state.formRedux);

    useEffect(() => {
        if(formData.name === "") {
            alert("Você ainda não completou o primeiro passo");
            navigation("/");

            return;
        }

        dispatch(setCurrentStep(3));
    }, [ dispatch, navigation, formData.name ]);

    const handleNextStep = () => {
        if(formData.email !== "" && formData.git !== "") {
            console.log(formData);
        } else {
            alert("Preencha os dados");
        }
    }

    const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => dispatch(setEmail(e.target.value)), [dispatch]);
    
    const handleGithubChange = useCallback((e: ChangeEvent<HTMLInputElement>) => dispatch(setGit(e.target.value)), [dispatch]);
    
    return (
        <Step3Container>
            <p>Passo 3/3</p>
            <h1 style={{ margin: "8px 0", fontSize: "2rem" }}>Legal {formData.name}, onde te achamos ?</h1>
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