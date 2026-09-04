import React from 'react';
import Colmeia from '../components/Colmeia';
import tool_icon from '../images/tool_icon.png';

export default function Home() {
  // Seus links aqui! Adicione quantos quiser
  const meusLinks = [
    { title: 'ToolManagement 2.0', link: 'https://caweb01.br.bosch.com/ToolMGNT/tracking', relevance: 0, color: { from: '#c4d9ffff', to: '#3987eeff' }, image: tool_icon },

  ];
  
  return <Colmeia links={meusLinks} />;
}