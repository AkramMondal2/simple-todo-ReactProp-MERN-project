import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import axios from "axios";

const Home = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    getAll();
  }, [flag]);

  const getAll = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getTodos");
      console.log(response);
      setTodo(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = async (text) => {
    const data = {
      title: text,
    };
    try {
      setFlag(false);
      const response = await axios.post("http://localhost:3000/create", data);
      setText("");
      setFlag(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="text-center mt-4">
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          placeholder="Enter Text"
          className="border border-black p-2 w-64"
        />
        <button
          onClick={() => {
            addTodo(text);
          }}
          type="button"
          className="bg-black text-white p-2 ml-4 rounded"
        >
          ADD
        </button>
      </div>
      <Main todo={todo} getAll={getAll} />
      <Footer />
    </div>
  );
};

export default Home;
