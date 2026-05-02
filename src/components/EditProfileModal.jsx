'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { updateUser } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { LuSave, LuUser, LuImage } from 'react-icons/lu';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

export default function UpdateProfileForm({ user }) {
  const router = useRouter();
  const [name, setName] = useState(user?.name || '');
  const [image, setImage] = useState(user?.image || '');
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);

    const { error } = await updateUser({
      name: name.trim(),
      image: image.trim() || undefined,
    });

    if (error) {
      toast.error(error.message || 'Failed to update profile');
      setLoading(false);
    } else {
      toast.success('Profile updated successfully!');
      router.refresh();
      setTimeout(() => {
        router.push('/profile');
      }, 100);
    }
  };

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden px-3 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto py-6 sm:py-16">
        <div className="bg-base-100 rounded-2xl sm:rounded-3xl shadow-xl border border-base-200 overflow-hidden w-full box-border">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-primary w-full"
          />

          <div className="p-5 sm:p-12">
            <div className="mb-8 text-center">
              <h2 className="text-xl sm:text-3xl font-black tracking-tight mb-2">
                Update Information
              </h2>
              <p className="text-base-content/60 font-medium text-xs sm:text-base">
                Update your personal detail to keep your profile fresh.
              </p>
            </div>

            <form onSubmit={handleUpdate} className="space-y-5 sm:space-y-6">
              <div className="form-control w-full">
                <label className="label py-1">
                  <span className="label-text font-bold flex items-center gap-2 text-sm">
                    <LuUser className="text-primary" size={16} /> Full Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered w-full bg-base-200/30 focus:input-primary transition-all rounded-xl font-medium text-sm h-11"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label py-1">
                  <span className="label-text font-bold flex items-center gap-2 text-sm">
                    <LuImage className="text-primary" size={16} /> Profile Image
                    URL
                  </span>
                </label>
                <input
                  type="url"
                  className="input input-bordered w-full bg-base-200/30 focus:input-primary transition-all rounded-xl font-medium text-sm h-11"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://example.com/photo.jpg"
                />
                {image && (
                  <div className="mt-3 flex items-center gap-3 p-2 bg-base-200/50 rounded-lg">
                    <img
                      src={image}
                      alt="Preview"
                      className="w-8 h-8 rounded-full object-cover border border-primary/20"
                      onError={(e) => (e.target.style.display = 'none')}
                    />
                    <span className="text-[10px] text-base-content/50 truncate">
                      Image Preview
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="submit"
                  className="btn btn-primary w-full sm:flex-2 shadow-lg shadow-primary/20 rounded-xl font-bold order-1 sm:order-2 h-11 min-h-11"
                  disabled={loading || !name.trim()}>
                  <AnimatePresence mode="wait">
                    {loading ? (
                      <span className="loading loading-spinner loading-sm" />
                    ) : (
                      <div className="flex items-center gap-2 text-sm">
                        <LuSave size={18} /> Save Changes
                      </div>
                    )}
                  </AnimatePresence>
                </button>

                <button
                  type="button"
                  className="btn btn-ghost border-base-300 w-full sm:flex-1 rounded-xl font-semibold group order-2 sm:order-1 h-11 min-h-11"
                  onClick={() => router.push('/profile')}
                  disabled={loading}>
                  <FaArrowLeftLong className="group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm">Back</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
