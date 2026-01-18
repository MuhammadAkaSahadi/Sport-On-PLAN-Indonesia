import { useState, useRef } from "react";
import { FiImage, FiTrash2, FiUploadCloud } from "react-icons/fi";

type TFileUploadProps = {
  onFileSelect?: (file: File | null) => void;
};

export default function FileUpload({ onFileSelect }: TFileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (selectedFile?: File) => {
    if (!selectedFile) return;

    setFile(selectedFile); // Menyimpan file ke state lokal, Agar bisa dipreview, bisa ditampilkan namanya, bisa dihapus
    onFileSelect?.(selectedFile); //Memberi tahu parent (onFileSelect) "File sudah dipilih & valid"
  };

  const removeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // mencegah event lain terpanggil
    setFile(null); // file direset ke null/dihapus
    onFileSelect?.(null); // Memberi tahu parent (onFileSelect) "File sudah dihapus"
  };

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      onDragOver={(e) => e.preventDefault()} // browser mengizinkan drop file, tanpa ini, "onDrop" tidak jalan
      onDrop={(e) => {
        e.preventDefault(); // fungsi drag
        handleFileChange(e.dataTransfer.files?.[0]);
        // Ambil file pertama, Kirim ke handleFileChange, Masuk ke alur validasi & simpan file
      }}
      className="flex flex-col justify-center items-center w-full py-6 border border-dashed border-primary bg-primary-light"
    >
      <input
        type="file"
        ref={fileInputRef} // Penjelasannya agak panjang, gpt saja
        accept="image/*" // Hanya gambar yang boleh dipilih (filter UI)
        onChange={(e) => handleFileChange(e.target.files?.[0])}
        className="hidden"
      />
      {!file ? ( // Jika belum ada file yang dipilih
        <div className="text-center my-5">
          <FiUploadCloud className="text-primary mx-auto" />
          <p className="text-xs">Upload Your Payment Receipt here</p>
        </div>
      ) : (
        // Jika sudah ada file yang dipilih
        <div className="text-center">
          <FiImage className="text-primary mx-auto mb-4" size={28} />
          <p className="text-sm text-primary">{file.name}</p>
          <p className="text-sm text-gray-400">
            {(file.size / 1024).toFixed(1)} KB
          </p>
          <button
            onClick={removeFile}
            className="flex gap-2 bg-primary/90 text-white mx-auto rounded mt-4 px-2"
          >
            <FiTrash2 className="self-center" /> Remove
          </button>
        </div>
      )}
    </div>
  );
}
