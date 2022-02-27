import Link from 'next/link'

import { ICategory } from 'Interfaces/category'
import { kebabCase } from 'lib/kebabCase'

interface Props {
  data: ICategory[]
}

const Categories = ({ data }: Props) => {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-2xl font-semibold">Categories</h3>
      <div className="flex flex-wrap gap-2 font-medium">
        {data.map((cat, i) => (
          <Link href={`/${kebabCase(cat.name)}-${cat.id}`} key={cat.id}>
            <a>
              <div className="px-4 py-2 bg-gray-200 cursor-pointer select-none rounded-xl hover:bg-gray-300">
                {cat.name}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories
