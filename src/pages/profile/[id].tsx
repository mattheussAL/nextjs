/** 
 * Rota dinâmica [id].tsx
 * Necessita do getStaticPaths
*/
import axios from 'axios'

function Profile({ user }) {
 return (
  <div className="user-info">
   <h1>{user.id}</h1>
   <p>{user.name}</p>
   <p>{user.username}</p>
  </div>
 )
}

// SSG Static Site Generation
export async function getStaticProps(ctx) {
 // Obtenção do valor passado na url
 const res = await axios.get(
  'https://jsonplaceholder.typicode.com/users',
  { params: { id: ctx.params.id} }
 )

 const user = await res.data[0]

 return { props: { user } }
}

export async function getStaticPaths() {
 return {
  paths: [
   {params: {}}
  ],
  fallback: false
 }
}

export default Profile