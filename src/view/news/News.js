/**@module view/news */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { makeGET } from 'services/httpRequest';
import { ENDPOINT_NEWS } from 'services/settings';
import Entry from 'components/entries/Entry';

/**
 * Component New is a react component to render the organization news
 * @function New
 * @example
 * import New from 'view/news/News.js'
 * <New/>
 */
const New = () => {
    const [entries, setEntries] = useState({})

    useEffect(() => {
        makeGET(ENDPOINT_NEWS)
        .then(res => setEntries(res['news']))
    }, [])

    console.log(entries)

    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
            { entries?.[0] && (
                entries.map((child, i) => (
                    <Link style={{textDecoration: 'none'}} to={`/novedades/${child.id}`} key={i}>
                    <Entry entry={child}/>
                    </Link>
                ))
            )}
        </div>
    );
};

export default New;