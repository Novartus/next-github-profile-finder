import React from "react";
import Image from "next/image";
import { getJoinedDate } from "../utils/date";

type UserProfileData = {
  name: string;
  github_id: string;
  profile_url: string;
  join_date: string;
  bio: string;
  total_repo: number;
  total_followers: number;
  total_following: number;
  location: string;
  twitter_id: string;
  avatar_url: string;
  blog: string;
  company: string;
};
function UserProfile({
  name,
  github_id,
  profile_url,
  join_date,
  bio,
  total_repo,
  total_followers,
  total_following,
  location,
  twitter_id,
  avatar_url,
  blog,
  company,
}: UserProfileData) {
  return (
    <>
      <main className="profile">
        <div className="image_container">
          <img src={avatar_url} alt="Avatar" className="avatar" />
        </div>

        <div className="profile_information">
          <div className="profile_header">
            <h1 className="profile_name">{name}</h1>
            <h3 className="profile_login">
              <a href={profile_url} className="li_text blog" target="_blank">
                @{github_id}
              </a>
            </h3>
            <p className="profile_joined_date"> {getJoinedDate(join_date)}</p>
            <h2 className="profile_bio">{bio}</h2>
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
                height="25"
                width="14"
              />
              <span className="li_text location">{location}</span>
            </li>
            <li className="li">
              <Image
                src="/assets/icons/twitter.svg"
                alt="location icon"
                className="li_icon"
                height="22"
                width="24"
              />
              <a
                href={`https://twitter.com/${twitter_id}`}
                target="_blank"
                className="li_text twitter_username"
              >
                {twitter_id}
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
              <a href={blog} target="_blank" className="li_text blog">
                {blog}
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
              <span className="li_text company">{company}</span>
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
  profile_url: "https://github.com",
  bio: "A sample GitHub profile",
  total_repo: 0,
  total_followers: 0,
  total_following: 0,
  location: "Country, Earth",
  twitter_id: "twitter",
  avatar_url: "/assets/images/octocat.png",
};

export default UserProfile;
