import React, { useEffect, useState } from "react";
import { Pelicula } from "../components/retina/Pelicula";
import { getAllPeliculas } from "../lib/api";

export default function Peliculas({ allPelis: { edges } }) {
  const [cargado, setCargado] = useState(false);
  useEffect(() => {
    setCargado(true);
  }, []);
  //console.log(edges);

  if (!cargado) {
    return <h2>Cargando</h2>;
  }
  return (
    <>
      <h3>Películas</h3>
      {edges.map(({ node }) => (
        <Pelicula key={node.id} film={node}></Pelicula>
      ))}
    </>
  );
}

export async function getStaticProps({}) {
  const allPelis = await getAllPeliculas();
  console.log(allPelis);
  return {
    props: { allPelis },
  };
}
