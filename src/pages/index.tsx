import { withLayout } from '@/layout/Layout';
import { About } from '@/screens/about/about';
import Head from 'next/head';
import Image from 'next/image';



 function Home():JSX.Element {
  return (
    <About />
  );
}
export default withLayout(Home)


