import React from 'react';
import ButtonProject from "../utils/ButtonProject";


export default function Presentation() {
    return (
        <section className="slide">
        <article className="presentationBloc">
          <h1 className="title">
            Une équipe spécialisée, <br /> Un développement{" "}
            <span className="important">sur mesure.</span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <ButtonProject />
        </article>
        <article></article>
        <article></article>
      </section>
    )
}
