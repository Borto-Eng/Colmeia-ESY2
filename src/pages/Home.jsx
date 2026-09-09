import React from 'react';
import Colmeia from '../components/Colmeia';
import guideline_icon from '../images/guideline_icon.png';
import xorder_icon from '../images/xorder_icon.png';
import calendar from '../images/calendar.png';
import bd_links from '../images/bdlinks_icon.png';


export default function Home() {
  // Seus links aqui! Adicione quantos quiser
  const meusLinks = [
    {title: 'Guideline Calibração', link: 'https://inside-docupedia.bosch.com/confluence/calibrationtrainingwiki/all/en/calibration-training-wiki-home-730767881.html', relevance: 0, color: { from: '#c4d9ffff', to: '#3987eeff' }, image: guideline_icon },
    {title: 'VDS', link: 'https://ens-la.bosch-vds.com/',relevance: 0, color: { from: 'rgb(180, 175, 175)', to: 'rgb(197, 198, 199)' }},
    {title: 'My BD Links', link: 'https://bdweblaserviceslocations.bosch.com/MyBDLinksLA/home', relevance: 0, color: { from: '#c4d9ffff', to: '#3987eeff' }, image: bdlinks_icon }, 
    {title: 'Cardápio', link: 'https://ctweb03.br.bosch.com/presenter/#!/presentation',relevance: 2, color: { from: 'rgb(48, 48, 210)', to: 'rgb(197, 198, 199)' }},
    {title: 'Tool Catalog', link: 'https://rb-tools.de.bosch.com/home',relevance: 0, color: { from: 'rgb(237, 164, 18)', to: 'rgb(234, 226, 181)' }}, 
    {title: 'Gestão de NFs', link: 'https://fde-nota-fiscal-34229078-edcnb0fretftb7bx.a02.azurefd.net/',relevance: 0, color: { from: 'rgb(10, 77, 108)', to: 'rgb(168, 179, 190)' }}, 
    {title: 'xORDER', link: 'https://rb-xorder.bosch.com/',relevance: 1, color: { from: 'rgb(21, 175, 157)', to: 'rgb(104, 145, 150)' }, image: xorder_icon },
    {title: 'Calendário', link: '/calendar',relevance: 2, color: { from: 'rgb(4, 67, 175)', to: 'rgb(179, 179, 205)' }},
    {title: 'Biblioteca Virtual', link: '/Biblioteca_virtual',relevance: 1, color: { from: 'rgb(190, 184, 10)', to:rgb(226, 230, 177)}},
  ];
  
  return <Colmeia links={meusLinks} />;
}