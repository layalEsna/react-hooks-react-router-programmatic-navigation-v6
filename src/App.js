// import { Outlet } from "react-router-dom";
// import NavBar from "./components/NavBar";

// function App() {


//   return (
//     <div className="app">
//       <NavBar />
//       <Outlet />
//     </div>
//   );
// }

// export default App;
////oooooooo

import { Outlet, useNavigate, Navigate} from "react-router-dom";
import NavBar from "./components/NavBar";
import { useState, useEffect} from "react";


function App() {
  const [isLogedIn, setIsLogedIn]= useState(false)
const navigate = useNavigate()
  const login = () => {
  setIsLogedIn(true)
  }
  const logout = () => {
    setIsLogedIn(true)
  }

  useEffect(() => {
    if (isLogedIn) {
      navigate('/')
    } else {
      navigate('/login')
    }
  }, [isLogedIn])
  return (
    <div className="app">
      <NavBar
        logout={ logout}
      />
      {isLogedIn ? <NavBar logout={logout} />
      : <Navigate to = '/login'/>}
      <Outlet context={login } />
    </div>
  );
}

export default App;
