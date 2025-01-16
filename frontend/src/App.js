import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/User/Homepage";
import Header from "./Components/User/Header";
import Footer from "./Components/User/Footer";
import PastEvents from "./Components/User/PastEvents";
import TeamMembers from "./Components/User/TeamMembers";
import AlumniList from "./Components/User/Alumni";
import UpcomingEvents from "./Components/User/UpcomingEvents";
import JoinUs from "./Components/User/JoinUs";
import LogIn from "./Components/Admin/Auth";
import Dashboard from "./Components/Admin/Dashboard";
import EventRegister from "./Components/User/EventRegister";
import { useUserContext } from "./context";
import { useEffect } from "react";
import { getClubData } from "./APIs/admin";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

const ProtectedRoute = ({ element }) => {
  const { user } = useUserContext();
  return user ? element : <LogIn />;
};

function App() {
  const { setClub } = useUserContext();

  useEffect(() => {
    const clubData = async () => {
      let res = await getClubData();
      setClub(res);
    };
    clubData();
  }, []);

  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Homepage />
                </Layout>
              }
            />
            <Route
              path="/past-events"
              element={
                <Layout>
                  <PastEvents />
                </Layout>
              }
            />
            <Route
              path="/team-members"
              element={
                <Layout>
                  <TeamMembers />
                </Layout>
              }
            />
            <Route
              path="/alumni"
              element={
                <Layout>
                  <AlumniList />
                </Layout>
              }
            ></Route>
            <Route
              path="/UpcomingEvents"
              element={
                <Layout>
                  <UpcomingEvents />
                </Layout>
              }
            />
            <Route
              path="/JoinUs"
              element={
                <Layout>
                  <JoinUs />
                </Layout>
              }
            />
            <Route
              path="/RegisterEvent/:eventId"
              element={
                <Layout>
                  <EventRegister />
                </Layout>
              }
            />
            <Route
              path="/login"
              element={
                <Layout>
                  <LogIn />
                </Layout>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute
                  element={
                    <Layout>
                      <Dashboard />
                    </Layout>
                  }
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
