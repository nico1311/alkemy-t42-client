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
    try {
      const result = await makeGET(ENDPOINT_NEWS);
      setNews(result.news);
      console.log(result.news);
    } catch {
      console.error('Error between obtain news');
    }
  };

  const filterNews = (id) => {
    setNews(news.filter((item) => item.id !== id));
  };

  if (news) {
    return (
      <Grid container justify='space-between'>
        {news.map((item, i) => (
          <New news={item} key={i} filterNews={filterNews} />
        ))}
      </Grid>
    );
  } else {
    return <h1>No hay noticias para mostrar.</h1>;
  }
};

export default NewsBackoffice;
