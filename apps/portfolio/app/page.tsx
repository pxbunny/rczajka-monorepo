import { Description, Links, Title } from '@app/components';
import { AboutSection, BlogSection, ContactSection, ProjectsSection } from '@app/sections';
import { Nav } from '@ui';

const Home = () => (
  <div className="lg:flex lg:gap-8 [&>*]:py-8 [&>*]:sm:py-12 [&>*]:xl:py-20">
    <header className="lg:sticky lg:min-h-screen lg:w-1/2 top-0 self-start flex flex-col justify-between max-lg:pb-0!">
      <div className="flex flex-col items-start space-y-8 w-full">
        <Title />
        <Description className="sm:pr-20" />
        <Nav
          className="lg:block hidden"
          items={[
            { section: 'about' },
            { section: 'projects' },
            { section: 'blog' },
            { section: 'contact' },
          ]}
        />
      </div>
      <Links className="zen" />
    </header>
    <main id="content" className="lg:w-1/2 space-y-20 md:space-y-40 [&>*]:md:scroll-mt-20 max-lg:mt-16">
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </main>
  </div>
);

export default Home;
