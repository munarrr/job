import { withLayout } from '@/layout/Layout';
import { About } from '@/screens/about/about';
import { Services } from '@/screens/services/services';
import Head from 'next/head';
import Image from 'next/image';



 function Home():JSX.Element {
  return (
    <div>
      <About />
      <Services />
    </div>
  );
}
export default withLayout(Home)


