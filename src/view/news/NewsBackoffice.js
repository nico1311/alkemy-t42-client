import React, { useEffect, useState } from 'react';
import { makeGET } from 'services/httpRequest';
import { ENDPOINT_NEWS } from 'services/settings';
import New from 'components/new/New';
import { Grid } from '@material-ui/core';

const NewsBackoffice = () => {
  const [news, setNews] = useState(['']);
  useEffect(() => {
    obtainNews();
    return () => {};
  }, []);
  const obtainNews = async () => {
    try {
      const result = await makeGET(ENDPOINT_NEWS);
      setNews(result.news);
    } catch {
      console.error('Error between obtain news');
    }
  };
  if (news.length === 0) {
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
