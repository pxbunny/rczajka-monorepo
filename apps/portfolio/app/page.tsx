import { Button, DynamicIcon, Logo, Nav, Section } from '@ui';
import { FiExternalLink } from 'react-icons/fi';
import { IoSettingsSharp } from 'react-icons/io5';

export const Home = () => (
  <div id="hello" className="max-w-screen-2xl mx-auto px-5 sm:px-12 md:px-20 lg:flex lg:gap-8">
    <header className="lg:sticky lg:w-1/2 top-0 lg:min-h-screen pt-8 sm:pt-16 md:pt-20 lg:py-24 self-start flex flex-col justify-between items-start z-10">
      <div className="flex flex-col items-start">
        <Logo />
        <p className="zen md:max-w-96 mt-8 text-secondary leading-loose text-sm">
          Pellentesque laoreet sit amet odio in consequat. Praesent magna risus.
          Pellentesque laoreet sit amet odio in consequat. Praesent magna risus.
        </p>
        <Nav
          items={[
            { section: 'about', scrollToTop: true },
            { section: 'projects' },
            { section: 'blog' },
            { section: 'contact' }
          ]}
          className="mt-20 hidden lg:block" />
      </div>
      <div className="zen block-focus mt-8 flex space-x-6">
        <div className="flex flex-wrap gap-2">
          <Button
            component="link"
            href="https://www.github.com/dae-ne/"
            leftIcon={<DynamicIcon set="io5" name="IoLogoGithub" />}
            rightIcon={<FiExternalLink />}
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            component="link"
            href="https://www.github.com/dae-ne/"
            leftIcon={<DynamicIcon set="io5" name="IoLogoLinkedin" />}
            rightIcon={<FiExternalLink />}
            target="_blank"
          >
            LinkedIn
          </Button>
          <Button
            component="link"
            href="https://www.github.com/dae-ne/"
            leftIcon={<IoSettingsSharp />}
            variant="secondary"
            target="_blank"
          >
            Settings
          </Button>
        </div>
      </div>
    </header>
    <div className="lg:w-1/2 pt-16 sm:pt-20 pb-8 sm:pb-16 md:py-24">
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
          <p className="text-secondary mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
            Etiam vestibulum lectus nec erat lobortis commodo. Maecenas sit amet ultrices mauris.
            Suspendisse id ornare ligula. Suspendisse congue, risus eget suscipit feugiat,
            lacus mauris ullamcorper purus, id semper tellus sem id nunc. Quisque molestie quam id nulla venenatis,
            eu facilisis dui gravida. Aenean eget fermentum turpis, a laoreet sapien. Quisque vitae mi sagittis,
            lacinia libero et, semper magna.
          </p>
        </Section>
        <Section name="projects" className="pt-20">
          <div className="space-y-10">

            <div className="rounded-xl bg-bgSecondary border border-[#ffffff10]">
              <div className="px-6 py-5 space-y-4">
                <div className="flex justify-between align-middle">
                  <p className="text-secondary text-sm">
                    <span>April 1, 2021</span>
                    <span className="inline-block px-2">·</span>
                    <span>3 min read</span>
                  </p>
                  <FiExternalLink className="text-xl text-secondary" />
                </div>
                <h2 className="font-medium leading-none text-2xl">
                  YouTube browser extension
                </h2>
                <p className="text-secondary text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
                  Etiam vestibulum lectus nec erat lobortis commodo.
                </p>
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

export default Home;
