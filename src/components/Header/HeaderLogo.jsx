import { Link } from "react-router-dom";
import {LogoVideobelajar} from "../../assets";

const HeaderLogo = () => {
  return (
    <Link to="/home">
      <img
        src={LogoVideobelajar}
        alt="Logo Videobelajar"
        className="w-40 md:w-48"
      />
    </Link>
  );
}

export default HeaderLogo;