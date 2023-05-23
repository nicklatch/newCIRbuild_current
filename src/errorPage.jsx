import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id='error-page'
      className='flex flex-col justify-center items-center min-h-screen p-2'
    >
      <h1 className='text-6xl mb-2'>Oops!</h1>
      <p className='text-3xl text-center'>
        Sorry, an unexpected error has occurred.
      </p>
      <p className='text-xl mb-2'>
        {`${error.status}
          ${error.statusText}`}
      </p>
      <Link to={'/'}>
        <button className='btn btn-outline'>Return Home</button>
      </Link>
    </div>
  );
}
