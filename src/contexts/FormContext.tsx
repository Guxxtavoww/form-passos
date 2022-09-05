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
    switch(action.type) {
        case FormActions.setCurrentStep: 
            return { ...state, currentStep: action.payload }; 
        case FormActions.setName: 
            return { ...state, name: action.payload };
        case FormActions.setGit: 
            return { ...state, git: action.payload };
        case FormActions.setEmail: 
            return { ...state, email: action.payload };
        case FormActions.setLevel: 
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