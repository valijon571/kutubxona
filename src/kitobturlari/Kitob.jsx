import { Link, useParams } from "react-router-dom";
import { authors, books } from "../utils/constants";

const Kitob = () => {
  const params = useParams();
  return (
    <>
      <h1>Kitobni ko'rish</h1>
      <div>
        {" "}
        {books
          .filter((o) => o.id === parseInt(params?.kitob_id))
          .map((item, index) => (
            <div key={index}>
              Nomi: {item?.name}
              <br />
              <div>
                Muallifi:
                {authors
                  .filter((o) => o.id === item?.author_id)
                  .map((aitem, aindex) => (
                    <span key={aindex}>{aitem?.name}</span>
                  ))}
              </div>
              {item?.description}
              <br />
              Narxi: {item?.price}
              <br />
            </div>
          ))}
      </div>
    </>
  );
};
export default Kitob;
