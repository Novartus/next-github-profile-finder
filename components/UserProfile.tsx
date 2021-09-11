import React from "react";
import Image from "next/image";

type UserProfileData = {
  name: string;
  github_id: string;
  join_date: string;
  bio: string;
  total_repo: number;
  total_star: number;
  total_followers: number;
  total_following: number;
  location: string;
  avatar_url: string;
};
function UserProfile({
  name,
  github_id,
  join_date,
  bio,
  total_repo,
  total_star,
  total_followers,
  total_following,
  location,
  avatar_url,
}: UserProfileData) {
  return (
    <>
      <main className="profile">
        <div className="image_container">
          <Image
            src="/assets/icons/profile.svg"
            alt="Avatar"
            className="avatar"
            height="80"
            width="80"
          />
        </div>

        <div className="profile_information">
          <div className="profile_header">
            <h1 className="profile_name">{name}</h1>
            <h2 className="profile_login">@{github_id}</h2>
            <p className="profile_joined_date">Joined {join_date}</p>
            <p className="profile_bio">{bio}</p>
          </div>

          <div className="stats_container">
            <div className="stat_box">
              <h4 className="stat_heading">Repos</h4>
              <span className="public-repos">{total_repo}</span>
            </div>
            <div className="stat_box">
              <h4 className="stat_heading">Followers</h4>
              <span className="followers">{total_followers}</span>
            </div>
            <div className="stat_box">
              <h4 className="stat_heading">Following</h4>
              <span className="following">{total_following}</span>
            </div>
          </div>

          <ul className="social_links">
            <li className="li">
              <Image
                src="/assets/icons/location.svg"
                alt="location icon"
                className="li_icon"
                height="20"
                width="14"
              />
              <span className="li_text location">{location}</span>
            </li>
            <li className="li">
              <Image
                src="/assets/icons/twitter.svg"
                alt="location icon"
                className="li_icon"
                height="20"
                width="20"
              />
              <a
                href="https://twitter.com"
                target="_blank"
                className="li_text twitter_username"
              >
                Not Available
              </a>
            </li>
            <li className="li">
              <Image
                src="/assets/icons/website.svg"
                alt="location icon"
                className="li_icon"
                height="20"
                width="20"
              />
              <a
                href="https://github.com"
                target="_blank"
                className="li_text blog"
              >
                https://github.com
              </a>
            </li>
            <li className="li">
              <Image
                src="/assets/icons/company.svg"
                alt="location icon"
                className="li_icon"
                height="20"
                width="20"
              />
              <span className="li_text company">@github</span>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

UserProfile.defaultProps = {
  name: "John Doe",
  github_id: "github",
  join_date: "01/01/2000",
  bio: "A sample GitHub profile",
  total_repo: 0,
  total_star: 0,
  total_followers: 0,
  total_following: 0,
  location: "Country, Earth",
  avatar_url: "",
};

export default UserProfile;
