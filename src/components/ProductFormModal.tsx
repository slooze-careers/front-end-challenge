"use client";

import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client/react";
import { ADD_PRODUCT, EDIT_PRODUCT, GET_PRODUCTS, GET_DASHBOARD_STATS } from "@/graphql/queries";
import { X } from "lucide-react";

export function ProductFormModal({ isOpen, onClose, initialData }: any) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: 0,
    stock: 0,
    status: "Active",
  });

  const [addProduct] = useMutation(ADD_PRODUCT, {
    refetchQueries: [{ query: GET_PRODUCTS }, { query: GET_DASHBOARD_STATS }],
  });
  
  const [editProduct] = useMutation(EDIT_PRODUCT, {
    refetchQueries: [{ query: GET_PRODUCTS }, { query: GET_DASHBOARD_STATS }],
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        category: initialData.category,
        price: initialData.price,
        stock: initialData.stock,
        status: initialData.status,
      });
    } else {
      setFormData({ name: "", category: "", price: 0, stock: 0, status: "Active" });
    }
  }, [initialData, isOpen]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (initialData) {
        await editProduct({ variables: { id: initialData.id, ...formData } });
      } else {
        await addProduct({ variables: { ...formData } });
      }
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md shadow-xl overflow-hidden animate-in slide-in-from-bottom-4 zoom-in-95">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-semibold dark:text-white">
            {initialData ? "Edit Product" : "Add Product"}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <input
              required
              title="Product Name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
            <input
              required
              title="Category"
              type="text"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price ($)</label>
              <input
                required
                title="Price"
                type="number"
                step="0.01"
                min="0"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Stock</label>
              <input
                required
                title="Stock Units"
                type="number"
                min="0"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Status</label>
            <select
              title="Status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
            >
              <option value="Active">Active</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 flex-row border-t border-gray-100 dark:border-gray-700">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              {initialData ? "Save Changes" : "Create Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
