import dynamic from 'next/dynamic';
import { IconBaseProps } from 'react-icons';

export type IconProps = IconBaseProps & {
  set: IconSets;
  name: string;
};

const select = (name: string) => (mod: any) => mod[name] as React.ComponentType<IconBaseProps>;

const imports = {
  ai: (name: string) => dynamic(() => import('react-icons/ai').then(select(name))),
  bs: (name: string) => dynamic(() => import('react-icons/bs').then(select(name))),
  bi: (name: string) => dynamic(() => import('react-icons/bi').then(select(name))),
  ci: (name: string) => dynamic(() => import('react-icons/ci').then(select(name))),
  cg: (name: string) => dynamic(() => import('react-icons/cg').then(select(name))),
  di: (name: string) => dynamic(() => import('react-icons/di').then(select(name))),
  fi: (name: string) => dynamic(() => import('react-icons/fi').then(select(name))),
  fc: (name: string) => dynamic(() => import('react-icons/fc').then(select(name))),
  fa: (name: string) => dynamic(() => import('react-icons/fa').then(select(name))),
  fa6: (name: string) => dynamic(() => import('react-icons/fa6').then(select(name))),
  gi: (name: string) => dynamic(() => import('react-icons/gi').then(select(name))),
  go: (name: string) => dynamic(() => import('react-icons/go').then(select(name))),
  gr: (name: string) => dynamic(() => import('react-icons/gr').then(select(name))),
  hi: (name: string) => dynamic(() => import('react-icons/hi').then(select(name))),
  hi2: (name: string) => dynamic(() => import('react-icons/hi2').then(select(name))),
  im: (name: string) => dynamic(() => import('react-icons/im').then(select(name))),
  lia: (name: string) => dynamic(() => import('react-icons/lia').then(select(name))),
  io: (name: string) => dynamic(() => import('react-icons/io').then(select(name))),
  io5: (name: string) => dynamic(() => import('react-icons/io5').then(select(name))),
  lu: (name: string) => dynamic(() => import('react-icons/lu').then(select(name))),
  md: (name: string) => dynamic(() => import('react-icons/md').then(select(name))),
  pi: (name: string) => dynamic(() => import('react-icons/pi').then(select(name))),
  rx: (name: string) => dynamic(() => import('react-icons/rx').then(select(name))),
  ri: (name: string) => dynamic(() => import('react-icons/ri').then(select(name))),
  si: (name: string) => dynamic(() => import('react-icons/si').then(select(name))),
  sl: (name: string) => dynamic(() => import('react-icons/sl').then(select(name))),
  tb: (name: string) => dynamic(() => import('react-icons/tb').then(select(name))),
  tfi: (name: string) => dynamic(() => import('react-icons/tfi').then(select(name))),
  ti: (name: string) => dynamic(() => import('react-icons/ti').then(select(name))),
  vsc: (name: string) => dynamic(() => import('react-icons/vsc').then(select(name))),
  wi: (name: string) => dynamic(() => import('react-icons/wi').then(select(name)))
};

export type IconSets = keyof typeof imports;

export const DynamicIcon = ({ set, name, ...iconBaseProps }: IconProps) => {
  const ImportedIcon = imports[set](name);
  return <ImportedIcon {...iconBaseProps} /> ?? false;
};
