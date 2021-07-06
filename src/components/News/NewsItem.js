import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Styles
import styles from "./News.module.scss";

export const NewsItem = ({ details, index }) => {
  const { id, title, by, url, score, kids: comments } = details;

  const containerClassNames = ["flex", "p-2", "m-2", "relative", "w-100"];
  const headlineClassNames = [
    "title",
    "font-bold",
    "hover:underline",
    "w-full",
    "text-left",
    "leading-none",
  ];
  let Tag = "h1";

  if (index > 0) {
    containerClassNames.push(styles.newsItem);
    Tag = "h2";
  }

  return (
    <li className={containerClassNames.join(" ")}>
      <div
        className={[
          "rounded-full",
          "bg-black",
          "text-white",
          "dark:text-gray-400",
          "w-10",
          "h-10",
          "mr-2",
          "flex",
          "items-center",
          "justify-center",
          "flex-shrink-0",
        ].join(" ")}
      >
        {index > 0 ? (
          index
        ) : (
          <Link className="font-bold" to="/">
            {"↩"}
          </Link>
        )}
      </div>

      <div className={["flex", "flex-wrap", "flex-auto"].join(" ")}>
        <span className={headlineClassNames.join(" ")}>
          <a href={url} title={title} target="_blank" rel="noreferrer">
            <Tag>{title}</Tag>
          </a>
        </span>
        <span className={["by", "text-xs", "mr-2"].join(" ")}>
          {`by ${by}`}
        </span>
        {comments && index > 0 && (
          <Link
            to={{ pathname: `/item/${id}` }}
            className={["comments", "text-xs", "mr-2", "hover:pointer"].join(
              " "
            )}
          >
            {`${comments.length} Comments`}
          </Link>
        )}
        {score && (
          <span className={["score", "whitespace-nowrap", "text-xs"].join(" ")}>
            {`👍 ${score}`}
          </span>
        )}
      </div>
      <div className={["ml-4"].join(" ")}></div>
    </li>
  );
};

NewsItem.propTypes = {
  details: PropTypes.object,
  index: PropTypes.number,
};

NewsItem.defaultProps = {
  index: 0,
};
