export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-36 flex">
      <header className="sticky top-0 max-w-96 min-h-screen py-20 self-start flex flex-col justify-between">
        <div>
          <h1 className="text-5xl font-bold">Rafał Czajka</h1>
          <h2 className="text-xl font-medium text-accent">Software Developer</h2>
          <p className="max-w-72 mt-6 text-secondary">Pellentesque laoreet sit amet odio in consequat. Praesent magna risus.</p>
          <div className="mt-6 space-y-4">
            <div>Cracow, Poland</div>
            <div>22:59 - same time</div>
          </div>
          <nav className="mt-20">
            <ul className="space-y-4 font-bold text-secondary">
              <li><span className="text-shadow text-[#08101B] inline-block w-7">01.</span> ABOUT</li>
              <li><span className="text-shadow text-[#08101B] inline-block w-7">02.</span> PROJECTS</li>
              <li><span className="text-shadow text-[#08101B] inline-block w-7">03.</span> BLOG</li>
              <li><span className="text-shadow text-[#08101B] inline-block w-7">04.</span> CONTACT</li>
            </ul>
          </nav>
        </div>
        <div className="mt-6 text-secondary">
          socials
        </div>
      </header>
      <main className="ml-auto py-20">
        <div className="w-[512px] space-y-20">
          <section>
            <h1 className="font-bold text-xl"><span className="text-shadow text-[#08101B] inline-block w-8">01.</span> ABOUT</h1>
            <p className="mt-6 text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
              Etiam vestibulum lectus nec erat lobortis commodo. Maecenas sit amet ultrices mauris.
              Suspendisse id ornare ligula. Suspendisse congue, risus eget suscipit feugiat,
              lacus mauris ullamcorper purus, id semper tellus sem id nunc. Quisque molestie quam id nulla venenatis,
              eu facilisis dui gravida. Aenean eget fermentum turpis, a laoreet sapien. Quisque vitae mi sagittis,
              lacinia libero et, semper magna.
            </p>
          </section>
          <section>
            <h1 className="font-bold text-xl"><span className="text-shadow text-[#08101B] inline-block w-8">02.</span> PROJECTS</h1>
            <p className="mt-6 text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
              Etiam vestibulum lectus nec erat lobortis commodo. Maecenas sit amet ultrices mauris.
              Suspendisse id ornare ligula. Suspendisse congue, risus eget suscipit feugiat,
              lacus mauris ullamcorper purus, id semper tellus sem id nunc. Quisque molestie quam id nulla venenatis,
              eu facilisis dui gravida. Aenean eget fermentum turpis, a laoreet sapien. Quisque vitae mi sagittis,
              lacinia libero et, semper magna.
            </p>
          </section>
          <section>
            <h1 className="font-bold text-xl"><span className="text-shadow text-[#08101B] inline-block w-8">03.</span> BLOG</h1>
            <p className="mt-6 text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
              Etiam vestibulum lectus nec erat lobortis commodo. Maecenas sit amet ultrices mauris.
              Suspendisse id ornare ligula. Suspendisse congue, risus eget suscipit feugiat,
              lacus mauris ullamcorper purus, id semper tellus sem id nunc. Quisque molestie quam id nulla venenatis,
              eu facilisis dui gravida. Aenean eget fermentum turpis, a laoreet sapien. Quisque vitae mi sagittis,
              lacinia libero et, semper magna.
            </p>
          </section>
          <section>
            <h1 className="font-bold text-xl"><span className="text-shadow text-[#08101B] inline-block w-8">04.</span> CONTACT</h1>
            <p className="mt-6 text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
              Etiam vestibulum lectus nec erat lobortis commodo. Maecenas sit amet ultrices mauris.
              Suspendisse id ornare ligula. Suspendisse congue, risus eget suscipit feugiat,
              lacus mauris ullamcorper purus, id semper tellus sem id nunc. Quisque molestie quam id nulla venenatis,
              eu facilisis dui gravida. Aenean eget fermentum turpis, a laoreet sapien. Quisque vitae mi sagittis,
              lacinia libero et, semper magna.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
