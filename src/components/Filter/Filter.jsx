import PT from 'prop-types';
import css from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter.filter);

  return (
    <label className={css.label}>
      Find contacts by name:
      <input
        type="text"
        value={filterValue}
        onChange={event => dispatch(setStatusFilter(event.currentTarget.value))}
        className={css.input}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PT.string,
};
