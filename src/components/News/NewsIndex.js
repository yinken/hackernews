import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Components
import { NewsItem } from "./NewsItem";

// Helpers
import { getNewsItems, getNewsDetails } from "../../helpers/getNews";

export const NewsIndex = ({ limit }) => {
  const [newsItems, setNewsItems] = useState([]);
  const [newsDetails, setNewsDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    const request = async () => {
      try {
        const rsp = await getNewsItems();
        if (rsp) {
          setNewsItems(rsp.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    request();
  }, [limit]);

  useEffect(() => {
    if (newsItems.length) {
      const promises = [];

      newsItems.splice(index, limit).forEach((item) => {
        promises.push(getNewsDetails(item));
      });

      Promise.all(promises).then((news) => {
        setNewsDetails((oldValues) => {
          return [
            ...oldValues,
            news.map((newsItem) => {
              return newsItem.data;
            }),
          ].flat();
        });

        setIsLoading(false);
      });
    }
  }, [newsItems, limit, index]);

  const increaseIndex = (value) => {
    setIndex(index + value);
  };

  const renderNews = (news) => {
    return news.map((newsItem, index) => {
      return <NewsItem key={index} index={index + 1} details={newsItem} />;
    });
  };

  return (
    <div className={[].join(" ")}>
      <div>
        <ol className={["flex", "flex-col", "w-100"].join(" ")}>
          {newsDetails.length > 0 ? (
            renderNews(newsDetails)
          ) : (
            <div className={["font-bold", "p-4", "m-4"].join(" ")}>
              Loading...
            </div>
          )}
        </ol>
      </div>
      <div>
        {newsDetails.length > 0 && (
          <button
            className={[
              "p-2",
              "m-2",
              "bg-black",
              "text-white",
              "dark:text-gray-400",
            ].join(" ")}
            onClick={() => increaseIndex(10)}
            disabled={isLoading}
          >
            {!isLoading ? "Show more" : "Loading..."}
          </button>
        )}
      </div>
    </div>
  );
};

NewsIndex.defaultProps = {
  limit: 10,
};

NewsIndex.propTypes = {
  limit: PropTypes.number,
};
