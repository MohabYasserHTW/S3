
import { FaHome,FaUserFriends,FaSearch } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { IoNotifications } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Contacts from './Contacts';
export default function Header({id,name,setIsFriendsAwake,isFriendsAwake,contacts,setContacts,setOtherProfile}) {
    
  return (
    <header className='header'>
        <div className='header__right'>
            <FaUserFriends 
            onClick={()=>{setIsFriendsAwake(!isFriendsAwake);console.log(isFriendsAwake)}} 
            className={(isFriendsAwake)?"selected":""}/>
            <Contacts 
                setOtherProfile={setOtherProfile}
                contacts={contacts} 
                setContacts={setContacts}
                IsFriendsAwake={isFriendsAwake}
            />
            <div>
                <FaSearch />
                <input type={"text"} placeholder={"Search"} />
            </div>
        </div>
        <nav className='header__mid'>
            <Link to={"/s3"}> <FaHome /> </Link>
            <Link to={"profile"} onClick={()=>setOtherProfile({name:name,id:id})}><CgProfile/></Link>
            <Link to={"notifictions"}><IoNotifications/></Link>
        </nav>
        <div className='header__left'>
            <FiSettings / >
        </div>
    </header>
  )
}
