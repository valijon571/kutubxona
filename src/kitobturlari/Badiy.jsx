import { Link, useParams } from "react-router-dom";
import { books } from "../utils/constants";
const Badiy = () => {
  const params = useParams();
  return (
    <>
      <h1>Kitoblar</h1>
      {books
        .filter((o) => o.category_id === parseInt(params?.kitob_turi))
        .map((item, index) => (
          <div>
            <Link
              key={index}
              to={"/category/" + params?.kitob_turi + "/" + item.id}
            >
              {item?.name}
            </Link>
            <br />
          </div>
        ))}
    </>
  );
};
export default Badiy;
