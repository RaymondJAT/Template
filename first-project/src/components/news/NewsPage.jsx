import React from "react";
import meet from "../../assets/News/news-one.jpg";
import team from "../../assets/News/news-two.jpg";
import teams from "../../assets/News/news-three.jpg";
import NewsCard from "./NewsCard";
import comms from "../../assets/News/comments.png";
import likes from "../../assets/News/like.png";

const NewsPage = () => {
  return (
    <section className="bg-white">
      <div className="feature_products">
        <h2 className="font-bold text-4xl text-center mb-10">News & Updates</h2>

        <div className="align_center featured_products_list justify-evenly mb-16">
          <NewsCard image={meet} like={likes} iconLeft={comms} />
          <NewsCard image={team} like={likes} iconLeft={comms} />
          <NewsCard image={teams} like={likes} iconLeft={comms} />
          <NewsCard image={teams} like={likes} iconLeft={comms} />
        </div>
        <div className="w-64 text-center mx-auto mt-5">
          <button
            type="button"
            className="text-black w-40 py-2 justify-center rounded-md bg-transparent font-bold border-2 border-black uppercase"
          >
            click me
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
