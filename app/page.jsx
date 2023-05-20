import Feed from "@components/Feed";
import React from "react";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center ">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompt</span>
      </h1>
      <p className="text-center desc">
        AI-Powered Prompt is a platform for prompting users to answer questions
        about their business.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
