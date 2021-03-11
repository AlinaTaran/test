import s from "./Filter.module.css";

const Filter = ({ filter, setFilter }) => {
  const changeFilter = (event) => {
    switch (event.target.name) {
      case "name":
        setFilter({ ...filter, name: event.target.value });
        break;
      case "lastname":
        setFilter({ ...filter, lastname: event.target.value });
        break;
      case "age":
        setFilter({ ...filter, age: Number(event.target.value) });
        break;
      case "sex-female":
        setFilter((prevState) => {
          return {
            ...prevState,
            sex: { ...prevState.sex, f: !prevState.sex.f },
          };
        });
        break;
      case "sex-male":
        setFilter((prevState) => {
          return {
            ...prevState,
            sex: { ...prevState.sex, m: !prevState.sex.m },
          };
        });
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="name">Имя:</label>
        <input
          className={s.input__text}
          onChange={changeFilter}
          type="text"
          name="name"
          id="name"
          value={filter.name}
        />
      </div>
      <div className={s.input}>
        <label htmlFor="lastname">Фамилия:</label>
        <input
          className={s.input__text}
          onChange={changeFilter}
          type="text"
          name="lastname"
          id="lastname"
          value={filter.lastname}
        />
      </div>
      <div className={s.input}>
        <label htmlFor="age">Возраст:</label>
        <input
          className={s.input__text}
          onChange={changeFilter}
          value={filter.age}
          type="text"
          id="age"
          name="age"
        />
      </div>
      <div>
        <label htmlFor="">Пол: </label>
        <div className={s.wrapper__checkbox}>
          <div>
            <label htmlFor="female">Женский:</label>
            <input
              name="sex-female"
              id="female"
              onChange={changeFilter}
              type="checkbox"
              checked={filter.sex.f}
            />
          </div>
          <div>
            <label htmlFor="male">Мужской:</label>
            <input
              name="sex-male"
              id="male"
              onChange={changeFilter}
              checked={filter.sex.m}
              type="checkbox"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
