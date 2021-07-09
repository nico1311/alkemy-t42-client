import React, { useEffect, useState } from 'react';
import { makeGET } from 'services/httpRequest';
import { ENDPOINT_NEWS } from 'services/settings';
import New from 'components/new/New';

const NewsBackoffice = () => {
  const [news, setNews] = useState(['asdasd', 'asdasd']);
  useEffect(() => {
    obtainNews();
    return () => {};
  }, []);
  const obtainNews = async () => {
    const result = await makeGET(ENDPOINT_NEWS);

    setNews(result.news);
  };
  console.log(news);
  return (
    <div>
      {news.map((item, i) => (
        <New props={item} key={i} />
      ))}
    </div>
  );
};

export default NewsBackoffice;
