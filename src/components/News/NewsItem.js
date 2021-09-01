import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SpeechBubble from "../SpeechBubble/SpeechBubble";
import ReactTimeAgo from "react-time-ago";

// Helpers
import { extractRootDomain } from "../../helpers/stringParsers";

// Styles
import styles from "./News.module.scss";

export const NewsItem = ({ details, index }) => {
  const { id, title, by, url, score, kids: comments, time } = details;

  const containerClassNames = ["flex", "p-4", "relative", "w-100", "bg-white"];
  const headlineClassNames = [
    "title",
    "hover:underline",
    "w-full",
    "text-left",
    "leading-none",
    "pb-2",
  ];

  const metaInfoClassNames = [
    "whitespace-nowrap",
    "text-xs",
    "mr-4",
    "text-gray-500",
  ];

  let Tag = "h1";

  if (index > 0) {
    containerClassNames.push(styles.newsItem);
    Tag = "h2";
  }

  return (
    <li className={containerClassNames.join(" ")}>
      {index === 0 && (
        <div
          className={[
            "text-gray-400",
            "w-10",
            "h-10",
            "mr-2",
            "flex",
            "items-center",
            "justify-center",
            "flex-shrink-0",
          ].join(" ")}
        >
          <Link className="font-bold" to="/">
            {"↩"}
          </Link>
        </div>
      )}

      <div className={["flex", "flex-wrap", "flex-auto"].join(" ")}>
        <span className={headlineClassNames.join(" ")}>
          <Tag>{title}</Tag>
        </span>
        {score && (
          <span className={metaInfoClassNames.join(" ")}>
            <strong>{score}</strong> points
          </span>
        )}
        <span className={metaInfoClassNames.join(" ")}>
          by <strong>{by}</strong>
        </span>
        <span className={metaInfoClassNames.join(" ")}>
          {<ReactTimeAgo date={new Date(time * 1000)} locale="en-US" />}
        </span>
        {url && (
          <a
            href={url}
            title={title}
            target={"_blank"}
            rel="noreferrer"
            className={[metaInfoClassNames, "link"].flat().join(" ")}
          >
            {`(${extractRootDomain(url)})`}
          </a>
        )}
      </div>

      <div className={["ml-4", "md:mr-8"].join(" ")}>
        {comments && index > 0 && (
          <SpeechBubble>
            <Link
              to={{ pathname: `/item/${id}` }}
              className={["text-xs", "hover:pointer", "text-center"].join(" ")}
            >
              {`${comments.length}`}
            </Link>
          </SpeechBubble>
        )}
      </div>
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
