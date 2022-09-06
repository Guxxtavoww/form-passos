import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFormData {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    git: string;
}

const FormSlice = createSlice({
    name: "form",
    initialState: {} as IFormData,
    reducers: {
        setCurrentStep: (state, action: PayloadAction<IFormData["currentStep"]>) => {
            state.currentStep = action.payload;
        },
        setName: (state, action: PayloadAction<IFormData["name"]>) => {
            state.name = action.payload;
        },
        setGit: (state, action: PayloadAction<IFormData["git"]>) => {
            state.git = action.payload;
        },
        setLevel: (state, action: PayloadAction<IFormData["level"]>) => {
            state.level = action.payload === state.level ? state.level : action.payload;
        },
        setEmail: (state, action: PayloadAction<IFormData["email"]>) => {
            state.email = action.payload;
        },
    },
});

export default FormSlice.reducer;
export const { setGit, setName, setEmail, setCurrentStep, setLevel } = FormSlice.actions;