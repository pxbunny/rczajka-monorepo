import {
  IoLanguage,
  IoLocationOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMoon,
  IoTimeOutline
} from "react-icons/io5";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 sm:px-12 md:px-20 xl:px-28 2xl:px-36 lg:flex">
      <header className="lg:sticky top-0 lg:max-w-96 lg:min-h-screen pt-8 sm:pt-16 md:pt-20 lg:py-20 self-start flex flex-col justify-between">
        <div>
          <h1 className="text-4xl sm:text-5xl leading-none font-bold">Rafał Czajka</h1>
          <h2 className="text-lg sm:text-xl leading-none pt-1 font-medium text-accent">Software Developer</h2>
          <p className="hidden lg:inline-block max-w-72 mt-6 text-secondary">Pellentesque laoreet sit amet odio in consequat. Praesent magna risus.</p>
          <div className="mt-6 sm:space-x-8 lg:space-x-0 lg:space-y-2 flex lg:block flex-col sm:flex-row">
            <div className="flex items-center">
              <span className="w-8"><IoLocationOutline size={20} /></span><span>Cracow, Poland</span>
            </div>
            <div className="flex items-center">
              <span className="w-8"><IoTimeOutline size={20} /></span><span>22:59<span className="text-secondary"> - same time</span></span>
            </div>
          </div>
          <nav className="mt-20 hidden lg:block">
            <ul className="space-y-4 font-bold text-secondary">
              <li><span className="text-stroke-secondary text-bg opacity-30 inline-block w-8">01.</span> ABOUT</li>
              <li className="text-primary"><span className="text-stroke-secondary text-bg opacity-30 inline-block w-8">02.</span> PROJECTS</li>
              <li><span className="text-stroke-secondary text-bg opacity-30 inline-block w-8">03.</span> BLOG</li>
              <li><span className="text-stroke-secondary text-bg opacity-30 inline-block w-8">04.</span> CONTACT</li>
            </ul>
          </nav>
        </div>
        <div className="hidden mt-6 text-secondary lg:flex items-center">
          <div className="flex space-x-8">
            <IoLogoGithub size={24} />
            <IoLogoLinkedin size={24} />
          </div>
          <div className="flex space-x-8 before:border-r before:mx-8 before:opacity-30">
            <IoMoon size={24} />
            <IoLanguage size={24} />
          </div>
        </div>
      </header>
      <div className="ml-auto pt-16 sm:pt-20 pb-8 sm:pb-16 md:py-20">
        <main className="lg:max-w-lg space-y-16 sm:space-y-20">
          <section>
            <h1 className="font-bold text-xl"><span className="text-stroke-secondary text-bg opacity-30 inline-block w-10">01.</span> ABOUT</h1>
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
            <h1 className="font-bold text-xl"><span className="text-stroke-secondary text-bg opacity-30 inline-block w-10">02.</span> PROJECTS</h1>
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
            <h1 className="font-bold text-xl"><span className="text-stroke-secondary text-bg opacity-30 inline-block w-10">03.</span> BLOG</h1>
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
            <h1 className="font-bold text-xl"><span className="text-stroke-secondary text-bg opacity-30 inline-block w-10">04.</span> CONTACT</h1>
            <p className="mt-6 text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
              Etiam vestibulum lectus nec erat lobortis commodo. Maecenas sit amet ultrices mauris.
              Suspendisse id ornare ligula. Suspendisse congue, risus eget suscipit feugiat,
              lacus mauris ullamcorper purus, id semper tellus sem id nunc. Quisque molestie quam id nulla venenatis,
              eu facilisis dui gravida. Aenean eget fermentum turpis, a laoreet sapien. Quisque vitae mi sagittis,
              lacinia libero et, semper magna.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
