import Link from 'next/link';
import { useRouter } from 'next/router';
import { ErrorStyle } from '../theme/errorStyles';

export default function CustomError({ statusCode = 500 }) {
  const router = useRouter();

  return (
    <ErrorStyle.Container>
      <ErrorStyle.Content>
        <ErrorStyle.Title>{statusCode}</ErrorStyle.Title>
        <ErrorStyle.Subtitle>{statusCode === 404 ? 'Página no encontrada' : 'Error en la aplicación'}</ErrorStyle.Subtitle>
        <ErrorStyle.Message>
          {statusCode === 404 ? (
            'Lo sentimos, la página que estás buscando no existe o ha sido movida.'
          ) : (
            'Lo sentimos, ha ocurrido un error en la aplicación. Por favor, intenta de nuevo más tarde.'
          )}
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
