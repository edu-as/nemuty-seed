import axios from "axios";

function Users({ users }) {
  return (
    <div key={1}>
      {users.map((user) => (
        <div key={2}>{user.name}</div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = await response.data;

  return {
    props: { users: data }, // will be passed to the page component as props
  };
}

export default Users;
