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
    <div className="max-w-screen-2xl mx-auto px-5 md:px-20 xl:px-28 2xl:px-36 lg:flex">
      <header className="lg:sticky top-0 lg:max-w-96 lg:min-h-screen pt-12 md:pt-20 lg:py-20 self-start flex flex-row lg:flex-col justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl leading-none font-bold">Rafał Czajka</h1>
          <h2 className="text-lg md:text-xl leading-none pt-2 font-medium text-accent">Software Developer</h2>
          <p className="max-w-64 md:max-w-72 mt-6 text-secondary">Pellentesque laoreet sit amet odio in consequat. Praesent magna risus.</p>
          <div className="mt-6 space-y-2">
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
        <div className="lg:mt-6 max-lg:ml-5 text-secondary flex flex-col-reverse lg:flex-row items-center max-lg:justify-end">
          <div className="flex flex-col lg:flex-row max-lg:space-y-6 lg:space-x-8 max-lg:before:border-t-2 max-lg:before:my-6 max-lg:before:opacity-30">
            <IoLogoGithub size={24} />
            <IoLogoLinkedin size={24} />
          </div>
          <div className="flex flex-col lg:flex-row max-lg:space-y-6 lg:space-x-8 lg:before:border-r lg:before:mx-8 lg:before:opacity-30">
            <IoMoon size={24} />
            <IoLanguage size={24} />
          </div>
        </div>
      </header>
      <div className="ml-auto pt-20 pb-12 md:py-20">
        <main className="lg:max-w-lg space-y-20">
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
