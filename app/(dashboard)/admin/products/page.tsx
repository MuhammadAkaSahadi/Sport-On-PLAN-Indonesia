"use client";

import Button from "@/app/(landing)/components/ui/button";
import { useState } from "react"
import { FiPlus } from "react-icons/fi";
import ProductModal from "../../components/products/product-modal";
import ProductTable from "../../components/products/product-table";

export default function AdminProducts() {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleCloseModal = () => {
        setIsOpen(false);
    }

    return(
        <>
        <div className="flex justify-between bg-gray-100">
            <div className="pb-10">
                <h1 className="font-bold text-2xl">Product Management</h1>
                <p className="opacity-50"> Manage your inventory, prices and stock.</p>
            </div>
            <div>
            <Button className="rounded-lg" onClick={() => setIsOpen(true)}>
                <FiPlus size={24}/>
                Add Product
            </Button>
            </div>
        </div>
        <ProductTable />
        <ProductModal isOpen={isOpen} onClose={handleCloseModal} />
        </>
    )
}