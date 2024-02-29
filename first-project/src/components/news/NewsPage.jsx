import React from "react";
import meet from "../../assets/News/news-one.jpg";
import team from "../../assets/News/news-two.jpg";
import teams from "../../assets/News/news-three.jpg";
import NewsCard from "./NewsCard";

const NewsPage = () => {
  return (
    <section className="bg-transparent">
      <div className="feature_products my-16">
        <h2 className="font-bold text-4xl text-center mb-16">News & Updates</h2>

        <div className="align_center featured_products_list justify-evenly mb-16">
          <NewsCard image={meet} seen="120" />
          <NewsCard image={team} />
          <NewsCard image={teams} />
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
