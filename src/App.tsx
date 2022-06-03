import { useState, FC, useEffect, useCallback, useMemo } from "react";
import "./App.css";
import FollowList from "./components/FollowList";
import { IPost } from "./components/InterfaceTypes";
import followers from "./resources/follower-suggestions.json";

const App: FC = () => {
  const postsPerPage: number = 10;
  let arrayForHoldingPosts: IPost[] = useMemo(() => [], []);

  const [postsToShow, setPostsToShow] = useState<IPost[]>([]);
  const [next, setNext] = useState<number>(3);

  const loopWithSlice = useCallback(
    (start: number, end: number): void => {
      const slicedPosts: IPost[] = followers.slice(start, end);
      arrayForHoldingPosts.push(...slicedPosts);
      setPostsToShow(arrayForHoldingPosts);
    },
    [arrayForHoldingPosts]
  );

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, [loopWithSlice]);

  const handleShowMorePosts = (): void => {
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
};

export default App;
