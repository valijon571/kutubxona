import {Link, useParams} from "react-router-dom"
const Ertak =() =>{
    const params = useParams()
    return(<>
     <Link to='/' >Bosh saxifaga qaytish</Link><br/><br/>
    <Link to='/ertak/Xudayberdi Toxtaboyev'>Xudayberdi To'xtaboyev</Link><br/>
    <Link to='/ertak/Uloqcha' >Uloqcha</Link><br/>
    <Link to="/ertak/Bo'ri" >Bo'zi</Link><br/>
    <Link to="/ertak/Tulki va turna" >Tulki va Turna</Link><br/>
    </>)
}
export default Ertak;