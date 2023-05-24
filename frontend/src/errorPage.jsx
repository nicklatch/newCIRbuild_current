import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id='error-page'
      className='flex min-h-screen flex-col items-center justify-center p-2'
    >
      <h1 className='mb-2 text-6xl'>Oops!</h1>
      <p className='text-center text-3xl'>
        Sorry, an unexpected error has occurred.
      </p>
      <p className='mb-2 text-xl'>
        {`${error.status}
          ${error.statusText}`}
      </p>
      <Link to={'/'}>
        <button className='btn-outline btn'>Return Home</button>
      </Link>
    </div>
  );
}
