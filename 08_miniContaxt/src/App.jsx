import UserContextProvider from "./Context/UserContextProvider";
import Profile from "./component/Profile";
import Login from "./component/Login";

function App() {
  return (
    
    <UserContextProvider>
      <h1> Click on the Vite and React logos to learn more</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
