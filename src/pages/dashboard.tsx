import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router.js';
import BotCreationForm from '@/components/BotCreation';
import BotList from '@/components/BotList';
import BotFilter from '@/components/BotFilter';
import styles from '../style/Home.module.css';

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [filter, setFilter] = useState({ text: '', showAuthorBots: false });

  return (
    <main className={styles.main}>
      <h1>Dashboard</h1>
      <BotFilter value={filter} onChange={setFilter} />
      <BotList name={session?.user?.name!} filter={filter} />
      <BotCreationForm />
    </main>
  );
}

export default Dashboard;