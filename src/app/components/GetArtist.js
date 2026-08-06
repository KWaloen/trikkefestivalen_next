import Image from 'next/image';
import React from 'react';
import Papa from 'papaparse'; // npm install papaparse
import styles from './getArtist.module.css';

export default async function GetArtist() {
  const CSV_URL =
    'https://docs.google.com/spreadsheets/d/126rAT23u0jr6Ln9qLXi3ZQ9oqjl4FhVAm7lJitWhZ8s/export?format=csv&gid=0';

  const res = await fetch(CSV_URL, { next: { revalidate: 1 } });
  if (!res.ok) throw new Error('Failed to fetch sheet: ' + res.status);

  const textRaw = await res.text();

  // Parse CSV safely
  const parsed = Papa.parse(textRaw, { header: true, skipEmptyLines: true });
  const artister_og_program = parsed.data.filter((row) => row.Name);

  return (
    <div className={styles.artister_og_program}>
      {artister_og_program.map((artist, i) => (
        <div key={i} className={styles.artistCard}>
          <Image
            src={`/artistInfo/2026/${encodeURIComponent(artist.Name)}.png`}
            alt={artist.Name}
            width={500}
            height={400}
          />
          <h3>{artist.Name}</h3>
          <p>
            <strong></strong> {artist.Time}
          <br></br>
            <strong></strong> {artist.Venue}
          </p>
          <p>{artist.Bio}</p>
        </div>
      ))}
    </div>
  );
}
