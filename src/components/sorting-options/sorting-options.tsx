import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { useAppDispatch } from '../../hooks';
import { getSortingOption } from '../../store/other-process/selectors';
import { sortTypeSelect } from '../../store/other-process/other-process';

const sortingOptions = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

function SortingOptions(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const sortingOptionSelection = useAppSelector(getSortingOption);
  const dispatch = useAppDispatch();

  const handleSortTypeChange = (sortingOption: string) => () => {
    dispatch(sortTypeSelect(sortingOption));
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortingOptionSelection}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          isOpen ? 'places__options--opened' : ''
        }`}
      >
        {sortingOptions.map((option) => (
          <li
            key={option}
            className={`places__option ${
              sortingOptionSelection === option ? 'places__option--active' : ''
            }`}
            onClick={handleSortTypeChange(option)}
            tabIndex={0}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingOptions;
