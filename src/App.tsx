import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// import { Button } from "./components/Button";
// import { User } from "./components/User/User";
import { Header } from "./components/Header/Header";
// import { Clicker } from "./components/Clicker/Clicker";
import { EmojiContainer } from "./components/Emojies/EmojiContainer";
import { List } from "./components/List/List";
import { Login } from "./pages/Login";
import { ListPosts } from "./components/PostsList/PostsList";
import { FullPost } from "./pages/FullPost";
import { Registration } from "./pages/Registration/Registration";

function App() {
  return (
    <div className="App">
      <Router/>
      {/* <Login/> */}
      {/* <Header /> */}
      {/* <Clicker /> */}
      {/* <List />  */}
      {/* <EmojiContainer/> */}
      {/* <Button text="1" disabled={true} type={"primary"} />
      <Button text="2" disabled={true} type={"secondary"} />
      <User username="Jack Sparrow" /> */}
    </div>
  );
}

export const Router = () => {
  return (  
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={'/'} exact={true} component={ListPosts}/>
        <Route path={'/register'} exact={true} component={Registration}/>
        <Route path={'/emoji'} exact={true} component={EmojiContainer}/>
        <Route path={'/login'} exact={true} component={Login}/>
        <Route path={'/post/:id'} exact={true} component={FullPost}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
