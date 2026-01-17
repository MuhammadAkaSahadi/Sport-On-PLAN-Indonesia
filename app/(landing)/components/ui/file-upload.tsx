import { useState, useRef } from "react";
import { FiImage, FiTrash2, FiUpload } from "react-icons/fi";

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
      className=""
    >
      <input
        type="file"
        ref={fileInputRef} // Penjelasannya agak panjang, gpt saja
        accept="image/*" // Hanya gambar yang boleh dipilih (filter UI)
        onChange={(e) => handleFileChange(e.target.files?.[0])}
        className=""
      />
      {!file ? ( // Jika belum ada file yang dipilih
        <div className="">
          <FiUpload className="" />
          <p className="">Upload Your Payment Receipt here</p>
        </div>
      ) : ( // Jika sudah ada file yang dipilih
        <div className="">
          <FiImage className="" />
          <p className="">{file.name}</p>
          <p className="">{(file.size / 1024).toFixed(1)} KB</p>
          <button onClick={removeFile} className="">
            <FiTrash2 className="" /> Remove
          </button>
        </div>
      )}
    </div>
  );
}
