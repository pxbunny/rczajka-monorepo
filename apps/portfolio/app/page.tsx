import { Badge, Button, DynamicIcon, Logo, Nav, Section } from '@ui';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import { IoSettingsSharp } from 'react-icons/io5';

export const Home = () => (
  <div id="hello" className="max-w-screen-2xl mx-auto px-5 sm:px-12 md:px-20 xl:px-28 lg:flex lg:gap-8">
    <header className="lg:sticky lg:w-1/2 top-0 lg:min-h-screen pt-8 sm:pt-16 md:pt-20 lg:py-20 self-start flex flex-col justify-between items-start z-10">
      <div className="flex flex-col items-start">
        <Logo className="text-4xl sm:text-6xl" />
        <p className="zen max-w-80 mt-8 text-secondary">
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
      <div className="zen block-focus text-2xl mt-8 text-secondary flex items-center">
        <div className="flex space-x-6">
          <Button type="link" variant="icon" href="https://www.github.com/dae-ne/" target="_blank">
            <DynamicIcon set="io5" name="IoLogoGithub" />
          </Button>
          <Button type="link" variant="icon" href="https://www.github.com/dae-ne/" target="_blank">
            <DynamicIcon set="io5" name="IoLogoLinkedin" />
          </Button>
          <Button type="link" variant="icon" href="https://www.github.com/dae-ne/" target="_blank">
            <DynamicIcon set="io5" name="IoLogoGithub" />
          </Button>
          <Button type="link" variant="icon" href="https://www.github.com/dae-ne/" target="_blank">
            <DynamicIcon set="io5" name="IoLogoLinkedin" />
          </Button>
        </div>
        <div className="flex space-x-6 before:border-r before:mx-6 before:border-r-dimmed">
          <Button className="transition-transform hover:rotate-90" type="state" variant="icon" state="theme">
            <IoSettingsSharp />
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

            <div className="grid grid-cols-8 gap-6">
              <div className="col-span-2">
                <Image src="/image.jpg" width={440} height={440} alt="Project" />
              </div>
              <div className="col-span-6 space-y-4">
                <h2 className="font-medium leading-none text-lg">
                  My super extra project
                </h2>
                <p className="text-secondary text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge label="Next.js" />
                  <Badge label="Tailwind" />
                  <Badge label="Sanity" />
                  <Badge label="Monorepo" />
                  <Badge label="Tailwind" />
                  <Badge label="Monorepo" />
                  <Badge label="Next.js" />
                </div>
              </div>
            </div>

            <div className="border-r border-dimmed/60">
              <div className="space-y-4">
                <h2 className="font-medium leading-none text-lg">
                  Different project
                </h2>
                <p className="text-secondary text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge label="Tailwind" />
                  <Badge label="Sanity" />
                  <Badge label="Next.js" />
                  <Badge label="Monorepo" />
                  <Badge label="Sanity" />
                </div>
              </div>
            </div>


            <div className="border-l-4 border-[#0ba1e7]/15">
              <div className="ml-6 space-y-4">
                <h2 className="font-medium leading-none text-lg">
                  YouTube browser extension
                </h2>
                <p className="text-secondary text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
                  Etiam vestibulum lectus nec erat lobortis commodo. Maecenas sit amet ultrices mauris.
                  Suspendisse id ornare ligula. Suspendisse congue, risus eget suscipit feugiat,
                  lacus mauris ullamcorper purus, id semper tellus sem id nunc.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge label="Tailwind" />
                  <Badge label="Next.js" />
                  <Badge label="Monorepo" />
                  <Badge label="Sanity" />
                  <Badge label="Next.js" />
                </div>
              </div>
            </div>

            <div className="border-l-2 bg-[#111721] border-[#0ba1e7]">
              <div className="px-6 py-4 space-y-4">
                <h2 className="font-medium leading-none text-lg">
                  YouTube browser extension
                </h2>
                <p className="text-secondary text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
                  Etiam vestibulum lectus nec erat lobortis commodo. Maecenas sit amet ultrices mauris.
                  Suspendisse id ornare ligula. Suspendisse congue, risus eget suscipit feugiat,
                  lacus mauris ullamcorper purus, id semper tellus sem id nunc.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge label="Tailwind" />
                  <Badge label="Next.js" />
                  <Badge label="Monorepo" />
                  <Badge label="Sanity" />
                  <Badge label="Next.js" />
                </div>
              </div>
            </div>

            <div className="border-l rounded-xl bg-[#111721] border-[#0ba1e7]/50">
              <div className="px-6 py-4 space-y-4">
                <h2 className="font-medium leading-none text-lg">
                  YouTube browser extension
                </h2>
                <p className="text-secondary text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
                  Etiam vestibulum lectus nec erat lobortis commodo.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge label="Tailwind" />
                  <Badge label="Next.js" />
                  <Badge label="Monorepo" />
                  <Badge label="Sanity" />
                  <Badge label="Next.js" />
                </div>
              </div>
            </div>

            <div className="border-l rounded-xl bg-[#111721] border-[#0ba1e7]/50">
              <div className="px-6 py-4 space-y-4">
                <h2 className="font-medium leading-none text-lg">
                  YouTube browser extension
                </h2>
                <p className="text-secondary text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
                  Etiam vestibulum lectus nec erat lobortis commodo.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge label="Tailwind" />
                  <Badge label="Next.js" />
                  <Badge label="Monorepo" />
                  <Badge label="Sanity" />
                  <Badge label="Next.js" />
                </div>
              </div>
            </div>

            <div className="border-l rounded-xl bg-[#111721] border-[#0ba1e7]/50">
              <div className="px-6 py-4 space-y-4">
                <div className="flex justify-between align-middle">
                  <p className="text-secondary/60 text-sm italic">
                    <span>April 1, 2021</span>
                    <span className="inline-block px-2">·</span>
                    <span>3 min read</span>
                  </p>
                  <FiExternalLink className="text-xl text-secondary/50" />
                </div>
                <h2 className="font-medium leading-none text-lg">
                  YouTube browser extension
                </h2>
                <p className="text-secondary text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
                  Etiam vestibulum lectus nec erat lobortis commodo.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge label="Tailwind" />
                  <Badge label="Next.js" />
                  <Badge label="Monorepo" />
                  <Badge label="Sanity" />
                  <Badge label="Next.js" />
                </div>
              </div>
            </div>



            <div className="rounded bg-[#111721]">
              <div className="px-6 py-4 space-y-4">
                <div className="flex justify-between align-middle">
                  <p className="text-secondary text-sm italic">
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
                {/* <div className="flex flex-wrap gap-2">
                  <Badge label="Tailwind" />
                  <Badge label="Next.js" />
                  <Badge label="Monorepo" />
                  <Badge label="Sanity" />
                  <Badge label="Next.js" />
                </div> */}
              </div>
            </div>


            <div className="border-l rounded-xl bg-[#111721] border-[#0ba1e7]/50">
              <div className="px-6 py-4 space-y-4">
                <div className="flex justify-between">
                  <p className="text-secondary/60 text-sm italic">
                    April 1, 2021
                  </p>
                  <p className="text-secondary/60 text-sm italic">
                    3 min read
                  </p>
                </div>
                <h2 className="font-medium leading-none text-lg">
                  YouTube browser extension
                </h2>
                <p className="text-secondary text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
                  Etiam vestibulum lectus nec erat lobortis commodo.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge label="Tailwind" />
                  <Badge label="Next.js" />
                  <Badge label="Monorepo" />
                  <Badge label="Sanity" />
                  <Badge label="Next.js" />
                </div>
              </div>
            </div>

            <div className="border-l rounded-xl bg-[#111721] border-[#0ba1e7]/50">
              <div className="px-6 py-4 space-y-4">
                <div className="flex justify-between">
                  <p className="text-secondary/60 text-sm italic">
                    April 1, 2021
                  </p>
                  <p className="text-secondary/60 text-sm italic">
                    3 min read
                  </p>
                </div>
                <h2 className="font-medium leading-none text-lg">
                  YouTube browser extension
                </h2>
                <p className="text-secondary text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
                  Etiam vestibulum lectus nec erat lobortis commodo.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge label="Tailwind" />
                </div>
              </div>
            </div>


            <div className="border-l rounded-xl bg-[#111721] border-[#0ba1e7]/50">
              <div className="px-6 py-4 space-y-4">
                <div className="flex justify-between">
                  <p className="text-secondary/60 text-sm italic">
                    April 1, 2021 · 3 min read
                  </p>
                  <Badge label="Tailwind" />
                </div>
                <h2 className="font-medium leading-none text-lg">
                  YouTube browser extension
                </h2>
                <p className="text-secondary text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
                  Etiam vestibulum lectus nec erat lobortis commodo.
                </p>

              </div>
            </div>

            <div className="bg-[#111721] rounded-xl">
              <div className="aspect-[12/5] rounded-t-xl overflow-hidden">
                <Image className="" src="/image.jpg" width={1040} height={1040} alt="Project" />
              </div>
              <div className="px-6 py-5 space-y-4">
                <h2 className="font-medium leading-none text-lg">
                  YouTube browser extension
                </h2>
                <p className="text-secondary text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
                  Etiam vestibulum lectus nec erat lobortis commodo. Maecenas sit amet ultrices mauris.
                  Suspendisse id ornare ligula. Suspendisse congue, risus eget suscipit feugiat,
                  lacus mauris ullamcorper purus, id semper tellus sem id nunc.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge label="Tailwind" />
                  <Badge label="Next.js" />
                  <Badge label="Monorepo" />
                  <Badge label="Sanity" />
                  <Badge label="Next.js" />
                </div>
              </div>
            </div>


            <div className="bg-[#111721] rounded-xl">
              <div className="aspect-[8/3] rounded-t-xl overflow-hidden">
                <Image className="" src="/image.jpg" width={1040} height={1040} alt="Project" />
              </div>
              <div className="px-6 py-5 space-y-4">
                <h2 className="font-medium leading-none text-lg">
                  YouTube browser extension
                </h2>
                <p className="text-secondary text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
                  Etiam vestibulum lectus nec erat lobortis commodo. Maecenas sit amet ultrices mauris.
                  Suspendisse id ornare ligula. Suspendisse congue, risus eget suscipit feugiat,
                  lacus mauris ullamcorper purus, id semper tellus sem id nunc.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge label="Tailwind" />
                  <Badge label="Next.js" />
                  <Badge label="Monorepo" />
                  <Badge label="Sanity" />
                  <Badge label="Next.js" />
                </div>
              </div>
            </div>


            <div className="bg-[#111721] rounded-xl">
              <div className="aspect-[8/3] rounded-t-xl overflow-hidden">
                <Image className="" src="/image.jpg" width={1040} height={1040} alt="Project" />
              </div>
              <div className="px-6 py-5 space-y-4">
                <h2 className="font-medium leading-none text-lg">
                  YouTube browser extension
                </h2>
                <p className="text-secondary text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
                  Etiam vestibulum lectus nec erat lobortis commodo. Maecenas sit amet ultrices mauris.
                  Suspendisse id ornare ligula. Suspendisse congue, risus eget suscipit feugiat,
                  lacus mauris ullamcorper purus, id semper tellus sem id nunc.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge label="Tailwind" />
                  <Badge label="Next.js" />
                  <Badge label="Monorepo" />
                  <Badge label="Sanity" />
                  <Badge label="Next.js" />
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

export default Home;
