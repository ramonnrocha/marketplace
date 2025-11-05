import { useMutation } from "@tanstack/react-query";
import { register } from "../services/auth.service";
import { RegisterHttpParams } from "../interfaces/http/register";


export const useRegisterMutation = () => {
    const mutation = useMutation({
        mutationFn: (userData: RegisterHttpParams) => register(userData),
        onSuccess: (response) => {
            console.log("Registration successful:", response);
        },
        onError: (error) => {
            console.error("Registration failed:", error);
        }
    });

    return mutation;
}