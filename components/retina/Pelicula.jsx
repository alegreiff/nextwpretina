import Image from "next/image";
import React from "react";
import estilos from "./pelicula.module.css";

export const Pelicula = ({ film }) => {
  //console.log("REGIA", film.camposvideoDescription.poster);

  //console.log("dd", film.camposvideoDescription);
  //console.log(film.featuredImage.node.sourceUrl);
  return (
    <div className={estilos.pelicula}>
      <h4>{film.title}</h4>
      <div>
        {film.camposvideoDescription.director &&
          film.camposvideoDescription.director.map((dir, i) => (
            <span key={i}> {dir.title} </span>
          ))}
      </div>

      {/* <p dangerouslySetInnerHTML={{ __html: film.excerpt }}></p>
      <div>{film.camposvideoDescription.director[0].title}</div>
      <div>{film.camposvideoDescription.rlFechasalida}</div>

      <div>{film.camposvideoDescription.rlGeobloqueo}</div> */}
      {film.camposvideoDescription.poster && (
        <Image
          src={film.camposvideoDescription.poster.sourceUrl}
          width={230}
          height={325}
        ></Image>
      )}
    </div>
  );
};

/* 


{
          "node": {
            "title": "Kanito, la primera batalla",
            "id": "cG9zdDoyODIyNA==",
            "camposvideoDescription": {
              "director": [
                {
                  "title": "Juan Antonio Limo Giribaldi"
                }
              ],
              "rlFechasalida": "06/07/2023",
              "rlGeobloqueo": "GEO_AL"
            }
          }
        },

        MICHI DIRECTOR SEBASTIAN QUISOE
*/
