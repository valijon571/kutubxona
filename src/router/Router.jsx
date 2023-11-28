import { Route, Routes } from "react-router-dom";
import Kutubxona from "../kitobturlari/Kutubxona";
import Badiy from "../kitobturlari/Badiy";
import Ertak from "../kitobturlari/papka/Ertak";
import Mate from "../kitobturlari/papka/Mate";
import Mat from "../kitobturlari/papka/Mat";
import Kimyo from "../kitobturlari/papka/Kimyo";
import Fiz from "../kitobturlari/papka/Fiz";
import Matin from "../kitobturlari/papka/Matin";
import SHeriyat from "../kitobturlari/papka/SHeriyat";
import Fizzz from "../kitobturlari/papka/Fizzz";
import Kitob from "../kitobturlari/Kitob";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Kutubxona />} />
        <Route path="category/:kitob_turi" element={<Badiy />} />
        <Route path="category/:kitob_turi/:kitob_id" element={<Kitob />} />
        {/* <Route path="/ertak/:matin" element={<Matin/>}/>
        <Route path="/badiy/:sheriyat" element={<SHeriyat/>} />
        <Route path="/fiz/:fizzz"  element={<Fizzz/>}/>
        <Route path="/mate/:mat" element={< Mat/>} /> */}
      </Routes>
    </>
  );
};
export default Router;
