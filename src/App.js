import { useState, useEffect } from "react";
import "./App.css";
import FollowList from "./components/FollowList";
import followers from "./resources/follower-suggestions.json";

function App() {
  const postsPerPage = 10;
  let arrayForHoldingPosts = [];

  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedPosts = followers.slice(start, end);
    arrayForHoldingPosts.push(...slicedPosts);
    setPostsToShow(arrayForHoldingPosts);
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };

  return (
    <div className="container">
      <div className="row marg-out mx-auto">
        {postsToShow.map((data, i) => (
          <FollowList influencer={data} key={i} />
        ))}
        <div className="clearfix"></div>
        {postsToShow.length === postsPerPage && (
          <button className="btn btn-primary" onClick={handleShowMorePosts}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
