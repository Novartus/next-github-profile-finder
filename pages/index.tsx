import React, { useState } from "react";
import type { NextPage } from "next";
import Meta from "../components/Meta";
import UserProfile from "../components/UserProfile";

const Home: NextPage = () => {
  const [searchText, setSearchText] = useState("");
  const [userData, setUserData] = useState({
    name: "John Doe",
    github_id: "github",
    profile_url: "https://github.com",
    join_date: "2000-01-01T00:00:00Z",
    bio: "A sample GitHub profile",
    total_repo: 0,
    total_followers: 0,
    total_following: 0,
    location: "Earth",
    twitter_id: "twitter",
    blog: "https://github.com",
    avatar_url: "/assets/images/octocat.png",
    company: "@GitHub",
  });

  const handleProfileSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = await fetch(`https://api.github.com/users/${searchText}`);
    if (userData.ok === true) {
      const response = await userData.json();
      setUserData({
        name: response.name,
        github_id: response.login,
        profile_url: response.html_url,
        join_date: response.created_at,
        bio: response.bio,
        total_repo: response.public_repos,
        total_followers: response.followers,
        total_following: response.following,
        location: response.location,
        twitter_id: response.twitter_username,
        blog: response.blog,
        avatar_url: response.avatar_url,
        company: response.company,
      });
    } else {
      console.error("Something went wrong!");
    }
  };

  return (
    <>
      <Meta />

      <div className="container">
        <form className="search_bar" onSubmit={(e) => handleProfileSearch(e)}>
          <input
            id="search_input"
            type="text"
            className="search_input"
            placeholder="Search GitHub username..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="btn_primary">Search</button>
        </form>
        <UserProfile {...userData} />
      </div>
    </>
  );
};

export default Home;
