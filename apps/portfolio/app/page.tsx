import { Button, DynamicIcon, Logo, Nav, Section } from '@ui';
import { IoLanguage, IoMoon } from 'react-icons/io5';

export default function Home() {
  return (
    <div id="hello" className="max-w-screen-2xl mx-auto px-5 sm:px-12 md:px-20 xl:px-28 lg:flex lg:gap-8">
      <header className="lg:sticky lg:w-1/2 top-0 lg:min-h-screen pt-8 sm:pt-16 md:pt-20 lg:py-20 self-start flex flex-col justify-between items-start z-10">
        <div className="flex flex-col items-start">
          <Logo className="text-4xl sm:text-5xl" />
          <p className="zen hidden lg:inline-block max-w-72 mt-6 text-secondary">
            Pellentesque laoreet sit amet odio in consequat. Praesent magna risus.
          </p>
          {/* <div className="mt-6 space-y-2">
              <div className="flex items-center">
                <span className="w-8 text-secondary"><IoLocationOutline size={20} /></span><span>Cracow, Poland</span>
              </div>
              <div className="flex items-center">
                <span className="w-8 text-secondary"><IoTimeOutline size={20} /></span><span>22:59<span className="text-secondary"> - same time</span></span>
              </div>
            </div> */}
          <Nav
            items={[
              { section: 'about', scrollToTop: true },
              { section: 'projects' },
              { section: 'blog' },
              { section: 'contact' }
            ]}
            className="mt-20 hidden lg:block"
          />
        </div>
        <div className="zen block-focus text-2xl hidden mt-6 text-secondary lg:flex items-center">
          <div className="flex space-x-6">
            <Button type="link" variant="icon" href="https://www.github.com/dae-ne/" target="_blank">
              <DynamicIcon set="io5" name="IoLogoGithub" />
            </Button>
            <Button type="link" variant="icon" href="https://www.github.com/dae-ne/" target="_blank">
              <DynamicIcon set="io5" name="IoLogoLinkedin" />
            </Button>
          </div>
          <div className="flex space-x-6 before:border-r before:mx-6 before:border-r-dimmed">
            <Button type="state" variant="icon" state="theme">
              <IoMoon />
            </Button>
            <Button type="state" variant="icon" state="theme">
              <IoLanguage />
            </Button>
          </div>
        </div>
      </header>
      <div className="lg:w-1/2 pt-16 sm:pt-20 pb-8 sm:pb-16 md:py-20">
        <main className="lg:space-y-20">
          <Section name="about">
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
              Etiam vestibulum lectus nec erat lobortis commodo. Maecenas sit amet ultrices mauris.
              Suspendisse id ornare ligula. Suspendisse congue, risus eget suscipit feugiat,
              lacus mauris ullamcorper purus, id semper tellus sem id nunc. Quisque molestie quam id nulla venenatis,
              eu facilisis dui gravida. Aenean eget fermentum turpis, a laoreet sapien. Quisque vitae mi sagittis,
              lacinia libero et, semper magna.
            </p>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
              Etiam vestibulum lectus nec erat lobortis commodo. Maecenas sit amet ultrices mauris.
              Suspendisse id ornare ligula. Suspendisse congue, risus eget suscipit feugiat,
              lacus mauris ullamcorper purus, id semper tellus sem id nunc. Quisque molestie quam id nulla venenatis,
              eu facilisis dui gravida. Aenean eget fermentum turpis, a laoreet sapien. Quisque vitae mi sagittis,
              lacinia libero et, semper magna.
            </p>
          </Section>
          <Section name="projects" className="pt-20">
            <div className="space-y-8">

              <div className="flex">
                <div className="shrink-0 w-28 h-20 bg-secondary"></div>
                <div className="grow ml-6 space-y-4">
                  <h2 className="font-medium leading-none">
                    My super extra project
                  </h2>
                  <p className="text-secondary text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="w-20 h-5 bg-secondary"></div>
                    <div className="w-20 h-5 bg-secondary"></div>
                    <div className="w-20 h-5 bg-secondary"></div>
                    <div className="w-20 h-5 bg-secondary"></div>
                  </div>
                </div>
              </div>

            </div>
          </Section>
          <Section name="blog" className="pt-20">
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
              Etiam vestibulum lectus nec erat lobortis commodo. Maecenas sit amet ultrices mauris.
              Suspendisse id ornare ligula. Suspendisse congue, risus eget suscipit feugiat,
              lacus mauris ullamcorper purus, id semper tellus sem id nunc. Quisque molestie quam id nulla venenatis,
              eu facilisis dui gravida. Aenean eget fermentum turpis, a laoreet sapien. Quisque vitae mi sagittis,
              lacinia libero et, semper magna.
            </p>
          </Section>
          <Section name="contact" className="pt-20">
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
              Etiam vestibulum lectus nec erat lobortis commodo. Maecenas sit amet ultrices mauris.
              Suspendisse id ornare ligula. Suspendisse congue, risus eget suscipit feugiat,
              lacus mauris ullamcorper purus, id semper tellus sem id nunc. Quisque molestie quam id nulla venenatis,
              eu facilisis dui gravida. Aenean eget fermentum turpis, a laoreet sapien. Quisque vitae mi sagittis,
              lacinia libero et, semper magna.
            </p>
          </Section>
        </main>
      </div>
    </div>
  );
}
