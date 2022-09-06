import { useContext, createContext, useReducer, ReactNode } from "react";

export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGit
}

interface State {
    currentStep: Number;
    name: String;
    level: 0 | 1;
    email: String;
    git: String;
}

interface Action {
    type: FormActions,
    payload: any
}

interface ContextType {
    state: State;
    dispatch: (action: Action) => void;
}

interface FormProviderProps {
    children: ReactNode;
}

const FormContext = createContext<ContextType | undefined>(undefined);

const initialFormData: State = {
    currentStep: 0,
    name: "",
    git: "",
    email: "",
    level: 0
}

const formReducer = (state: State, action: Action) => {
    const { setCurrentStep, setEmail, setGit, setLevel, setName } = FormActions;

    switch(action.type) {
        case setCurrentStep: 
            return { ...state, currentStep: action.payload }; 
        case setName: 
            return { ...state, name: action.payload };
        case setGit: 
            return { ...state, git: action.payload };
        case setEmail: 
            return { ...state, email: action.payload };
        case setLevel: 
            return { ...state, level: action.payload };
        default: 
            return state;
    }
}

export const FormProvider = ({ children }: FormProviderProps) => {
    const [ state, dispatch ] = useReducer(formReducer, initialFormData);

    const value = { state, dispatch };

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    ); 
}

export const useForm = () => {
    const context = useContext(FormContext);

    if(context === undefined) throw new Error("useForm precisa ser usado dentro do FormProvider");    

    return context;
}