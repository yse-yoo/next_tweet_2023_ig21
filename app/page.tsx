"use client"

import { useState } from "react";
import { User, testUser } from "./models/User";
import { Tweet } from "./models/Tweet";

export default function Home() {
  //テストユーザの取得
  const [user] = useState<User>(testUser);
  const [tweets, setTweets] = useState<Tweet[]>([]);

  return (
    <div>
      <textarea className="resize-none w-full h-24 border rounded-md p-2"></textarea>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Send</button>
    </div>
  )
}
