import fs from 'fs'
import path from 'path'
import Image from 'next/image'

// Server component: reads the sponsor logo folder at render time and renders an
// <Image> for each file. Drop a logo into the folder and it shows up.
const DIR = 'billetter_og_om_festivalen/2026'

export default function SponsorLogos() {
  const files = fs
    .readdirSync(path.join(process.cwd(), 'public', DIR))
    .filter((f) => /\.(png|jpe?g|svg|webp)$/i.test(f))

  return files.map((file) => (
    <Image
      key={file}
      loading="lazy"
      src={`/${DIR}/${encodeURIComponent(file)}`}
      alt={file.replace(/\.[^.]+$/, '')}
      width={500}
      height={200}
      style={{ width: '100px', height: 'auto' }}
    />
  ))
}
