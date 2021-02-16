import React from 'react';
import ButtonExpertise from "../utils/ButtonExpertise";
import IconsExpertise from "../utils/IconsExpertise";
import SubTittle from "../Components/SubTittle";
import Paragraph from "./Paragraph";

export default function OurExpertise() {

    return (
        <section className="containerOurExpertise" id="expertise">
        <SubTittle>NOTRE EXPERTISE</SubTittle>
        <Paragraph>
          L’expérience technique et méthodologique de nos équipes permet une
          flexibilité accrue dans la gestion de projets.
        </Paragraph>
        <article className="contentOurExpertise">
          <div className="bloc">
          <article className="ourExpertise">
            <div className="yellowCircle"></div>
            <p>
              L’expérience technique et méthodologique de nos équipes permet une
              flexibilité accrue dans la gestion de projets.
            </p>
            <p>
              L’expérience technique et méthodologique de nos équipes.
              ’expérience technique et méthodologique de nos équipes permet une
              flexibilité accrue.
            </p>
          </article>
          <ButtonExpertise />
          </div>
        <IconsExpertise />
        </article>
      </section>
    )
}
