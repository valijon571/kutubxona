import {Link, useParams} from "react-router-dom"

const Matin = () =>{
    const params = useParams()
    return(<>
        <Link to='/' ><h3>Bosh saxifaga qaytish</h3></Link>
        <Link to='/ertak' ><h3>Qaytish</h3></Link><br/><br/>
     <h1>{params.matin}</h1>
    {/* <h2>Matin</h2> */}
    <p>
                Ayozli tongda uyqudan uyg‘ongan Qarg‘a qora qayin shoxidagi inida shumshayib o‘tirardi. Uning judayam qorni ochgan edi. Biroq tuni bo‘yi yoqqan qalin qor ostidan biron bir meva yoki o‘simlik urug‘larini topish amrimahol. Shuning uchun ham Qarg‘aning ochlikdan qag‘illashga ham holi kelmay o‘tirarkan, to‘satdan sal nariroqda o‘sgan eman daraxti shox­larida qorayib turgan ni­malar­gadir ko‘zi tushdi. Eman yong‘oqlarimi? Yo‘g‘-e, qishki uyquga ketgan emanning shoxlarida yong‘oq tugul bironta barg ham qolmagan-ku!

            Qarg‘a erinibgina qaddini rostladi, qanotlarini shapillatib qoqqancha eman tomonga uchdi.

            Qarg‘a eman shoxiga qo‘nganidan keyingina, shoxda qorayib turgan narsa nimaligini tushundi. Bu – quritilgan qo‘ziqorin edi. Qarg‘a qo‘ziqorinni tumshug‘i bilan tortib, bir chekkasini tishladi. Qo‘ziqorin qurib, qovjirab ketgan bo‘lsa-da, baribir och qolgan qarg‘aga juda mazali bo‘lib tuyuldi. Nima bo‘lgandayam, ovqat-ku, axir!

            — Hoy, qo‘shni!

            Qarg‘a pastdan jaranglagan ovozni eshitib, o‘girilib qaradi. Shu daraxt shoxida – qari emanning kavagida yashovchi Olmaxon momiq dumlarini silkitib turardi.

            — Nima deysan? — so‘radi u mazali tuyulgan nonushtasidan chalg‘ishni xohlamay.

            — Yeyaver, qo‘shnijon, osh bo‘lsin! — dedi Olmaxon ochiqko‘ngillik bilan. — Men yoz bo‘yi qo‘ziqorinlarni daraxt shoxlariga ilib quritdim, qishda yeyish uchun turli yong‘oq va donlarni to‘pladim. Zaxiram oilamning qishdan to‘q chiqishi uchun yetib-ortadi. Xohlasang, menikiga kir, yong‘oqlar va turli donlar bilan mehmon qilay. Axir, qahraton qishda bizdek o‘rmon jonivorlarini faqat to‘yimli ozuqa qutqaradi-ku! Biz qo‘shnilar esa og‘ir paytlarda bir-birimizga yordam berishimiz kerak!

            Qarg‘a olmaxon rost aytyaptimi yoki yo‘qmi, deb bir zum o‘ylanib qoldi. Ammo ochlik o‘zini ko‘rsatdi. – Qarg‘aning to‘yib ovqatlanib olish istagi kuchli chiqdi va u olmaxonning kavagiga mehmonga kirdi.

            Mehmondo‘st Olmaxon qo‘shnisi Qarg‘ani quritilgan qo‘ziqorinlar, yong‘oqlar va donlar bilan mehmon qildi. Shu tariqa Qarg‘a qahraton qishdan eson-omon chiqib oldi.

            O‘rmonga bahor, uning ortidan yoz kelib, potrab chiqqan qo‘ziqorinlar qayinlar ostini qoplaganida Qarg‘a qo‘shnisining mehmondo‘stligini esladi. Endi u kun bo‘yi o‘rmonda behuda izg‘ib yurmay, qayerda ko‘proq  qo‘ziqorinlar borligini kuzatadigan va qo‘shnisiga kelib aytadigan bo‘ldi. Kuzda esa Qarg‘a Olmaxonlarning ko‘proq yong‘oqlar jamg‘arib olishlariga ko‘maklashadigan bo‘­libdi.
    </p>
    </>)
}
export default Matin;