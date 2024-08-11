import Link from 'next/link';
import Image from 'next/image';

import HorseImage from '@/public/my_right_horse.jpg';
import PSQImage from '@/public/psq.jpg';
import MPPileConfigImage from '@/public/mp_pile_config.png';
import PTEIndexImage from '@/public/pte_index.png';
import {ArrowTopRightOnSquareIcon} from '@heroicons/react/20/solid';


const ProjectsPage = () => {
  const navigateExternally = (url) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  return (
    <main
      className="main-container"
    >
      <div className="content">
        <header className="relative">Featured Projects</header>
        <div className="relative bg-translucent-background">
          <div className="group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="hover:bg-deep-blue sm:col-span-8 px-12 py-4 hover:cursor-pointer group/a" onClick={() => navigateExternally('https://www.myrighthorse.org/')}>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2 absolute right-4 opacity-0 text-gray-500 group-hover/a:opacity-100" />
              <Image className="max-h-fit rounded-lg w-auto" src={HorseImage} alt="" width="200" height="auto"></Image>
              <p className="pt-4 sm:col-span-8">
                ASPCA web app for finding horses to foster or adopt.
              </p>
            </div>
            <div className="hover:bg-deep-blue sm:col-span-8 px-12 py-4 hover:cursor-pointer group/b" onClick={() => navigateExternally('https://parentsquare.com')}>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2 absolute right-4 opacity-0 text-gray-500 group-hover/b:opacity-100" />
              <Image className="max-h-fit rounded-lg w-auto" src={PSQImage} alt="" width="200" height="auto"></Image>
              <p className="pt-4 sm:col-span-8 text-wrap">
                Archive classes and rosters automatically after school year ends (when configured)
              </p>
              <p className="pt-4 sm:col-span-8 text-wrap">
                Allow schools & districts to invite and send posts to guests
              </p>
            </div>
            <div className="grid grid-cols-8 sm:col-span-8 sm:gap-8 md:gap-4 hover:bg-deep-blue px-12 py-4 hover:cursor-pointer group/c" onClick={() => navigateExternally('https://www.magnumpiering.com/magnum-geo-app/')}>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2 absolute right-4 opacity-0 text-gray-500 group-hover/c:opacity-100" />
              <Image className="max-w-fit rounded-lg h-auto xs:col-span-4 sm:col-span-3" src={MPPileConfigImage} alt="" width="auto" height="400"></Image>
              <p className="self-center xs:col-span-4 sm:col-span-5 col-span-auto">
                Civil engineering app that allows the user to customize the load options, soil profile and pile configurations, displays whether the required capacity was achieved as well as torque graphs.
              </p>
            </div>
            <div className="grid grid-cols-8 sm:col-span-8 sm:gap-8 md:gap-4 hover:bg-deep-blue px-12 py-4 hover:cursor-pointer group/d" onClick={() => navigateExternally('https://www.plantoeat.com/welcome/')}>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2 absolute right-4 opacity-0 text-gray-500 group-hover/d:opacity-100" />
              <Image className="max-w-fit rounded-lg h-auto xs:col-span-4 sm:col-span-3" src={PTEIndexImage} alt="" width="auto" height="400"></Image>
              <p className="self-center xs:col-span-4 sm:col-span-5 col-span-auto">
                Meal planning app (Android/iOS version) that allows you to collect recipes from anywhere online, plan meals, and create an automated shopping list.
              </p>
            </div>
          </div>
          <Link
            href="/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 hover:text-interactive font-semibold md:text-lg lg:text-xl"
          >
          View All Projects
        </Link>
        </div>
      </div>
      <div className="xs:w-1/3 lg:w-1/2"></div>
    </main>
  );
};

export default ProjectsPage;
