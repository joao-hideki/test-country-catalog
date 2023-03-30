import { CountryDetailsContainer, Details } from '@/styles/pages/countryDetails';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';

interface CountryDetailsProps {
  country: {
    name: {
      nativeName: {
        any: {
          common: string;
        };
      }
    }
    translations: {
      por: {
        common: string;
      }
    };
    capital: string[];
    region: string;
    subregion: string;
    population: number;
    flags: {
      png: string;
      alt: string;
    };
    tld: string[];
    borders: string[];
    languages: {
      any: string
    }
    currencies: {
      any: string;
    }
  }
}

export default function CountryDetails({country}: CountryDetailsProps) {
  const {isFallback} = useRouter();

  if (isFallback) return <p>Loading...</p>;

  return(
    <CountryDetailsContainer>
      <Link href="/">
        <FaArrowLeft/>
        <span>Voltar</span>
      </Link>
      <Details>
        <Image
          src={country.flags.png}
          alt={country.flags.alt}
          width={560}
          height={401}
        />
        <div>
          <header>
            <h1>{country.translations.por.common}</h1>
          </header>
          <section>
            {/* <p>
              <span>Nome nativo: </span>{(Object.values(country.name.nativeName.any))[0]}
            </p> */}
            <p>
              <span>População: </span>{country.population}
            </p>
            <p>
              <span>Região: </span>{country.region}
            </p>
            <p>
              <span>Sub-região: </span>{country.subregion}
            </p>
            <p>
              <span>Capital: </span>{country.capital}
            </p>
            <p>
              <span>TLD: </span>{country.tld}
            </p>
            {/* <p>
              <span>Moeda: </span>
            </p> */}
            <p>
              <span>Idioma(s): </span>{Object.values(country.languages)}
            </p>
          </section>
          {country.borders
            ? (
              <footer>
                <span>Fronteira(s):</span>
                {country.borders.map((border) => (
                  <a href="" key={border}>{border}</a>
                ))}
              </footer>
            ) : null
          }
        </div>
      </Details>
    </CountryDetailsContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { name: string }> = async ({
  params,
}) => {
  const url = `https://restcountries.com/v3.1/name/${params?.name}`;
  const response = await fetch(url);
  const [country] = await response.json();

  return {
    props: {
      country
    },
    revalidate: 60 * 60 * 24, // 24 hour
  };
};