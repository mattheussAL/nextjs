import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';

import styled from 'styled-components';

const UserInfo = styled.div`

`;

function Profile({ user }) {
 const router = useRouter();

 if (router.isFallback === true) {
  return (
   <h1>carregando...</h1>
  )
 }

 return (
  <UserInfo>
   <div className="info">
    <h1>{user.name}</h1>
    <button type="button">
     <Link href="/"><a>Voltar</a></Link>
    </button>
   </div>
  </UserInfo>
 )
}

// SSG Static Site Generation
export const getStaticProps: GetStaticProps = async (ctx) => {
 // Obtenção do valor passado na url
 const res = await axios.get(
  'https://jsonplaceholder.typicode.com/users',
  { params: { id: ctx.params.id } }
 );
 
 const user = await res.data[0];

 await new Promise((res) => setTimeout(res, 1000))

 return { props: { user } };
}

export async function getStaticPaths() {
 const res = await axios.get('https://jsonplaceholder.typicode.com/users');
 const user = res.data;

 // Obtenção de todos id´s de user
 const paths = user.map(user => {
  return { params: { id: String(user.id) } }
 })

 return {
  // valores que podem ser recebidos na url
  paths: paths,
  /** 
   * fallback como false, evita que outros params além dos
   * que foram passados de forma statica sejam acessados. 
   * 
   * fallback como true, faz com que outros possam ser 
   * acessados.
   * 
   * OBS: Visualizar devtools > network 
   * 
   * */
  fallback: true
 }
}

export default Profile