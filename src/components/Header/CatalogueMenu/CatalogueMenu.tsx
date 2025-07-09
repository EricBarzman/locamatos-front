import { useEffect, useState } from 'react'

import { useCategories } from '@/hooks/useCategories';
import { CategoriesDto, SubCategoriesDto } from '@/types/categories.type';
import Link from 'next/link';
import { useSubCategories } from '@/hooks/useSubCategories';

function CatalogueMenu() {

  const [categories, setCategories] = useState<CategoriesDto[]>([]);
  const { getAllCategories } = useCategories();

  const [selectedCatId, setSelectedCatId] = useState('');

  // const [subcategories, setSubCategories] = useState<SubCategoriesDto[]>([]);

  useEffect(() => {
    getAllCategories().then(res => setCategories(res!))
  }, [])

  // useEffect(() => {
  //   getSubCategoriesOfOneCategory(selectedCatId).then(res => setSubCategories(res!))
  // }, [selectedCatId])

  return (
    <section className='top-20.5 z-2 left-0 fixed min-w-screen'>
      <div className='flex p-3 bg-white text-black'>
        <div className='p-2 w-1/4'>
          <h2 className='uppercase font-semibold'>Notre catalogue</h2>
          <p className='text-gray-400 mt-3'>
            A Locamatos, ce qui nous importante, c&apos;est que VOUS puissiez avoir accès au matériel dont VOUS avez besoin.
          </p>
        </div>

        <ul className='px-2 border-l-1 border-r-1 w-1/5 border-gray-400 flex flex-col'>
          {categories.map((cat) =>
            <li
              key={cat._id}
              className='uppercase font-semibold px-4 py-2 cursor-pointer rounded-md hover:bg-amber-100 hover:text-amber-600 duration-300'
              onClick={() => setSelectedCatId(cat._id!)}
            >
              {cat.nom}
            </li>
          )}
        </ul>

        {/* {subcategories.length !== 0 && (
          <ul>
            {subcategories.map((subcat) => (
              <Link href={subcat.slug} key={subcat._id}>
                {subcat.nom}
              </Link>
            ))}
          </ul>
        )} */}

      </div>
    </section>
  )
}

export default CatalogueMenu