import {Link, useParams} from "react-router-dom"
const Mate = () => {
    const params = useParams()
    return(<>
     <Link to='/' >Bosh saxifaga qaytish</Link><br/><br/>
    <Link to="/mate/Turklitsey" >Turklitsey</Link><br/>
    <Link to="/mate/Skanaviy" >Skanaviy</Link><br/>
    <Link to="/mate/Farruxbek" >Faruxbek</Link><br/>
    <Link to="/mate/To'plam" > To'plam</Link>
    </>)
}
export default Mate;