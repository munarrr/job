import { withLayout } from '@/layout/Layout';
import { About } from '@/screens/about/about';
import { News } from '@/screens/news/News';
import { Services } from '@/screens/services/services';
import { Teams } from '@/screens/teams/teams';
import Head from 'next/head';
import Image from 'next/image';



 function Home():JSX.Element {
  return (
    <div>
      <About />
      <Services />
      <Teams />
      <News />
    </div>
  );
}
export default withLayout(Home)


