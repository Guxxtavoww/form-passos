import { book, mail, profile } from "../../assets";

const itemsData = [
    {
        title: "Profissional",
        desc: "Se identifique",
        icon: profile,
        path: "/",
        step: 1
    },
    {
        title: "Pessoal",
        desc: "Seu nível",
        icon: book,
        path: "/segundo-passo",
        step: 2
    },
    {
        title: "Contatos",
        desc: "Como te achar",
        icon: mail,
        path: "/terceiro-passo",
        step: 3
    },
] 

export default itemsData;