import { useEffect, useState, useRef, lazy } from "react";
import { getTweets } from "../../api/getTweets";
import { getDataLength } from "../../api/getDataLength";
import { Tweet } from "./Tweet/Tweet";
import { Filter } from "./Filter/Filter";
import { TweetsSection } from "./Tweets.styled";
import { useLocation } from "react-router-dom";
import { BackBtn } from "./BackBtn.styled";
import { Grid } from "react-loader-spinner";
import { filterThroughRequest } from "../../api/filterTweets";

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
    loadTweets();
  }, []);

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

  async function filter(cls) {
    try {
      setStatus(STATUS.PENDING);
      setPage(1);
      const res = await filterThroughRequest(cls, 1);
      const length = await getDataLength(cls);

      if (res.length > 0) {
        setTweets([...res]);
        setLength(length);
        setPage(2);
        setStatus(STATUS.RESOLVED);
      } else {
        setStatus(STATUS.IDLE);
      }
    } catch (error) {
      setStatus(STATUS.REJECTED);
    }
  }

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

  const filterTweets = (cls) => {
    // console.log(cls);
    if (cls === "all") {
      loadTweets();
      setPage(2);
    } else if (cls === "follow") {
      filter(false);
    } else if (cls === "followings") {
      filter(true);
    }
  };

  if (status === STATUS.PENDING) {
    return (
      <TweetsSection>
        <Grid color="#471ca9" />;
      </TweetsSection>
    );
  } else if (status === STATUS.REJECTED) {
    return <p>Error</p>;
  } else if (status === STATUS.RESOLVED) {
    return (
      <TweetsSection>
        <BackBtn to={backRef.current}>Back</BackBtn>
        <Filter filterTweets={filterTweets} />
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
