import Image from 'next/image'
import React from 'react'
import styles from './getArtist.module.css'

export default async function GetArtist() {
  const CSV_URL =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQzKGIN3z1j2Jf5h1bqIvXJyW4Amwt1RBz3tavgaTKXCUTnCLPFqTrZMNo9yw9fe4VhA9Qxg2bm7758/pub?gid=0&single=true&output=csv'

  const res = await fetch(CSV_URL, { next: { revalidate: 1 } })
  if (!res.ok) throw new Error('Failed to fetch sheet: ' + res.status)
  const textRaw = await res.text()
  const lines   = textRaw.trim().split(/\r?\n/)
  const headers = lines[0].split(',')
  const data    = lines.slice(1)

  const artists = data.map(line => {
    const cols = line.split(',')
    const obj  = {}
    headers.forEach((h, i) => {
      obj[h] = cols[i] || ''
    })
    return obj
  })

  
  return (
    <div className={styles.artists}>
      {artists.map((artist, i) => (
        <div key={i} className={styles.artistCard}>
          <h2>{artist.Name}</h2>
          <Image
          src={`/artistInfo/${artist.Name}.png`}
          alt="artistImage"
          width={100}
          height={100}
        />
          <p><strong>When:</strong> {artist.Time}</p>
          <p><strong>About:</strong> {artist.ShortBio}</p>
        </div>
      ))}
    </div>
  )
}
