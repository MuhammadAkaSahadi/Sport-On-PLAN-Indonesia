// app\lib\api.ts
export async function fetchAPI<T> ( // Sifatnya generic <T> supaya bisa digunakan untuk berbagai tipe data yang di-fetch dari API
    endpoint: string, // Contoh : "/users"
    options?: RequestInit, // Konfigurasi standar fetch : method, headers, body, cache, dll
): Promise<T> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
      ...options, // Menggabungkan semua konfigurasi fetch yang dikirim user
      cache: options?.cache || "no-store", // kita set no-store karena kita ingin mendapat data lebih real time atau lebih updated
    });

    if (!res.ok) {
        let errorMessage = `An error occurred while fetching the data: ${endpoint}`; // Default error message
        try {
          // Ambil Pesan Error dari Backend (Jika Ada)
          const errorData = await res.json();
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch(e) {
            // Jika response bukan JSON, "catch" mencegah aplikasi crash
            console.log(e);
        }

        throw new Error(errorMessage);
    }

    return res.json();
}

export function getImageUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`
}

export function getAuthHeaders() {
  // helper function untuk menyisipkan token autentikasi ke setiap request API yang butuh login (Authorization header)
  const token = localStorage.getItem("token");
  if (!token) return undefined; // Handle agar jika user belum login, Bearer nya tidak null
  return {
    Authorization: `Bearer ${token}`,
  };
}