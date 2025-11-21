import Header from "../components/Header";
import AuthForm from "../components/auth/AuthForm";

const Login = () => {
  return (
    <>
      <Header type="simple" />
      <AuthForm type="login" />
    </>
  );
};

export default Login;
