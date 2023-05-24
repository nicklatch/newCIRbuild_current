const About = () => {
  return (
    <main className='min-h-full max-w-full flex flex-col items-center sm:grid sm:grid-cols-2 auto-rows-auto gap-y-20'>
      <h1 className='text-6xl col-span-full row-span-1 row-start-1 justify-self-center mt-6 font-bold'>
        About
      </h1>
      <div
        id='roots'
        className='shadow-custom shadow-primary overflow-hidden col-start-1 col-span-1 row-start-2 row-span-1 flex flex-col bg-neutral rounded-md ring-2 ring-neutral'
      >
        <h2 className='text-3xl bg-base-200 text-center p-1'>
          Stuff Goes Here
        </h2>
        <p className='text-center p-1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolores
          neque, aliquam velit consectetur optio corrupti ullam quam magnam
          facere alias excepturi quod necessitatibus iste animi itaque labore
          aperiam ipsa?
        </p>
      </div>
      <div
        id='labor'
        className='shadow-custom shadow-primary overflow-hidden col-start-2 col-span-1 row-start-3 row-span-1 flex flex-col bg-neutral rounded-md ring-2 ring-neutral'
      >
        <h2 className='text-3xl bg-base-200 text-center p-1'>
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
