import React from 'react';
import Colmeia from '../components/Colmeia';
import tool_icon from '../images/tool_icon.png';

export default function Home() {
  // Seus links aqui! Adicione quantos quiser
  const meusLinks = [
    {title: 'Guideline Calibração', link: 'https://inside-docupedia.bosch.com/confluence/calibrationtrainingwiki/all/en/calibration-training-wiki-home-730767881.html', relevance: 0, color: { from: '#c4d9ffff', to: '#3987eeff' }},
    {title: 'VDS', link: 'https://ens-la.bosch-vds.com/',relevance: 0, color: { from: 'rgb(80, 80, 81)', to: 'rgb(197, 198, 199)' }},
    {title: 'BD Links', link: 'https://bdweblaserviceslocations.bosch.com/MyBDLinksLA/home', relevance: 0, color: { from: '#c4d9ffff', to: '#3987eeff' }}, 
    {title: 'Cardápio', link: 'https://ctweb03.br.bosch.com/presenter/#!/presentation',relevance: 2, color: { from: 'rgb(48, 48, 210)', to: 'rgb(197, 198, 199)' }},
    {title: 'Tool Catalog', link: 'https://rb-tools.de.bosch.com/home',relevance: 0, color: { from: 'rgb(80, 80, 81)', to: 'rgb(197, 198, 199)' }}, 
    {title: 'Gestão de NFs', link: 'https://fde-nota-fiscal-34229078-edcnb0fretftb7bx.a02.azurefd.net/',relevance: 0, color: { from: 'rgb(80, 80, 81)', to: 'rgb(197, 198, 199)' }}, 
    {title: 'xORDER', link: 'https://ens-la.bosch-vds.com/',relevance: 1, color: { from: 'rgb(80, 80, 81)', to: 'rgb(197, 198, 199)' }}, 
  ];
  
  return <Colmeia links={meusLinks} />;
}