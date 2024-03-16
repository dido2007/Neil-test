'use client'
import { useState } from "react"
import { useRouter } from 'next/navigation'


export const PhoneNumberForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    // Mettez à jour le numéro de téléphone de l'utilisateur en utilisant une API que vous avez définie
    const res = await fetch('/api/user/add-phone-number', {
      method: 'POST',
      body: JSON.stringify({ phoneNumber }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    if (data.ok) {
      router.push(data.destiation);
    }


  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl p-4">
        <div className="form-control">
          <label htmlFor="phoneNumber" className="label">
            <span className="label-text">Numéro de téléphone</span>
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Mettre à jour
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}
