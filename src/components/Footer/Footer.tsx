"use client";

import { useEffect, useState } from "react"
import { useCategories } from "@/hooks/useCategories";
import { CategoriesDto } from "@/types/categories.type";
import Link from "next/link";

function Footer() {

  const [categories, setCategories] = useState<CategoriesDto[]>([]);
  const { getAllCategories } = useCategories();

  useEffect(() => {
    getAllCategories().then(res => setCategories(res!))
  }, [])

  if (categories.length === 0) return <h2>Searching...</h2>

  return (
    <footer className='p-5'>

      <section>Pub</section>

      <section className='flex justify-between mt-3'>

        <h3 className='uppercase text-sm'>(c) Locamatos 2025</h3>
        
        <div className='flex flex-col'>
          <h3 className='font-semibold text-lg mb-4'>Notre catalogue</h3>
          <ul className="flex flex-col">
            {categories.map(cat => (
              <Link href={cat.slug} key={cat._id} className="mb-2 capitalize">{cat.nom}</Link>
            ))}
          </ul>
        </div>
        
        <div className='flex flex-col'>
          <h3 className='font-semibold text-lg mb-4'>Nos projets</h3>
          <ul>
            <li className="mb-2">Cam</li>
            <li className="mb-2">Cam</li>
            <li className="mb-2">Cam</li>
            <li className="mb-2">Cam</li>
            <li className="mb-2">Cam</li>
            <li className="mb-2">Cam</li>
          </ul>
        </div>
        
        <div className='flex flex-col'>
          <h3 className='font-semibold text-lg mb-4'>Egalement</h3>
          <ul>
            <li className="mb-2">Cam</li>
            <li className="mb-2">Cam</li>
            <li className="mb-2">Cam</li>
            <li className="mb-2">Cam</li>
            <li className="mb-2">Cam</li>
            <li className="mb-2">Cam</li>
          </ul>
        </div>
        
        <div className='flex flex-col'>
          <h3 className='font-semibold text-lg mb-4'>Pages Légales</h3>
          <ul>
            <li className="mb-2">Cam</li>
            <li className="mb-2">Cam</li>
            <li className="mb-2">Cam</li>
            <li className="mb-2">Cam</li>
            <li className="mb-2">Cam</li>
            <li className="mb-2">Cam</li>
          </ul>
        </div>

        <div className="p-18"></div>

      </section>
    </footer>
  )
}

export default Footer