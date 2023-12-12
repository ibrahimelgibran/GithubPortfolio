import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>
        {title
          ? `${title} - Github (@ibrahimelgibran)`
          : "Github ibrahimelgibran"}
      </title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Github - Ibrahim El Gibran",
  description:
    "I create appearance github, connect api with my github and more connect respository from my github",
  keywords: "github, repository, software, projects ",
};
export default Meta;
