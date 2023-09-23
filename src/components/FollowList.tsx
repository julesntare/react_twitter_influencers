import { useState } from "react";
import "./css/my_styles.css";
import { IPost } from "./InterfaceTypes";

interface Props {
  influencer: IPost;
}

const FollowList = ({ influencer }: Props) => {
  const [isFollowed, setIsFollowed] = useState<boolean>(false);

  const follow = (): void => {
    setIsFollowed(!isFollowed);
  };

  const unFollow = (): void => {
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
        <button className="following-button" onClick={() => unFollow()}>
          Following
        </button>
      ) : (
        <button className="follow-button" onClick={() => follow()}>
          {/* <FollowIcon className="follow-icon" /> */}
          Follow
        </button>
      )}
    </div>
  );
};

export default FollowList;
