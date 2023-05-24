const About = () => {
  return (
    <main className='flex min-h-full max-w-full auto-rows-auto flex-col items-center gap-y-20 sm:grid sm:grid-cols-2'>
      <h1 className='col-span-full row-span-1 row-start-1 mt-6 justify-self-center text-6xl font-bold'>
        About
      </h1>
      <div
        id='roots'
        className='col-span-1 col-start-1 row-span-1 row-start-2 flex flex-col overflow-hidden rounded-md bg-neutral shadow-custom shadow-primary ring-2 ring-neutral'
      >
        <h2 className='bg-base-200 p-1 text-center text-3xl'>
          Stuff Goes Here
        </h2>
        <p className='p-1 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolores
          neque, aliquam velit consectetur optio corrupti ullam quam magnam
          facere alias excepturi quod necessitatibus iste animi itaque labore
          aperiam ipsa?
        </p>
      </div>
      <div
        id='labor'
        className='col-span-1 col-start-2 row-span-1 row-start-3 flex flex-col overflow-hidden rounded-md bg-neutral shadow-custom shadow-primary ring-2 ring-neutral'
      >
        <h2 className='bg-base-200 p-1 text-center text-3xl'>
          Stuff Goes Here
        </h2>
        <p className='text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat totam
          amet inventore eum sequi necessitatibus eius incidunt. Voluptates
          repudiandae eveniet minima, necessitatibus deleniti quo quaerat dolor
          incidunt, consequuntur, in ab.
        </p>
      </div>
    </main>
  );
};

export default About;
