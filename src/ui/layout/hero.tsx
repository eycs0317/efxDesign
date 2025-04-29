// nextjs
import Link from 'next/link';

// ui
import Heading from '@/ui/patterns/heading';

export default function Header({heroData}) {
  return (
    <div className={heroData.className ? heroData.className + ' p-16 grid justify-items-center' : 'p-16 grid justify-items-center'}>
      <section className="hero max-w-7xl flex flex-col items-center gap-8">
        <Heading level={heroData.heading.data.level} content={heroData.heading.data.content} className={heroData.heading.data.className} />
        {(() => {
          return (heroData.subheading) ? <Heading level={heroData.subheading.data.level} content={heroData.subheading.data.content} className={heroData.subheading.data.className} /> : '';
        })()}

        {(() => {
          return (heroData.paragraph) ? <p className={heroData.paragraph.data.className}>{heroData.paragraph.data.content}</p> : '';
        })()}
        
        {(() => {
          return (heroData.footer) ? <Link href={heroData.footer.data.href} className={heroData.footer.data.className}>{heroData.footer.data.content}</Link> : '';
        })()}
      </section>
    </div>
  );
}
