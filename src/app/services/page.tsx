// metadata
export const metadata = {
  title: 'Our services',
};

// styles
import styles from './page.module.css';

// nextjs
import Image from 'next/image';

// ui
import ContainerGroup from '@/ui/patterns/containerGroup';
import Hero from '@/ui/layout/hero';

// data
import {getHeroData, getWebDesignData, getUXDesignData, getECommerceData, getBrandData, getDesignSystemsData} from '@/data/static/services';

export default async function MainPage() {
  const heroData = getHeroData();
  const webDesignData = getWebDesignData();
  const uxDesignData = getUXDesignData();
  const eCommerceData = getECommerceData();
  const brandData = getBrandData();
  const designSystemsData = getDesignSystemsData();

  return (
    <main role="main">
      <Hero heroData={heroData} />
      <div className="grid justify-items-center">
        <ContainerGroup containerGroupData={webDesignData} />
        <ContainerGroup containerGroupData={uxDesignData} />
        <ContainerGroup containerGroupData={eCommerceData} />
        <ContainerGroup containerGroupData={brandData} />
        <ContainerGroup containerGroupData={designSystemsData} />
      </div>
    </main>
  );
}
