import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerScheme, RegisterSchemeData } from "./register.scheme";
import { useRegisterMutation } from "../../shared/queries/use-register-mutation";
import { useUserStore } from "../../shared/store/user-store";


export const userRegisterModel = () => {

  const userRegisterMutation = useRegisterMutation();
  const { setSession, user } = useUserStore()


  const { control, handleSubmit, formState: { errors } } = useForm<RegisterSchemeData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    }
  });

  const onSubmit = handleSubmit(async (userData) => {
    console.log("função de regitro");
    const { confirmPassword, ...registerData } = userData;
    const mutationResponse = await userRegisterMutation.mutateAsync(registerData);

    setSession({
      user: mutationResponse.user,
      token: mutationResponse.token,
      refreshToken: mutationResponse.refreshToken,
    });

  });



  return { control, errors, onSubmit };
};
