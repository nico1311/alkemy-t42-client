import React, { useEffect, useState } from 'react';
import { makeGET } from 'services/httpRequest';
import { ENDPOINT_ACTIVITIES } from 'services/settings';
import CardComponent from 'components/cardcomponent/CardComponent';

const Activity = ({ id }) => {
  const [activity, setActivity] = useState(null);
  useEffect(() => {
    getActivity(id);

    return () => {};
  }, []);

  const getActivity = async (id) => {
    const ACTIVITY = await makeGET(`${ENDPOINT_ACTIVITIES}/${id}`);
    setActivity(ACTIVITY.Activity);
  };
  return activity ? (
    <CardComponent
      title={activity.name}
      image={activity.image}
      content={activity.content}
    ></CardComponent>
  ) : null;
};

export default Activity;
