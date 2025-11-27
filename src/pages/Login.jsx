import Header from "../components/Header/Header";
import AuthForm from "../components/Auth/AuthForm";

const Login = () => {
  return (
    <>
      <Header type="simple" />
      <AuthForm type="login" />
    </>
  );
};

export default Login;
