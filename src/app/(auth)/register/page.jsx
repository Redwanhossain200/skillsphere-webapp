'use client';
import { authClient } from '@/lib/auth-client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import GoogleLoginButton from '@/components/auth/GoogleLoginButton';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = async (data) => {
    const { email, name, password, photo } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: '/',
    });

    if (error) {
      toast.error(error.message || 'Registration failed');
    } else {
      await authClient.signOut();
      toast.success('Account created successfully! Please login.');
      router.push('/login');
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center p-4 py-12 bg-base-100">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl border border-base-200">
        <div className="card-body p-8 sm:p-10">
          <h2 className="font-bold text-3xl text-center text-base-content mb-8">
            Register your account
          </h2>

          <div className="divider mb-8"></div>

          <form
            className="space-y-5"
            onSubmit={handleSubmit(handleRegisterFunc)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Your Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full focus:outline-none focus:border-primary transition-colors"
                {...register('name', { required: 'Name field is required' })}
              />
              {errors.name && (
                <p className="text-error text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your photo"
                className="input input-bordered w-full focus:outline-none focus:border-primary transition-colors"
                {...register('photo', { required: 'Photo field is required' })}
              />
              {errors.photo && (
                <p className="text-error text-sm mt-1">
                  {errors.photo.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Email address
                </span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full focus:outline-none focus:border-primary transition-colors"
                {...register('email', { required: 'Email field is required' })}
              />
              {errors.email && (
                <p className="text-error text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="input input-bordered w-full pr-12 focus:outline-none focus:border-primary transition-colors"
                  {...register('password', {
                    required: 'Password field is required',
                  })}
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/60 hover:text-base-content"
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-error text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button className="btn btn-primary w-full mt-4 text-lg font-medium">
              Register
            </button>
          </form>

          <div className="divider my-6 text-base-content/50">OR</div>

          <GoogleLoginButton />

          <p className="mt-6 text-center font-medium text-base-content/70">
            Already Have An Account?{' '}
            <Link href="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
