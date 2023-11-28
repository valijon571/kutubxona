import {Link, useParams} from "react-router-dom"
const Fiz = () =>{
    const params = useParams()
    return(<>
     <Link to='/' >Bosh saxifaga qaytish</Link><br/><br/>
    <Link to="/fiz/Uamonov" >Usmonov</Link><br/>
    <Link to="/fiz/Qo'llanmalar">Qo'llanmalar</Link><br/>
    <Link to="/fiz/Formilalar">Formilalar</Link><br/>
    <Link to="/fiz/Niton">Niton</Link>
    </>)
}
export default Fiz;