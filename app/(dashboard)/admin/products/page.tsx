"use client";

import Button from "@/app/(landing)/components/ui/button";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import ProductModal from "../../components/products/product-modal";
import ProductTable from "../../components/products/product-table";
import { Product } from "@/app/types";
import { deleteProduct, getAllProducts } from "@/app/services/product";
import { toast } from "react-toastify";
import DeleteModal from "../../components/ui/delete-modal";

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productToDeleteId, setProductToDeleteId] = useState("");

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      if (data) {
        setProducts(data.filter(Boolean));
      }
    } catch (error) {
      console.log("Failed to fetch product", error);
    }
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setProductToDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!productToDeleteId) return;
    try {
      await deleteProduct(productToDeleteId);
      fetchProducts();
      toast.success("Product berhasil dihapus");
      setIsDeleteModalOpen(false);
      setProductToDeleteId("");
    } catch (error) {
      console.error("Failed to delete product", error);
      toast.error("Gagal menghapus product");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="flex justify-between bg-gray-100">
        <div className="pb-10">
          <h1 className="font-bold text-2xl">Product Management</h1>
          <p className="opacity-50">Manage your inventory, prices and stock.</p>
        </div>
        <div>
          <Button className="rounded-lg" onClick={() => setIsModalOpen(true)}>
            <FiPlus size={24} />
            Add Product
          </Button>
        </div>
      </div>
      <ProductTable
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <ProductModal
        product={selectedProduct}
        onSuccess={fetchProducts}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
}
