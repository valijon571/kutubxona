import { Link } from "react-router-dom";
import { categorys } from "../utils/constants";
const Kutubxona = () => {
  return (
    <>
      <h1>Kitob turlari</h1>
      <br />
      {categorys.map((item, index) => (
        <>
          <Link to={"/category/" + item?.id} key={index}>
            {item?.name}{" "}
          </Link>
          <br />
        </>
      ))}
    </>
  );
};
export default Kutubxona;
