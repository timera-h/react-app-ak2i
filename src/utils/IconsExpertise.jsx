import React from 'react';
import styled from 'styled-components';
import IconNodejs from "./../Assets/img/node-js.png";
import IconReactjs from "../Assets/img/react-js.png";
import IconD3js from "../Assets/img/d3-js.png";
import IconMongodb from "../Assets/img/mongodb.png";
import IconKubernetes from "../Assets/img/kubernetes.png";
import IconDocker from "../Assets/img/docker.png";
import IconSolr from "../Assets/img/solr.png";
import IconRedis from "../Assets/img/redis.png";

export default function IconsExpertise() {

    const Container = styled.div`
        display: flex;
        width: 70vw;
        justify-content: space-around;
        align-items: center
    `;

    const Icon = styled.img`
        width: 60px;
        heght: 60px
    `;

    const IconFlex = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
    `;

    return (
        <Container>
            <IconFlex>
            <Icon src={IconNodejs} alt="Node js icon"/>
            <figcaption>Node.js</figcaption>
            </IconFlex>
            <IconFlex>
            <Icon src={IconReactjs} alt="React js icon"/>
            <figcaption>React js</figcaption>
            </IconFlex>
            <IconFlex>
            <Icon src={IconD3js} alt="D3 js icon"/>
            <figcaption>D3jS</figcaption>
        </IconFlex>
        <IconFlex>
            <Icon src={IconMongodb} alt="Mongodb icon"/>
            <figcaption>MongoDB</figcaption>
        </IconFlex>
        <IconFlex>
            <Icon src={IconKubernetes} alt="Kubernetes icon"/>
            <figcaption>Kubernetes</figcaption>
        </IconFlex>
        <IconFlex>
            <Icon src={IconDocker} alt="Docker icon"/>
            <figcaption>Docker</figcaption>
        </IconFlex>
        <IconFlex>
            <Icon src={IconSolr} alt="Solr icon"/>
            <figcaption>Solr</figcaption>
        </IconFlex>
        <IconFlex>
            <Icon src={IconRedis} alt="Redis icon"/>
            <figcaption>Redis</figcaption>
        </IconFlex>
        </Container> 
    )
}
