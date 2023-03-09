import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { LabelFilter, InputFilter } from './FilterContacts.styled';

const FilterContacts = () => {
  const dispatch = useDispatch();

  const changeFilter = useCallback(
    e => {
      dispatch(setFilter(e.target.value));
    },
    [dispatch]
  );
  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        name="filter"
        onChange={changeFilter}
      ></InputFilter>
    </LabelFilter>
  );
};

export default FilterContacts;
