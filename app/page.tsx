"use client"

import { useEffect, useState } from "react";
import { User, testUser } from "./models/User";
import { Tweet, initialTweet } from "./models/Tweet";
import { getTweets, postTweet } from "./services/TweetService";
import TweetForm from "./components/tweet/TweetForm";
import TweetList from "./components/tweet/TweetList";

export default function Home() {
  //テストユーザの取得
  const [user] = useState<User>(testUser);
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    (async () => {
      if (user?.accessToken) {
        //APIからTweetデータ取得
        const data = await getTweets(user.accessToken);
        console.log(data)
        //データ設定
        setTweets(data);
      }
    })();
  }, [user])

  // Tweetの投稿処理
  const onPostTweet = async (message: string) => {
    const newTweet = await postTweet(user, message) as Tweet;
    console.log(newTweet);
    // 新しい投稿があれば、現在の投稿一覧に追加
    newTweet?.id && setTweets(currentTweets => [newTweet, ...currentTweets]);
  }

  return (
    <div>
      {
        user?.id > 0 && (
          <>
            <TweetForm onPostTweet={onPostTweet} />
            <TweetList tweets={tweets} />
          </>
        )
      }
    </div>
  )
}
