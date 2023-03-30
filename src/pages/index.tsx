import { CountryCard, HomeContainer } from '@/styles/pages/home';
import Image from 'next/image';

export default function Home() {
  return (
    <HomeContainer>
      <CountryCard>
        <Image
          src="https://flagcdn.com/w320/br.png"
          alt=""
          width={270}
          height={158}
        />
        <div>
          <h1>Brasil</h1>
          <p>
            <span>População: </span>120.000.000
          </p>
          <p>
            <span>Região: </span>América
          </p>
          <p>
            <span>Capital: </span>Brasília
          </p>
        </div>
      </CountryCard>
      <CountryCard>
        <Image
          src="https://flagcdn.com/w320/br.png"
          alt=""
          width={270}
          height={158}
        />
        <div>
          <h1>Brasil</h1>
          <p>
            <span>População: </span>120.000.000
          </p>
          <p>
            <span>Região: </span>América
          </p>
          <p>
            <span>Capital: </span>Brasília
          </p>
        </div>
      </CountryCard>
      <CountryCard>
        <Image
          src="https://flagcdn.com/w320/br.png"
          alt=""
          width={270}
          height={158}
        />
        <div>
          <h1>Brasil</h1>
          <p>
            <span>População: </span>120.000.000
          </p>
          <p>
            <span>Região: </span>América
          </p>
          <p>
            <span>Capital: </span>Brasília
          </p>
        </div>
      </CountryCard>
      <CountryCard>
        <Image
          src="https://flagcdn.com/w320/br.png"
          alt=""
          width={270}
          height={158}
        />
        <div>
          <h1>Brasil</h1>
          <p>
            <span>População: </span>120.000.000
          </p>
          <p>
            <span>Região: </span>América
          </p>
          <p>
            <span>Capital: </span>Brasília
          </p>
        </div>
      </CountryCard>
    </HomeContainer>
  );
}
