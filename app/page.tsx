'use client'

import { Canvas } from 'reaflow';

export default function Home() {


  return (
    <main className="bg-white flex w-full h-full">
      <Canvas
        maxWidth={800}
        maxHeight={600}
        nodes={[
          {
            id: '1',
            text: '1'
          },
          {
            id: '2',
            text: '2'
          }
        ]}
        edges={[
          {
            id: '1-2',
            from: '1',
            to: '2'
          }
        ]}
      />
    </main>
  )
}
