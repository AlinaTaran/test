import axios from "axios";
import { useState, useEffect } from "react";

import Container from "./components/Container";
import Filter from "./components/Filter";
import ItemList from "./components/ItemList";

function App() {
  const [filter, setFilter] = useState({
    name: "",
    lastname: "",
    age: "",
    sex: { m: true, f: true },
  });
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`https://venbest-test.herokuapp.com/`);
      setItems(data);
    }
    fetchData();
  }, []);

  const getVisibleContacts = () => {
    let filteredItems = items.filter((item) => {
      if (
        item.name.toLowerCase().includes(filter.name.toLowerCase()) &&
        item.lastname.toLowerCase().includes(filter.lastname.toLowerCase()) &&
        filter.sex[item.sex]
      ) {
        return item;
      }
    });
    if (filter.age) {
      filteredItems = filteredItems.filter((item) => item.age === filter.age);
    }
    return filteredItems;
  };

  return (
    <Container>
      <Filter filter={filter} setFilter={setFilter} />
      <ItemList items={getVisibleContacts()} />
    </Container>
  );
}

export default App;
