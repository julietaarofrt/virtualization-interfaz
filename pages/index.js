import Layout from 'components/Layout'
import Profile from 'components/Profile'

export default function Home ({ datosPersonales }) {
  return (
    <Layout>
      <Profile datosPersonales={datosPersonales} />
    </Layout>
  )
}

export async function getStaticProps () {
  const datosPersonales = await fetch('http://192.168.88.156:4000/student').then(res => { return res.json() })
  
  return {
    props: {
      datosPersonales
    }
  }
}
