import PropTypes from "prop-types";

import s from "./ItemList.module.css";

const ItemList = ({ items }) => {
  return (
    <ul className={s.list}>
      {items.map(({ name, lastname, age, sex }) => (
        <li className={s.list__item} key={name}>
          <p>
            {name} {lastname}
          </p>
          <p>Возраст: {age}</p>
          <p>Пол: {sex === "m" ? "мужской" : "женский"}</p>
        </li>
      ))}
    </ul>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      sex: PropTypes.string.isRequired,
    })
  ),
};

export default ItemList;
