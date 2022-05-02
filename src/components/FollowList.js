import { useState } from "react";
import "./css/my_styles.css";
import { ReactComponent as FollowIcon } from "../resources/assets/icon-follow.svg";

const FollowList = ({ influencer }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  const follow = (id) => {
    setIsFollowed(!isFollowed);
  };

  const unFollow = (id) => {
    setIsFollowed(!isFollowed);
  };
  return (
    <div className="influencer">
      <div className="desc">
        <img
          className="avatar"
          src={require(`../resources/${influencer.profilePicture}`)}
          alt="avatar"
        />
        <div className="d-flex justify-content-center flex-column">
          <b>@{influencer.username}</b>
          <span className="title">{influencer.name}</span>
        </div>
      </div>
      {isFollowed ? (
        <button
          className="following-button"
          onClick={() => unFollow(influencer.userId)}
        >
          Following
        </button>
      ) : (
        <button
          className="follow-button"
          onClick={() => follow(influencer.userId)}
        >
          <FollowIcon className="follow-icon" />
          Follow
        </button>
      )}
    </div>
  );
};

export default FollowList;
