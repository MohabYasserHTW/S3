
import { Link } from 'react-router-dom'


export default function Contacts({contacts,IsFriendsAwake,setOtherProfile}) {
  /*<div style={{backgroundImage:`url(${c.img.Background1})`}}>dasdsads</div>
  <img src={'/static/media/das.6d98b93d968d957a31b4.jpg'} alt="das"/>*/
  
  return (
    /* "id": 1,
      "userName": "Mohab",
      "password": "0116052800",
      "Name": "Mohab Yasser Rageh" */
    <aside className={(!IsFriendsAwake)?"dispNone":""} >
      {
          <ul  className="ul__contact" >
          {
            contacts.map(
              (c)=> 
              <li key={c.id} > 
                <Link to={"profile"} onClick={()=>setOtherProfile({name:c.Name,id:c.id})}>{c.Name}</Link> {c.id}
              </li>
            )
          }
          </ul>
      }  
    </aside>
  )
}
