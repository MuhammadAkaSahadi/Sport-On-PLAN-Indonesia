import { create } from "zustand";
import { Product } from "../types";
import { persist } from "zustand/middleware";

export interface CartItems extends Product { // CartItems ini menggunakan data Product, hanya saja di tambah qty
    qty: number;
}

export interface CustomerInfo {
    customerName: string;
    customerContact: number | null;
    customerAddress: string;
}

interface CartStore {
    items: CartItems[]; // Karena ada banyak jadi array
    customerInfo: CustomerInfo | null;
    setCustomerInfo: (info: CustomerInfo) => void;
    addItem: (product: Product, qty?: number) => void; // qty dibuat opsional, agar saat add item tidak perlu ketik qty karena default nya 1
    removeItem: (productId: string) => void; // Tidak mereturn apa - apa (void)
    reset: () => void;
}

export const useCartStore = create<CartStore>() (
    persist( // Fungsinya agar data tidak hilang ketika di refresh, tpi dimasukkan ke db yg lebih permanent di browsernya (local storage, session storage)
        (set, get) => ({
            items: [],
            customerInfo: null, // KALO ERROR PAYMENT INI HARUS NYA NULL (number)
            setCustomerInfo: (info) => {
                set({customerInfo: info});
            },
            addItem: (product, qty = 1) => {
                const items = get().items;
                const existingItem = items.find((item) => item._id === product._id) // Mencari product yg sama dengan id product yang sudah ada

                if (existingItem) { // Jika ada yang sama,
                    set({
                        items: items.map((item) =>
                        item._id === product._id ? {...item, qty: item.qty + qty}: item)
                    })
                } else { // Jika tidak ada yang sama, maka tambahkan produk baru
                    set({items: [...items, {...product, qty}]});
                }
            },

            removeItem: (productId) => (
                set({items: get().items.filter((item) => item._id !== productId)})
            ),

            reset: () => {
                set({items: [], customerInfo: null})
            }
        }),
        {
            name: "cart-storage",
        }
    )
);