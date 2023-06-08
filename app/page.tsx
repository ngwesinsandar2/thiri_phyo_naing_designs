import Image from 'next/image'
import Box from './components/Box'

export default function Home() {
  return (
    <main className="container mx-auto bg-[var(--purple)] h-screen py-8">
      <div className="w-full h-full relative">
        <Box custom_classes='' />
        <Box custom_classes='rotate-90 right-0' />
        <Box custom_classes='-rotate-90 bottom-0' />
        <Box custom_classes='rotate-180 bottom-0 right-0' />

        <div className="font-['Limelight'] text-[var(--milk)] text-5xl absolute top-1/2 -translate-y-1/2 left-[6%]">
          <h1 className=''>Hello...</h1>
          <h1 className=''>TRPN Design Practice Journey!</h1>
        </div>
      </div>
    </main>
  )
}
