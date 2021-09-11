import type { NextPage } from "next";
import { FaSearch } from "react-icons/fa";
import Meta from "../components/Meta";
import UserProfile from "../components/UserProfile";

const Home: NextPage = () => {
  return (
    <>
      <Meta />

      <div className="container">
        <form className="search_bar">
          <label className="search_icon">
            <FaSearch
              style={{
                color: "#ffff",
              }}
            />
          </label>
          <input
            id="search-input"
            type="text"
            placeholder="Search GitHub username..."
          />
          <button className="btn_primary">Search</button>
        </form>
      </div>
    </>
  );
};

export default Home;
