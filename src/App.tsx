import { Search } from "./components/search";
import { Box } from "./components/box";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = () => {
    fetch("https://random-data-api.com/api/v2/users?size=30")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log("erro: " + err));
  };

  return (
    <div className=" flex items-center flex flex-col h-[100%] w-max-[350px]">
      <Search search={search} setSearch={setSearch} />

      {users
        .filter((user) =>
          user.first_name.toLowerCase().includes(search.toLowerCase())
        )
        .map((user) => (
          <Box key={user.first_name} user={user} />
        ))}
    </div>
  );
}

export default App;
