import axios from 'axios';
import Link from 'next/link';
import styled from 'styled-components';

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

      <Users>    
        {users.map(user => {
          return (
            <div key={user.id} className="user">
              <Link href='/profile/[id]' as={`/profile/${user.id}`}>
                <a>{user.name}</a>
              </Link>
            </div>
          )
        })}
      </Users>        
    </>
  )
}

// server side render
export async function getServerSideProps() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  const data = await res.data;

  return { props: { users: data } };
};

export default Home;
