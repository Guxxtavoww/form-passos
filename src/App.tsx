import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as C from "./app.styles";
import { Step1, Step2, Step3 } from "./pages";
import { Header, Sidebar } from "./components";

const App = () => {
    return (
        <BrowserRouter>
            <C.AppBox>
                <C.AppWrapper>
                    <Header />
                    <C.StepsWrapper>
                        <Sidebar />
                        <C.Step>
                            <Routes>
                                <Route path="/" element={<Step1 />} />
                                <Route path="/segundo-passo" element={<Step2 />} />
                                <Route path="/terceiro-passo" element={<Step3 />} />
                            </Routes>
                        </C.Step>
                    </C.StepsWrapper>
                    <C.Footer>
                        <span>Desenvolvido por <a href="https://gustavoaugusto.lunaquantica.com/" target="_blank" rel="noreferrer noopener">&copy; Gustavo Augusto</a></span>
                    </C.Footer>
                </C.AppWrapper>
            </C.AppBox>
        </BrowserRouter>
    );
}

export default App;