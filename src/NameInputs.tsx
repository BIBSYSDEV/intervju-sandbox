import React, { FC } from 'react';

interface nameInputsProps {
  firstName: string;
  lastName: string;
  setFirstName: (newName: string) => void;
  setLastName: (newName: string) => void;
}

const NameInputs: FC<nameInputsProps> = ({ firstName, lastName, setFirstName, setLastName }) => {
  function handleFirstNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLastName(event.target.value);
  }

  return (
    <>
      <input
        data-testid="first-name-input"
        type="text"
        value={firstName}
        onChange={(event) => handleFirstNameChange(event)}
      />
      <input
        data-testid="last-name-input"
        type="text"
        value={lastName}
        onChange={(event) => handleLastNameChange(event)}
      />
    </>
  );
};

export default NameInputs;
