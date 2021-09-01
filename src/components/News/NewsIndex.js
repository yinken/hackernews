import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Components
import { NewsItem } from "./NewsItem";
import Button from "../Button/Button";

// Helpers
import { getNewsItems, getNewsDetails } from "../../helpers/getNews";

// Styles
import styles from "./News.module.scss";
import Logo from "../Logo/Logo";

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
      <div className={[].join(" ")}>
        {newsDetails.length > 0 ? (
          <ol
            className={[
              styles.news,
              "flex",
              "flex-col",
              "w-100",
              "overflow-hidden",
              "rounded-md",
              "m-2",
              "md:m-4",
            ].join(" ")}
          >
            {renderNews(newsDetails)}
          </ol>
        ) : (
          <div
            className={[
              "fixed",
              "inset-0",
              "flex",
              "justify-center",
              "items-center",
              "p-4",
            ].join(" ")}
          >
            <Logo isSpinning={true} hasDropShadow={false} />
          </div>
        )}
      </div>
      <div className={["p-2", "md:p-4"].join(" ")}>
        {newsDetails.length > 0 && (
          <Button action={() => increaseIndex(10)}>
            {!isLoading ? "Show more" : "Loading..."}
          </Button>
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
