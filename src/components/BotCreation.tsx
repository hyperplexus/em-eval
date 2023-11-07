import { useMutation, gql } from '@apollo/client';
import { FormEvent, useState } from 'react';

const ADD_BOT = gql`
  mutation AddBot($input: BotInput!) {
    addBot(input: $input) {
      id
      username
      endpoint
    }
  }
`;

const BotCreationForm = () => {
  const [addBot, { data }] = useMutation(ADD_BOT);
  const [username, setUsername] = useState('');
  const [endpoint, setEndpoint] = useState('');
  const [personName, setPersonName] = useState('');

  const handleSubmit = (event:FormEvent) => {
    event.preventDefault();
    addBot({ variables: { input: { username, endpoint, personName } } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input value={endpoint} onChange={(e) => setEndpoint(e.target.value)} placeholder="Endpoint" />
      <input value={personName} onChange={(e) => setPersonName(e.target.value)} placeholder="Person Name" />
      <button type="submit">Create Bot</button>
    </form>
  );
};

export default BotCreationForm;
