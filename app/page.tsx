import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

import { getCollectionProducts } from 'lib/shopify';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const homepageItems = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items'
  });
  console.log('homepageItems', homepageItems);

  return (
    <>
      {homepageItems}
      {/* @ts-expect-error Server Component */}
      <ThreeItemGrid />
      <Suspense>
        {/* @ts-expect-error Server Component */}
        <Carousel />
        <Suspense>
          {/* @ts-expect-error Server Component */}
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
