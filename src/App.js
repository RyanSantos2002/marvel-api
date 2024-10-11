// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import md5 from 'md5'; 
import Header from './Header'; // Importando o cabeçalho
import Sidebar from './Sidebar'; // Importando a barra lateral
import CharacterCard from './CharacterCard'; // Importando o cartão do personagem
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Suas chaves da API Marvel
  const publicKey = '496e8eb908df220ccbf103bca203a496';
  const privateKey = '139f4ef56583f3eb8fab9336b66e1c0a80de33ec';

  // Gerar hash usando o timestamp, privateKey e publicKey
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey);

  useEffect(() => {
    // Fazer a requisição para a API Marvel
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters`, {
          params: {
            ts,
            apikey: publicKey,
            hash,
          },
        });
        // Aqui, estamos pegando a descrição e armazenando junto com os dados
        const charactersWithDescription = response.data.data.results.map(character => ({
          ...character,
          description: character.description || 'Sem descrição disponível.',
        }));
        setCharacters(charactersWithDescription);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []); // O array vazio faz o useEffect rodar apenas uma vez

  // Renderizar o conteúdo
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar personagens</p>;
  return (
    <div className="App">
      <Header /> {/* Cabeçalho com o logo */}
      <div className="main-container">
        <Sidebar characters={characters} /> {/* Barra lateral */}
        <div className="cards-container">
          {characters.map((character) => (
            <CharacterCard 
  key={character.id} 
  name={character.name} 
  image={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
  description={character.description} // Passando a descrição
/>

          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
