import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  //localhost:3000
  //meetmeup.com
  return (
    <Layout>
      <Routes>
        <Route element={<AllMeetups />} exact path="/" />
        <Route element={<Favorites />} path="/favorites" />
        <Route element={<NewMeetup />} path="/newMeetup" />
      </Routes>
    </Layout>
  );
}

export default App;
