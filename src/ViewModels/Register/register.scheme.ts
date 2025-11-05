import * as yup from "yup";

export const registerScheme = yup.object({
    name: yup.string().required("Nome é obrigatório").min(4, "O nome deve ter pelo menos 4 caracteres"),
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    phone: yup.string().required("Telefone é obrigatório").matches(/^\d{11}$/, "Telefone inválido"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Senha é obrigatória"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), "Senhas não conferem"], "As senhas devem ser iguais").required("Confirmação de senha é obrigatória"),
});

export type RegisterSchemeData = yup.InferType<typeof registerScheme>;