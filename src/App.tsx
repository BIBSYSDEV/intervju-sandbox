import React, { useEffect, useState } from 'react';
import dogImage from './resources/dog.jpg';
import catImage from './resources/cat.jpg';
import NameInputs from './NameInputs';
import styled from 'styled-components';
import isOdd from 'is-odd';

const StyledButton = styled.button`
  background-color: green;
`;

const StyledImage = styled.img`
  width: 200px;
`;

const StyledDescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
`;

interface FavoriteAnimal {
  image: string;
  link: string;
}

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [favoriteAnimal, setFavoriteAnimal] = useState<FavoriteAnimal | undefined>();
  const [showFavoriteAnimal, setShowFavoriteAnimal] = useState(false);

  useEffect(() => {
    if (isOdd(firstName.length + firstName.length)) {
      setFavoriteAnimal({ image: catImage, link: 'https://en.wikipedia.org/wiki/Cat' });
    } else {
      setFavoriteAnimal({ image: dogImage, link: 'https://en.wikipedia.org/wiki/Dog' });
    }
  }, [firstName]);

  function showFavoriteAnimalClick() {
    setShowFavoriteAnimal(true);
  }

  return (
    <div>
      <p data-testid="title">Hva er ditt favorittdyr?</p>
      <h3>Skriv inn navnet ditt og finn ut</h3>
      {showFavoriteAnimal && (
        <>
          <StyledImage alt="favorittdyret ditt" src={favoriteAnimal?.image} />
          <a href={favoriteAnimal?.link}>Les mer</a>
        </>
      )}
      <StyledDescriptionWrapper>
        <p>Fornavn</p> <p>Etternavn</p>
      </StyledDescriptionWrapper>
      <NameInputs firstName={firstName} lastName={lastName} setFirstName={setFirstName} setLastName={setLastName} />
      {!showFavoriteAnimal && (
        <StyledButton data-testid="show-animal-button" type="button" onClick={() => showFavoriteAnimalClick()}>
          Vis
        </StyledButton>
      )}
    </div>
  );
}

export default App;
