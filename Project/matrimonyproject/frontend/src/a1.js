import axios from "axios";
import { useEffect, useState } from "react";
export default function App() {
  const [selectVal, setSelectVal] = useState("");
  const [array, setArrayFunc] = useState([
    {
      religion_id: 1,
      religion: "Christian",
    },
    {
      religion_id: 2,
      religion: "Hindu",
    },
    {
      religion_id: 3,
      religion: "Muslim",
    },
  ]);
  const handleDropdown = (e) => {
    e.preventDefault();
    setSelectVal(e.target.value);
  };

  useEffect(() => {
    const url = "select religion_id,religion from tblreligion";
    const data = {};
    const header = {};
    axios
      .post(url, data, header)
      .then((res) => {
        console.log(res.data);
        setArrayFunc(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        <button>hello</button>
      </div>
      <div>
        <select value={selectVal} onChange={(e) => handleDropdown(e)}>
          {array.map((itm, index) => {
            return <option value={itm.religion_id}>{itm.religion}</option>;
          })}
        </select>
      </div>
    </>
  );
}
