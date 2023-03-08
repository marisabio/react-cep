import React, { useState } from 'react';
import carinha from './carinha.gif';
import { FiSearch } from 'react-icons/fi'
import apiCep from './services/apiCep';
import { Title,SmallTitle } from './estilos/styles';

function App() {
  const [cepDigitado,setCepDigitado] = useState('');
  const [valoresCep,setValoresCep] = useState('');
  async function pesquisarCep() {
    alert('Valor Input')
    const response = await apiCep(`${cepDigitado}/json`);
    console.log(response)
    setValoresCep(response.data);
  }
  return (
    <div>
      <Title> BUSCAR <span>CEP</span> </Title>
      <img src={carinha} alt="carinha"/>
      <SmallTitle> Amo os <span>Correios</span> e <span>Códigos Postais</span>!</SmallTitle>
      <input type='text' placeholder='Digite o CEP' value={cepDigitado} onChange={(event)=>setCepDigitado(event.target.value)}></input>
      <button onClick={pesquisarCep}><FiSearch size={12}/></button>
      <p>Estado: {valoresCep.uf}<br/>
      Cidade: {valoresCep.localidade}<br/>
      Bairro: {valoresCep.bairro}<br/>
      Logradouro: {valoresCep.logradouro}</p>
    </div>
  );
}

export default App;
