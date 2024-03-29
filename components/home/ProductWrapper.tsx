import React from 'react';
import Link from 'next/link';
import { Empty } from 'antd';
import Image from 'next/image';

import { Product } from '@/types/types';
import { fetchProducts } from '@/lib/data';
import HeartFavorite from '@/components/global/HeartFavorite';
import ProductCart from '../global/ProductCart';
import { DEFAULT_IMG_URL } from '@/constants/baseURL';

export default async function ProductWrapper({
    page = 0,
    size = 10,
    sortBy = '',
    sortDir = '',
    category = '',
    search = '',
}: {
    page: number,
    size?: number,
    sortBy?: string,
    sortDir?: string,
    category?: string,
    search?: string,
}) {

    const options = {
        page,
        size,
        sortBy,
        sortDir,
        category,
        search,
    }

    const res = await fetchProducts({ ...options });

    const { content } = res;
    let contentSort: Product[] = content;

    if (sortBy && sortDir) {
        if (sortBy === 'name') {
            if (sortDir === 'asc') {
                contentSort = content.sort((a: Product, b: Product) => a.name.localeCompare(b.name));
            } else if (sortDir === 'desc') {
                contentSort = content.sort((a: Product, b: Product) => b.name.localeCompare(a.name));
            }
        } else if (sortBy === 'price') {
            if (sortDir === 'asc') {
                contentSort = content.sort((a: Product, b: Product) => Number(a.price) - Number(b.price));
            } else if (sortDir === 'desc') {
                contentSort = content.sort((a: Product, b: Product) => Number(b.price) - Number(a.price));
            }
        }
    }

    return res && (
        <ProductCard data={contentSort} />
    )

}

export function ProductCard({ data }: { data: Product[] }) {

    const renderProduct = data?.length > 0 && data?.map(product => {
    
        const imageUrl = !product?.media_url.includes('') ? product?.media_url[0] : DEFAULT_IMG_URL;

        return (
            <Link
                href={`/products/${product?.id}`}
                key={`${product?.id}`}
                target=''
                className="relative min-w-[180px] max-w-[200px] h-[285px] block bg-white text-gray-900 shadow-md rounded-2xl p-2 cursor-pointer hover:-translate-y-1 transition-all select-none">
                <div className="rounded-md relative overflow-hidden mt-2">
                    <span className="absolute left-2 top-2 z-10 rounded-full bg-primary-700 px-2 text-center text-sm font-medium text-white select-none">-39%</span>
                    <Image src={imageUrl} alt={`${product?.name}`} quality={70} sizes="100vw" width={500} height={300} className='h-44 rounded-sm w-full object-cover hover:scale-105 transition duration-500' />
                    <HeartFavorite id={product?.id} className='absolute right-2 top-2' />
                </div>
                <div className="my-4 pl-2 mb-2 flex flex-col justify-between items-stretch">
                    <div className=''>
                        <p className="text-sm text-center tracking-tight font-medium line-clamp-1 text-gray-900 mb-0">{product?.name}</p>
                    </div>
                    <div className='flex justify-between items-center pt-2'>
                        <span className="text-2xl font-bold text-slate-900">${product?.price}</span>
                        <div className='text-xs text-[#0000008a]'>2.6k sold</div>
                    </div>
                </div>
                <ProductCart id={product?.id} />
            </Link>
        )
    });

    return renderProduct ? (
        <div className='w-full h-full mb-10 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-y-8 md:gap-7 lg:gap-6 xl:gap-x-4 xl:gap-y-6 justify-items-center'>
            {renderProduct}
        </div>
    ) : (
        <div className='flex justify-center items-center h-[350px]'>
            <Empty description={<>We couldn&apos;t find any products matching your search</>} />
        </div>
    );
}
