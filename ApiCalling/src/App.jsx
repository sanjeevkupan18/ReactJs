import { getPosts ,getRandomUser} from './api'
import './App.css'
import React , {useState,useEffect} from 'react'
import Postcard from './Components/Postcard';
import UserCard from './Components/UserCard';

function App() {
  const [data,setData] = useState(null);
  const [userData,setUserData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  useEffect(()=>{
    getRandomUser().then((user)=>setUserData(user.results[0]))
  },[]);

  const refresh =()=>{
    getRandomUser().then((user)=>setUserData(user.results[0]))
  }

  return (

    <div className="App">
      {userData ?<UserCard data={userData}/>:null}
      <button className='refresh-button' onClick={refresh}>Refresh User</button>

      {data?data.map((e)=> <Postcard title={e.title} body={e.body} />):<p>No Data</p>}
    </div>
  )
}

export default App
