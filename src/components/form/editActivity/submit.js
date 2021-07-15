import { makePUT } from 'services/httpRequest';
import { ENDPOINT_ACTIVITIES } from 'services/settings';
/** Submit's Function for editActivityForm
 * @function submit
 * @param {Object} {name, content, image} - form's values
 * @param {Object} {id} - id of activity to edit
 * @param {function} setSubmit - customize submit function
 * @param {function} setTypeMSJ - activates an alert
 */

const submit = async ({ name, content, image, id }, setSubmit, setTypeMSJ) => {
  const results = { name, content, image };
  try {
    makePUT(`${ENDPOINT_ACTIVITIES}/${id}`, results);
    console.log(results);
    setSubmit(true);
    setTypeMSJ('success');
  } catch {}
};

export default submit;
