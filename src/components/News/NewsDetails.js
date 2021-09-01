import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import { NewsItem } from "../News/NewsItem";
import { Comment } from "../Comment/Comment";

// Helpers
import { getNewsComments, getNewsDetails } from "../../helpers/getNews";

// Styles
import styles from "./News.module.scss";

export const NewsDetails = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);
  const [commentDetails, setCommentDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      try {
        const rsp = await getNewsDetails(id);
        if (rsp) {
          setNews(rsp.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    request();
  }, [id]);

  useEffect(() => {
    if (news.kids?.length) {
      const promises = [];

      news.kids.forEach((item) => {
        promises.push(getNewsComments(item));
      });

      Promise.all(promises).then((comments) => {
        setCommentDetails(
          comments.map((comment) => {
            return comment.data;
          })
        );

        setIsLoading(false);
      });
    }
  }, [news]);

  const renderComments = (commentDetails) => {
    return commentDetails.map((comment, index) => {
      return <Comment comment={comment} key={index} />;
    });
  };

  return (
    <div>
      {!isLoading && (
        <div
          className={[
            styles.news,
            "m-2",
            "md:m-4",
            "rounded-md",
            "overflow-hidden",
          ].join(" ")}
        >
          <div className={[].join(" ")}>
            <NewsItem details={news} />
          </div>
          <div className={[].join(" ")}>{renderComments(commentDetails)}</div>
        </div>
      )}
    </div>
  );
};
