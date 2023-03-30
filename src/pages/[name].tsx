import { CountryDetailsContainer, Details } from '@/styles/pages/countryDetails';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function CountryDetails() {
  return(
    <CountryDetailsContainer>
      <Link href="/">
        <FaArrowLeft/>
        <span>Voltar</span>
      </Link>
      <Details>
        <Image
          src="https://flagcdn.com/w320/br.png"
          alt=""
          width={560}
          height={401}
        />
        <div>
          <header>
            <h1>Brasil</h1>
          </header>
          <section>
            <p>
              <span>Nome nativo: </span>Brasil
            </p>
            <p>
              <span>População: </span>120.000.000
            </p>
            <p>
              <span>Região: </span>América
            </p>
            <p>
              <span>Sub-região: </span>América do Sul
            </p>
            <p>
              <span>Capital: </span>Brasília
            </p>
            <p>
              <span>TLD: </span>.de
            </p>
            <p>
              <span>Moeda: </span>Real
            </p>
            <p>
              <span>Idioma(s): </span>Portugês
            </p>
          </section>
          <footer>
            <span>Fronteira(s):</span>
            <a href="">Teste 1</a>
            <a href="">Teste 2</a>
            <a href="">Teste 1</a>
            <a href="">Teste 2</a>
          </footer>
        </div>
      </Details>
    </CountryDetailsContainer>
  );
}