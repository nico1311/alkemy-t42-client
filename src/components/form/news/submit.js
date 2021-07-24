/** @module Form/News */
import { addNews } from 'redux/news/actions/news';

const submit = async (values, setSubmit, id = false, dispatch) => {
  setTimeout(() => {
    console.log(values);
    dispatch(addNews(values)); //En realidad se despacha el resultado del POST, es decir, el objeto creado completo, con id created at y todo
    setSubmit(false);
  }, 2000);
};

export default submit;
