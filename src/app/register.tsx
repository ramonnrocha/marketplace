import { userRegisterModel } from "../ViewModels/Register/register.model";
import { RegisterView } from "../ViewModels/Register/register.view";

export default function Register() {
  const props = userRegisterModel();

  return <RegisterView {...props} />;
}
