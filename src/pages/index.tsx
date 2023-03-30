import { CountryCard, HomeContainer } from '@/styles/pages/home';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface HomeProps {
  countries: {
    name: {
      common: string;
    }
    translations: {
      por: {
        common: string;
      }
    };
    capital: string[];
    region: string;
    population: number;
    flags: {
      png: string;
      alt: string;
    }
  } []
}

export default function Home({countries}: HomeProps) {
  const router = useRouter();

  return (
    <HomeContainer>
      {countries.map((country) => (
        <CountryCard
          key={country.flags.png}
          onClick={() => router.push(`/${country.name.common}`)}
        >
          <Image
            src={country.flags.png}
            alt={country.flags.alt}
            width={270}
            height={158}
          />
          <div>
            <h1>{country.translations.por.common}</h1>
            <p>
              <span>População: </span>{country.population}
            </p>
            <p>
              <span>Região: </span>{country.region}
            </p>
            <p>
              <span>Capital: </span>{country.capital}
            </p>
          </div>
        </CountryCard>
      ))}
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const url = 'https://restcountries.com/v3.1/all?fields=name,capital,translations,region,population,flags';
  const response = await fetch(url);
  const countries = await response.json();

  return {
    props: {
      countries
    },
    revalidate: 60 * 60 * 24, // 24 hour
  };
};
