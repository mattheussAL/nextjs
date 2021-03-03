import axios from 'axios'
import Head from 'next/head'
import styled from 'styled-components'

interface Users {
  users: [{ 
    id: number,
    name: string
  }]
}

const Users = styled.div`
  margin-top: 1.5rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .user {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 2px;

    margin: 1rem 0;
  }
`;

function Home({ users }: Users) {
  // client side render
  return (
    <>
      <Head>
        <title>Next App</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" 
          rel="stylesheet"
        />
      </Head>

      <Users>    
        {users.map(user => {
          return (
            <div key={user.id} className="user">
              {user.name}
            </div>
          )
        })}
      </Users>        
    </>
  )
}

// server side render
export async function getServerSideProps() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  const data = await res.data

  return {
    props: { users: data }
  }
}

export default Home;
