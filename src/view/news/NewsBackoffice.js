import React, { useEffect, useState } from 'react';
import { makeGET } from 'services/httpRequest';
import { ENDPOINT_NEWS } from 'services/settings';
import New from 'components/new/New';
import { Grid } from '@material-ui/core';

const NewsBackoffice = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    obtainNews();
    return () => {};
  }, []);
  const obtainNews = async () => {
    const result = await makeGET(ENDPOINT_NEWS);

    setNews(result.news);
  };
  if (news === []) {
    return null;
  }
  return (
    <Grid container justify='space-between'>
      {news.map((item, i) => (
        <New props={item} key={i} />
      ))}
    </Grid>
  );
};

export default NewsBackoffice;
