import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemonapi = () => {
  const [num, setNum] = useState();
  const [name, Setname] = useState();
  const [moves, setMoves] = useState();

  useEffect(() => {
    // alert("HI");

    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data.name);
      Setname(res.data.name);
      setMoves(res.data.moves.length);
    }
    getData();
  });

  return (
    <>
      <h1>You choose {num} value</h1>
      <h1>My name is {name}</h1>
      <h1>I have {moves} moves</h1>

      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};

export default Pokemonapi;
