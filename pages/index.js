/* eslint-disable react-hooks/rules-of-hooks */
import Card from "@/components/Card";
import styles from "@/styles/Home.module.css";
import Input from "../components/Input";
import Image from "next/image";
import React, { useState } from "react";

export async function getStaticProps() {
  const maxPokemons = 251
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();
  //add pokemon index

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });
  return {
    props: {
      pokemons: data.results,
    },
  };
}

const Home = ({ pokemons }) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredPokemon = searchValue
    ? pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    : pokemons;

  return (
    <>
      {/* <button onClick=''>More Pokemon</button> */}
      <div className={styles.container}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>
            Poke<span>Next</span>
          </h1>
          <Image
            src={"/images/pokeball.png"}
            width={"50"}
            height={"50"}
            alt={"Pokenext"}
          />
        </div>
        <Input
          value={pokemons.name}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {
        <div className={styles.pokemon_container}>
          {filteredPokemon.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      }
    </>
  );
};
export default Home;
