import { Description, Links, Title } from '@app/components';
import { AboutSection, BlogSection, ContactSection, ProjectsSection } from '@app/sections';
import { Nav } from '@ui';

const Home = () => (
  <div className="max-w-screen-xl mx-auto px-5 sm:px-12 lg:flex lg:gap-8">
    <header className="lg:sticky lg:w-1/2 top-0 lg:min-h-screen pt-12 sm:pt-16 md:pt-20 lg:py-24 self-start flex flex-col justify-between items-start z-10">
      <div className="flex flex-col items-start space-y-8 w-full">
        <Title />
        <Description className="sm:pr-20" />
        <Nav
          className="lg:block hidden"
          items={[
            { section: 'about' },
            { section: 'projects' },
            { section: 'blog' },
            { section: 'contact' }
          ]}
        />
      </div>
      <Links className="zen" />
    </header>
    <main id="content" className="lg:w-1/2 pt-20 pb-10 sm:pb-16 md:py-24 space-y-20 md:space-y-40 *:md:scroll-mt-24">
      <AboutSection className="" />
      <ProjectsSection className="" />
      <BlogSection className="" />
      <ContactSection className="" />
    </main>
  </div>
);

export default Home;
