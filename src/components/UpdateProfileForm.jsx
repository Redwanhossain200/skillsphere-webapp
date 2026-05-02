"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateUser } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { LuSave, LuUser, LuImage } from "react-icons/lu";
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export default function UpdateProfileForm({ user }) {
  const router = useRouter();
  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await updateUser({
      name: name,
      image: image || undefined,
    });

    if (error) {
      toast.error(error.message || "Failed to update profile");
      setLoading(false);
    } else {
      toast.success("Profile updated successfully!");
      setLoading(false);
      router.push("/profile");
      router.refresh();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto px-4 py-16"
    >
      <div className="bg-base-100 rounded-3xl shadow-2xl border border-base-200 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-2 bg-primary w-full"
        ></motion.div>

        <div className="p-8 sm:p-12">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black tracking-tight mb-2 text-base-content">
              Update Information
            </h2>
            <p className="text-base-content/60 font-medium">
              Update your personal details to keep your profile fresh.
            </p>
          </div>

          <form onSubmit={handleUpdate} className="space-y-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold flex items-center gap-2">
                  <LuUser className="text-primary" size={18} /> Full Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered w-full bg-base-200/30 focus:input-primary transition-all duration-300 rounded-xl font-medium focus:scale-[1.01]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold flex items-center gap-2">
                  <LuImage className="text-primary" size={18} /> Profile Image
                  URL
                </span>
              </label>
              <input
                type="url"
                className="input input-bordered w-full bg-base-200/30 focus:input-primary transition-all duration-300 rounded-xl font-medium focus:scale-[1.01]"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://example.com/photo.jpg"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.button
                whileHover={{ x: -4 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="btn btn-ghost border-base-300 hover:bg-base-200 py-1 md:py-5 flex-1 rounded-xl order-2 sm:order-1 font-semibold group"
                onClick={() => router.push("/profile")}
                disabled={loading}
              >
                <FaArrowLeftLong
                  size={18}
                  className="group-hover:-translate-x-1 transition-transform duration-300"
                />
                Back
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn btn-primary flex-2 shadow-lg shadow-primary/20 rounded-xl py-1 md:py-5 order-1 sm:order-2 font-bold relative"
                disabled={loading || !name.trim()}
              >
                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.span
                      key="loader"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="loading loading-spinner"
                    ></motion.span>
                  ) : (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <LuSave size={18} /> Save
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
