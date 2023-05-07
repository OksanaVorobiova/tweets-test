import { useEffect, useState, useRef, lazy } from "react";
import { getTweets } from "../../api/getTweets";
import { getDataLength } from "../../api/getDataLength";
import { Tweet } from "./Tweet/Tweet";
import { TweetsSection } from "./Tweets.styled";
import { useLocation } from "react-router-dom";
import { BackBtn } from "./BackBtn.styled";

const LoadMore = lazy(() => import("../LoadMore/LoadMore"));

const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function Tweets() {
  const [tweets, setTweets] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [page, setPage] = useState(2);
  const [length, setLength] = useState(0);
  const location = useLocation();
  const backRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
    setStatus(STATUS.PENDING);

    async function loadTweets() {
      try {
        const res = await getTweets(1);
        const length = await getDataLength();

        if (res.length > 0) {
          setTweets([...res]);
          setLength(length);
          setStatus(STATUS.RESOLVED);
        } else {
          setStatus(STATUS.IDLE);
        }
      } catch (error) {
        setStatus(STATUS.REJECTED);
      }
    }

    loadTweets();
  }, []);

  const handleLoadMore = () => {
    async function loadMore(page) {
      try {
        const res = await getTweets(page);
        setPage((page) => (page += 1));
        setTweets([...tweets, ...res]);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        console.log(error.message);
        setStatus(STATUS.REJECTED);
      }
    }

    loadMore(page);
  };

  if (status === STATUS.PENDING) {
    return <p>Loading</p>;
  } else if (status === STATUS.REJECTED) {
    return <p>Error</p>;
  } else if (status === STATUS.RESOLVED) {
    return (
      <TweetsSection>
        <BackBtn to={backRef.current}>Back</BackBtn>
        <ul>
          {tweets.map((tweet) => (
            <Tweet tweetInfo={tweet} key={tweet.id} />
          ))}
        </ul>
        {tweets.length >= 6 && tweets.length < length && (
          <LoadMore onClick={handleLoadMore} />
        )}
      </TweetsSection>
    );
  }
}
