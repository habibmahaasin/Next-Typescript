import { GetStaticProps, NextPage } from 'next'
import { Information,DetailData } from '../domain/entities'
import { HomeTemplate } from '../infrastructure/components/Home';
import { api } from '../infrastructure/services/service';

const Home: NextPage<{ data?: DetailData[] }> = ({ data }) => {
  return (
    <>
      <HomeTemplate data={data} />
    </>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  
  return {
    props: {
      data : await api.getAllUser(),
    }
  }
}

export default Home
