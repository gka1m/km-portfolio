// export async function getResumeUrl(): Promise<string | null> {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/resume`, {
//       next: { revalidate: 3600 },
//     });
//     const data = await res.json();
//     return data.url ?? null;
//   } catch {
//     return null;
//   }
// }

import { head } from "@vercel/blob";

export async function getResumeUrl(): Promise<string | null> {
  try {
    const blob = await head("cv_full.pdf");
    return blob.url;
  } catch {
    return null;
  }
}
