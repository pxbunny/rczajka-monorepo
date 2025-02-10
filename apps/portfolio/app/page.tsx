import { Description, Links, Title } from '@app/components';
import { AboutSection, BlogSection, ContactSection, ProjectsSection } from '@app/sections';
import { Nav } from '@ui';

const Home = () => (
  <div id="top" className="max-w-screen-2xl mx-auto px-5 sm:px-12 md:px-20 lg:flex lg:gap-8">
    <header className="lg:sticky lg:w-1/2 top-0 lg:min-h-screen pt-12 sm:pt-16 md:pt-20 lg:py-24 self-start flex flex-col justify-between items-start z-10">
      <div className="flex flex-col items-start">
        <Title />
        <Description className="mt-8" />
        <Nav
          className="mt-16 lg:block hidden"
          items={[
            { section: 'about', scrollToTop: true },
            { section: 'projects' },
            { section: 'blog' },
            { section: 'contact' }
          ]}
        />
      </div>
      <Links className="zen mt-10 lg:mt-0" />
    </header>
    <div className="lg:w-1/2 pt-26 pb-10 sm:pb-16 md:py-24">
      <main className="lg:space-y-20">
        <AboutSection />
        <ProjectsSection className="pt-20" />
        <BlogSection className="pt-20" />
        <ContactSection className="pt-20" />
      </main>
    </div>
  </div>
);

export default Home;
