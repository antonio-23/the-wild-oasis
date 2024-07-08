"use client";

import { useState } from "react";
import { updateGuestAction } from "../_lib/actions";
import SubmitButton from "./SubmitButton";
import { useForm } from "react-hook-form";

function UpdateProfileForm({ children, guest }) {
  const { fullName, email, nationalID, countryFlag } = guest;
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  return (
    <form
      action={handleSubmit(updateGuestAction)}
      className='bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col'
    >
      <div className='space-y-2'>
        <label>Full name</label>
        <input
          disabled
          name='fullName'
          defaultValue={fullName}
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
        />
      </div>

      <div className='space-y-2'>
        <label>Email address</label>
        <input
          disabled
          name='email'
          defaultValue={email}
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
        />
      </div>

      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <label htmlFor='nationality'>Where are you from?</label>
          <img
            src={countryFlag}
            alt='Country flag'
            className='h-5 rounded-sm'
          />
        </div>

        {children}
      </div>

      <div className='space-y-2'>
        <label htmlFor='nationalID'>National ID number</label>
        <input
          defaultValue={nationalID}
          name='nationalID'
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm peer peer-invalid:ring-1 peer-invalid:ring-rose-600 peer-invalid:text-rose-600 peer-invalid:visible'
          {...register("nationalID", {
            required: "Please provide your national ID",
            pattern: {
              value: /^[a-zA-Z0-9]{6,12}$/,
              message: "Please provide a valid national ID",
            },
            minLength: {
              value: 6,
              message: "National ID must be at least 6 characters",
            },
            maxLength: {
              value: 12,
              message: "National ID must be at most 12 characters",
            },
          })}
        />
        <span className='!mt-1 text-sm text-red-600 peer-invalid:visible'>
          {errors.nationalID?.message}
        </span>
      </div>

      <div className='flex justify-end items-center gap-6'>
        <SubmitButton pendingLabel='Updating...'>Update profile</SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
