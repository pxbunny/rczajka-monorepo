import Link from "next/link";
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
          <Link href="/">
            <div className="text-4xl sm:text-5xl font-bold">Rafał Czajka</div>
            <div className="text-lg sm:text-xl pt-1 font-medium text-accent">Software Developer</div>
          </Link>
          <p className="hidden lg:inline-block max-w-72 mt-6 text-secondary">Pellentesque laoreet sit amet odio in consequat. Praesent magna risus.</p>
          <div className="mt-6 space-y-2">
            <div className="flex items-center">
              <span className="w-8 text-secondary"><IoLocationOutline size={20} /></span><span>Cracow, Poland</span>
            </div>
            <div className="flex items-center">
              <span className="w-8 text-secondary"><IoTimeOutline size={20} /></span><span>22:59<span className="text-secondary"> - same time</span></span>
            </div>
          </div>
          <nav className="mt-20 hidden lg:block">
            <ul className="list-numbered space-y-4 font-bold text-lg text-secondary">
              <li>ABOUT</li>
              <li className="text-primary">PROJECTS</li>
              <li>BLOG</li>
              <li>CONTACT</li>
            </ul>
          </nav>
        </div>
        <div className="hidden mt-6 text-secondary lg:flex items-center">
          <div className="flex space-x-6">
            <IoLogoGithub size={24} />
            <IoLogoLinkedin size={24} />
          </div>
          <div className="flex space-x-6 before:border-r before:mx-6 before:border-r-dimmed">
            <IoMoon size={24} />
            <IoLanguage size={24} />
          </div>
        </div>
      </header>
      <div className="ml-auto pt-16 sm:pt-20 pb-8 sm:pb-16 md:py-20">
        <main className="headers-numbered lg:max-w-lg space-y-16 sm:space-y-20">
          <section>
            <h1 className="font-bold text-xl">ABOUT</h1>
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
            <h1 className="font-bold text-xl">PROJECTS</h1>
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
            <h1 className="font-bold text-xl">BLOG</h1>
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
            <h1 className="font-bold text-xl">CONTACT</h1>
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
