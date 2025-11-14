import { StrictMode ,useEffect,useState} from 'react'
import { createRoot } from 'react-dom/client'
import {Routes , Route,Link, useParams,NavLink} from 'react-router-dom'
import './App.css'
// import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

const Home=()=>{
    const [post,setPost] = useState([])
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts").then((data)=> data.json())
      .then((data) => setPost(data));
    },[])
  return <div className='post-container'>
    {
      post.map((post)=>(
        <NavLink className="post-title" style={{display:"block"}} to={`/post/${post.id}`}>{post.title}</NavLink>
      ))
    }
  </div>
}
const About=()=>{
  return <div>
    <h1>About Page</h1>
  </div>
}
const Profile=()=>{
  return <div>
    <h1>Profile Page</h1>
  </div>
}
const Setting=()=>{
  return <div>
    <h1>Setting Page</h1>
  </div>
}
const SayUser=()=>{
  const params = useParams();
  return <div>
    <h1>My name is {params.userName}</h1>
  </div>
}

const PostPage =()=>{
  const params = useParams()
  const [data ,setData]=useState(null)
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((data) => data.json())
      .then((data) => setData(data));
  },[])

  if(data===null) return <p>Loading....</p>
  return <div>
    <h1>{data.title}</h1>
    <p>{data.body}</p>
  </div>
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/user/:userName" element={<SayUser />} />
        <Route path="/post/:postId" element={<PostPage />}  />
        
        <Route path="account">
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
