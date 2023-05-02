import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Apehletic Apparel</title>
        <meta
          name='description'
          content='Apehletic Apparel - Earn the other color'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/bigape.svg' />
      </Head>
      <main>
        <div className='logo'>
          <a href='http://instagram.com/apehletic' target='_blank'>
            <div className='image-container'>
              <Image
                src='/logo.png'
                alt='Apehletic Logo'
                layout='fill'
                objectFit='contain'
                priority
              />
            </div>
          </a>
          <h1 className='slogans'>unleash the ape</h1>
        </div>
      </main>
      <footer>
        <p>
          Coming Summer 2023 | Follow us on{' '}
          <a href='http://instagram.com/apehletic' target='_blank'>
            Instagram
          </a>{' '}
          for updates
        </p>
      </footer>
      <style jsx>{`
        .logo {
          margin-top: 2rem;
          margin-bottom: 20rem;
        }
        .image-container {
          position: relative;
          width: 70rem;
          height: 0;
          padding-bottom: 20%;
        }
        @media (max-width: 768px) {
          .image-container {
            position: relative;
            width: 20rem;
            height: 0;
            padding-bottom: 30%;
          }
        }
      `}</style>
    </>
  );
}
