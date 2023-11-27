// pages/index.tsx

import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage: React.FC = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div>
      {/* Your video component here */}
      <video controls width="600" height="400">
        {/* Replace the source URL with the actual URL of your video file */}
        <source src="/videos/your-video-file.mp4" type="video/mp4" />
        {/* Add additional source elements for other formats if needed */}
        Your browser does not support the video tag.
      </video>

      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
    </div>
  </Layout>
);

export default IndexPage;
