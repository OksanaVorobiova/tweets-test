import logo from "../../../images/logo.svg";
import { TweetCard } from "./Tweet.styled";
import { BgImageWrapper } from "./BgWrapper.styled";
import { InfoWrapper } from "./InfoWrapper";
import { BlocksBorder } from "./BlocksBorder.styled";
import { onFollowBtnClick } from "../../../api/followBtnClick";
import { useState } from "react";

export const Tweet = ({ tweetInfo }) => {
  const { tweets, followers, avatar, id, isFollowing } = tweetInfo;
  const [isFollowingState, setIsFollowingState] = useState(false);
  const [followersState, setFollowersState] = useState(null);

  const handleFollowClick = (e) => {
    const id = e.target.id;

    async function handleBtnClick(id) {
      try {
        const res = await onFollowBtnClick(id);
        setIsFollowingState(res.isFollowing);
        setFollowersState(res.followers);

        return { followers: res.followers, isFollowing: res.isFollowing };
      } catch (error) {
        console.log(error.message);
      }
    }

    handleBtnClick(id);
  };

  return (
    <li>
      <TweetCard>
        <BgImageWrapper>
          <img width="76" height="22" src={logo} alt="logo" />
        </BgImageWrapper>
        <BlocksBorder />
        <InfoWrapper>
          <img src={avatar} alt="avatar" />
          <p>{tweets} tweets</p>
          <p>
            {new Intl.NumberFormat("en-US").format(followersState || followers)}{" "}
            followers
          </p>
          <button
            className={isFollowing || isFollowingState ? "active" : "passive"}
            type="button"
            id={id}
            onClick={handleFollowClick}
          >
            {isFollowing || isFollowingState ? "Following" : "Follow"}
          </button>
        </InfoWrapper>
      </TweetCard>
    </li>
  );
};
