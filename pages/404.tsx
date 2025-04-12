import Link from 'next/link';
import { useRouter } from 'next/router';
import { ErrorStyle } from '../theme/errorStyles';

export default function Custom404() {
  const router = useRouter();

  return (
    <ErrorStyle.Container>
      <ErrorStyle.Content>
        <ErrorStyle.Title>404</ErrorStyle.Title>
        <ErrorStyle.Subtitle>Página no encontrada</ErrorStyle.Subtitle>
        <ErrorStyle.Message>
          Lo sentimos, la página que estás buscando no existe.
        </ErrorStyle.Message>
        
        <ErrorStyle.Actions>
          <ErrorStyle.Button onClick={() => router.back()}>
            Volver atrás
          </ErrorStyle.Button>
          <Link href="/" passHref>
            <ErrorStyle.Link>Ir a la página principal</ErrorStyle.Link>
          </Link>
        </ErrorStyle.Actions>
      </ErrorStyle.Content>
    </ErrorStyle.Container>
  );
}