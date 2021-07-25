/**@module view/news */
import React, { useEffect, useState } from 'react';
import { ENDPOINT_NEWS } from 'services/settings';
import { makeGET } from 'services/httpRequest';
import Entry from 'components/entries/Entry';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

/**
 * Component New is a react component to render the organization news
 * @function New
 * @example
 * import New from 'view/news/News.js'
 * <New/>
 */
const New = () => {
    const [news, setNews] = useState(null)

    useEffect(() => {
        async function getAllNews() {
            const { news } = await makeGET(ENDPOINT_NEWS)
            setNews(news)
        }
        getAllNews()
    }, [])

    if (!news) return (
        <Typography variant="h4" color="initial">Cargando...</Typography>
    )

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
        >
            {
                news.map(item => (
                    <Entry news={item} key={item.id} />
                ))
            }
        </Grid>
    )
};

export default New;