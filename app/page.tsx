import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'FART!',
    },
    {
      action: 'tx',
      label: 'FART!',
      target: `${NEXT_PUBLIC_URL}/api/tx`,
      postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
    },
  ],
  image: {
    src: `https://cdnstatic.rg.ru/crop800x800/uploads/images/2023/09/08/photo_6_2023-09-08_11-30-34_8c5.jpg`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a story',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Fartcaster',
  description: 'Fartcaster',
  openGraph: {
    title: 'Fartcaster',
    description: 'Fartcaster',
    images: [`https://cdnstatic.rg.ru/crop800x800/uploads/images/2023/09/08/photo_6_2023-09-08_11-30-34_8c5.jpg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>I like to cast my farts! Lets fart together and count it!</h1>
    </>
  );
}
