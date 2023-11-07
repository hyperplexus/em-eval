import Head from 'next/head';
import Image from 'next/image';
import gql from 'graphql-tag';
import styles from '../style/Home.module.css';
import { SignInOut } from '../components/SignInOut';
import { UserList } from '../components/UserList';
import { User } from '@/graphql/ogm-types';
import client from '@/graphql/apollo';

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Users {
        users {
          id
          name
          accounts {
            provider
          }
        }
      }
    `,
  }).catch((e:unknown) => {
    console.error(`Unable to query our backend API: ${e}`)

    return {
      data: null
    }
  })

  return {
    props: {
      users: data?.users || null,
    },
  };
}
export default function Home({ users }:{ users: User[] }) {
  return (
  


      <main className={styles.main}>
        <h1 className={styles.title}>
            hey
        </h1>
        <UserList className={styles.users} users={users} />
      </main>


  );
}