import type { NextPage } from "next";
import Meta from "../components/Meta";
import UserProfile from "../components/UserProfile";

const Home: NextPage = () => {
  return (
    <>
      <Meta />

      <div className="container">
        <form className="search_bar">
          <input
            id="search_input"
            type="text"
            className="search_input"
            placeholder="Search GitHub username..."
          />
          <button className="btn_primary">Search</button>
        </form>
        <UserProfile />
      </div>
    </>
  );
};

export default Home;
