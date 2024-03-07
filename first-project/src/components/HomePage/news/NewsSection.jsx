import React from "react";
import meet from "../../../assets/News/news-one.jpg";
import team from "../../../assets/News/news-two.jpg";
import strat from "../../../assets/News/news-three.jpg";
import plan from "../../../assets/News/news-four.jpg";
import NewsCard from "./NewsCard";
import comms from "../../../assets/News/comments.png";
import likes from "../../../assets/News/like.png";

const NewsPage = () => {
  const red = {
    color: "#FF0000",
  };

  return (
    <section className="bg-stone-200 p-20 flex-col flex">
      <h2
        className="font-bold text-2xl text-center pt-32 uppercase"
        style={red}
      >
        Our News & Articles
      </h2>
      <h2 className="font-bold text-4xl text-center mb-16 uppercase">
        latest blog posts
      </h2>

      <div className="align_center featured_products_list justify-evenly mb-16">
        <NewsCard
          image={meet}
          like={likes}
          iconLeft={comms}
          title="Article Title"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing....."
        />
        <NewsCard
          image={team}
          like={likes}
          iconLeft={comms}
          title="Article Title"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing....."
        />
        <NewsCard
          image={strat}
          like={likes}
          iconLeft={comms}
          title="Article Title"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing....."
        />
        <NewsCard
          image={plan}
          like={likes}
          iconLeft={comms}
          title="Article Title"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing....."
        />
      </div>
      <div className="w-64 text-center mx-auto mt-5">
        <button
          type="button"
          className="text-white w-40 py-2 justify-center rounded-md bg-stone-950 font-bold"
        >
          Read more
        </button>
      </div>
    </section>
  );
};

export default NewsPage;
