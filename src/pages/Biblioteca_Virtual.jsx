import React from 'react';
import Colmeia from '../components/Colmeia';

export default function Biblioteca_Virtual() {
  // Seus links aqui! Adicione quantos quiser
  const meusLinks = [
    { title: 'Science Direct', link: 'https://www.sciencedirect.com/', relevance: 0 },
    { title: 'Iee Explorer', link: 'https://ieeexplore.ieee.org/Xplore/home.jsp', relevance: 0 },
    { title: 'SAE Mobilus', link: 'https://saemobilus.sae.org/', relevance: 0 },
    { title: 'Bosch Summon', link: 'https://bosch.summon.serialssolutions.com/#!/', relevance: 0 },
    { title: 'Scholar Google', link: 'https://scholar.google.com/', relevance: 0 },
   ];
  
  return <Colmeia links={meusLinks} />;
}