import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/User/Homepage";
import Header from "./Components/User/Header";
import Footer from "./Components/User/Footer";
import PastEvents from "./Components/User/PastEvents";
import EventDetails from "./Components/User/EventDetails";
import TeamMembers from "./Components/User/TeamMembers";
import AlumniList from "./Components/User/Alumni";

function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header></Header>
                  <Homepage></Homepage>
                  <Footer></Footer>
                </>
              }
            />
            <Route
              path="/past-events"
              element={
                <>
                  <Header></Header>
                  <PastEvents />
                  <Footer></Footer>
                </>
              }
            />

            <Route
              path="/event/:id"
              element={
                <>
                  <Header></Header>
                  <EventDetails />
                  <Footer></Footer>
                </>
              }
            />
            <Route
              path="/team-members"
              element={
                <>
                  <Header></Header>
                  <TeamMembers></TeamMembers>
                  <Footer></Footer>
                </>
              }
            ></Route>
            <Route
              path="/alumni"
              element={
                <>
                  <Header></Header>
                  <AlumniList></AlumniList>
                  <Footer></Footer>
                </>
              }
            ></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
