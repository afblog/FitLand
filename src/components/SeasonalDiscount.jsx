import React from 'react'

export default function SeasonalDiscount({ cover1, cover2 }) {
    return (
        <div>
            <div className='flex items-end gap-x-6'>
                <div className='relative w-full max-w-98 h-115.5 rounded-2xl overflow-hidden'>
                    <img className='object-cover h-full' src={cover1} alt="" />
                    <img className='absolute bottom-0 z-10' src="/images/Vector-658.svg" alt="" />
                    <div className='absolute bottom-11 right-4 z-20 text-lg font-IRANSansXDemiBold text-white'>
                        <p>جدید ترین تخفیفات فصل برند پوما</p>
                        <p><span className='text-Primary300'>۵۰ ٪</span> تخفیف روی تمامی محصولات</p>
                    </div>
                </div>
                <div className='relative w-full max-w-98 h-115.5 rounded-2xl overflow-hidden'>
                    <img className='object-cover h-full' src={cover2} alt="" />
                    <img className='absolute bottom-0 z-10' src="/images/Vector-658.svg" alt="" />
                    <div className='absolute bottom-11 right-4 z-20 text-lg font-IRANSansXDemiBold text-white'>
                        <p>جدید ترین تخفیفات فصل برند نایک</p>
                        <p><span className='text-Primary300'>۵۰ ٪</span> تخفیف روی تمامی محصولات</p>
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl font-IRANSansXMedium text-Secondary'>جدید ترین محصولات</h3>
                    <p className='text-base font-IRANSansXMedium text-GraniteGray w-full max-w-76 mb-4 mt-2.5'>جدید ترین محصولات با ارسال رایگان تهیه
                        کنید و در سریع ترین زمان درب منزل تحویل بگیرید.
                    </p>
                    <button className='flex items-center gap-x-2 py-1 sm:py-3 px-5 sm:px-6 bg-Primary font-IRANSansXMedium text-xs md:text-base text-white rounded-lg cursor-pointer hover:shadow-BtnBoxSecondary transition-shadow'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="white" />
                            <path d="M15.5 12.75H9.5C9.09 12.75 8.75 12.41 8.75 12C8.75 11.59 9.09 11.25 9.5 11.25H15.5C15.91 11.25 16.25 11.59 16.25 12C16.25 12.41 15.91 12.75 15.5 12.75Z" fill="white" />
                            <path d="M11.4975 15.7504C11.3075 15.7504 11.1175 15.6804 10.9675 15.5304L7.9675 12.5304C7.6775 12.2404 7.6775 11.7604 7.9675 11.4704L10.9675 8.47043C11.2575 8.18043 11.7375 8.18043 12.0275 8.47043C12.3175 8.76043 12.3175 9.24043 12.0275 9.53043L9.5575 12.0004L12.0275 14.4704C12.3175 14.7604 12.3175 15.2404 12.0275 15.5304C11.8775 15.6804 11.6875 15.7504 11.4975 15.7504Z" fill="white" />
                        </svg>
                        مشاهده همه محصولات
                    </button>
                </div>
            </div>
        </div>
    )
}
