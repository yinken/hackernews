import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactTimeAgo from "react-time-ago";

// Helpers
import { getNewsComments } from "../../helpers/getNews";

export const Comment = ({ comment, isReply }) => {
  const { text, by, time } = comment;
  const [replies, setReplies] = useState([]);
  const [showReplies, setShowReplies] = useState(false);

  useEffect(() => {
    if (comment.kids?.length) {
      const promises = [];

      comment.kids.forEach((item) => {
        promises.push(getNewsComments(item));
      });

      Promise.all(promises).then((replies) => {
        setReplies(
          replies.map((reply) => {
            return reply.data;
          })
        );
      });
    }
  }, [comment]);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  const renderReplies = (replies) => {
    return replies.map((reply, index) => {
      return <Comment comment={reply} key={index} isReply={true} />;
    });
  };

  const containerClassNames = ["p-2", "overflow-hidden"];
  const paragraphClassNames = ["text-xs"];

  if (isReply) {
    containerClassNames.push("ml-8");
    paragraphClassNames.push("");
  }

  return (
    <>
      <div className={containerClassNames.join(" ")}>
        <div>
          <span>{by}</span>

          <span className={["text-xs", "ml-2"].join(" ")}>
            <ReactTimeAgo date={new Date(time * 1000)} locale="en-US" />
          </span>

          {replies.length > 0 && (
            <button
              className={["text-xs", "ml-2", "hover:pointer"].join(" ")}
              onClick={() => toggleReplies()}
            >
              {showReplies ? "[ - ]" : `show ${replies.length} more`}
            </button>
          )}
        </div>

        <p
          className={paragraphClassNames.join(" ")}
          dangerouslySetInnerHTML={{ __html: text }}
        ></p>
        {replies.length > 0 && (showReplies ? renderReplies(replies) : null)}
      </div>
    </>
  );
};

Comment.defaultProps = {
  isReply: false,
};

Comment.propTypes = {
  isReply: PropTypes.bool,
  comment: PropTypes.object,
};
