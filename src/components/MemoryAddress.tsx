import { useEffect, useState } from 'react'

export default function MemoryAddress() {
  const [address, setAddress] = useState('REF: 0x00000000')

  useEffect(() => {
    const interval = setInterval(() => {
      const addr = `0x${Math.floor(Math.random() * 16 ** 8).toString(16).padStart(8, '0')}`
      setAddress('REF: ' + addr)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <h3 className="border border-white text-l md:text-2xl p-2 font-bold font-mono tracking-tight">
      {address}
    </h3>
  )
}
