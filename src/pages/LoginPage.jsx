import Header from "../components/Header";
import AuthForm from "../components/AuthForm";

const LoginPage = () => {
  return (
    <>
      <Header type="simple" />
      <AuthForm type="login" />
    </>
  );
};

export default LoginPage;
