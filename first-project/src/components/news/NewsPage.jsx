import React from "react";
import meet from "../../assets/News/news-one.jpg";
import team from "../../assets/News/news-two.jpg";
import strat from "../../assets/News/news-three.jpg";
import plan from "../../assets/News/news-four.jpg";
import NewsCard from "./NewsCard";
import comms from "../../assets/News/comments.png";
import likes from "../../assets/News/like.png";

const NewsPage = () => {
  return (
    <section className="bg-stone-200 p-20 flex-col flex">
      <div className="feature_products">
        <h2 className="font-bold text-4xl text-center mb-10">News & Updates</h2>

        <div className="align_center featured_products_list justify-evenly mb-16">
          <NewsCard image={meet} like={likes} iconLeft={comms} />
          <NewsCard image={team} like={likes} iconLeft={comms} />
          <NewsCard image={strat} like={likes} iconLeft={comms} />
          <NewsCard image={plan} like={likes} iconLeft={comms} />
        </div>
        <div className="w-64 text-center mx-auto mt-5">
          <button
            type="button"
            className="text-white w-40 py-2 justify-center rounded-md bg-stone-950 font-bold uppercase"
          >
            click me
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
