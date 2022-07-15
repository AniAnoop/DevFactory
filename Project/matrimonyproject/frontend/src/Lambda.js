import axios from "axios";

export default function App() {
  function handleClick(e) {
    const url="https://m2qb4sm1qc.execute-api.us-west-1.amazonaws.com/search"
    const data='{"name": "a"}';
    const header={}
    axios
      .post(url,data, header)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      Test
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Click Here
      </button>
    </>
  );
}
