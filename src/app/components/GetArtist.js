import Image from 'next/image';
import React from 'react';
import Papa from 'papaparse'; // npm install papaparse
import styles from './getArtist.module.css';

export default async function GetArtist() {
  const CSV_URL =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQzKGIN3z1j2Jf5h1bqIvXJyW4Amwt1RBz3tavgaTKXCUTnCLPFqTrZMNo9yw9fe4VhA9Qxg2bm7758/pub?gid=0&single=true&output=csv';

  const res = await fetch(CSV_URL, { next: { revalidate: 1 } });
  if (!res.ok) throw new Error('Failed to fetch sheet: ' + res.status);

  const textRaw = await res.text();

  // Parse CSV safely
  const parsed = Papa.parse(textRaw, { header: true, skipEmptyLines: true });
  const artister_og_program = parsed.data;

  return (
    <div className={styles.artister_og_program}>
      {artister_og_program.map((artist, i) => (
        <div key={i} className={styles.artistCard}>
          <Image
            src={`/artistInfo/${artist.Name}.png`}
            alt="artistImage"
            width={400}
            height={450}
          />
          <p>
            <strong></strong> {artist.Time}
          <br></br>
            <strong></strong> {artist.Venue}
          </p>
          <p>{artist.ShortBio}</p>
        </div>
      ))}
    </div>
  );
}
