// src/components/BotList.tsx
import { useState, useEffect, FC } from 'react';
import { gql } from 'graphql-tag';
import {useQuery } from '@/graphql';
import { Bot } from '@/graphql/ogm';
import BotCard from '@/components/BotCard';
import { Model, OGM } from '@neo4j/graphql-ogm';

const GET_BOTS = gql`
  query GetBots {
    bots {
      id
      name
      registeredBy {
        name
        image
      }
      conversations {
        id
      }
      
    }
  }
`;

type BotListProps = {
  name:string;
  filter: {
    text: string;
    showAuthorBots: boolean;
  };
};

const BotList: FC<BotListProps> = ({ name, filter }) => {
  const { data, loading, error } = useQuery<{ bots: typeof Bot.model[]}>(GET_BOTS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>No bots found</div>;
  }

  const filteredBots = (data.bots).filter(bot => 
    bot.username.includes(filter.text) && (!filter.showAuthorBots || bot.registeredBy.name === name)
  );
  return (
    <div>
      {filteredBots.map((bot) =>
        <BotCard key={bot.id} bot={bot} />
      )}
    </div>
  );
};

export default BotList;