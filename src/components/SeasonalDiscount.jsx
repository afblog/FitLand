import React from 'react'

export default function SeasonalDiscount({ cover1, cover2 }) {
    return (
        <div>
            <div className='flex items-end justify-between md:justify-center xl:justify-around gap-x-6'>
                <div className='relative group w-full max-w-98 h-57 sm:h-115.5 rounded-2xl overflow-hidden'>
                    <img className='object-cover h-full' src={cover1} alt="" />
                    <img className='absolute bottom-7 xxs:bottom-0 z-10 scale-200 xxs:scale-none' src="/images/Vector-658.svg" alt="" />
                    <div className='absolute bottom-4 sm:bottom-8 md:bottom-11 right-1 sm:right-4 z-20 text-xs sm:text-sm md:text-lg font-IRANSansXDemiBold text-white'>
                        <p>جدید ترین تخفیفات فصل برند پوما</p>
                        <p><span className='text-Primary300'>۵۰ ٪</span> تخفیف روی تمامی محصولات</p>
                    </div>
                    <div className='opacity-0 max-xl:group-hover:opacity-100 text-white absolute flex flex-col items-center justify-center inset-0 bg-[#0D0D0D]/60 backdrop-blur-lg z-30 transition-all'>
                        <p className='font-IRANSansXRegular text-xs md:text-base text-center mb-7'>فقط با یک کلیک وارد دنیای محصولات جدید شوید</p>
                        <button className='flex items-center gap-x-2 text-[10px] md:text-sm font-IRANSansXRegular sm:font-IRANSansXMedium border-2 border-solid border-white rounded-lg p-1 md:p-2'>
                            <svg className='size-4 sm:size-6' viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.87 22.75H5.12C2.82 22.75 1.75 21.68 1.75 19.38V14.63C1.75 12.32 2.82 11.25 5.12 11.25H7.5C7.91 11.25 8.25 11.59 8.25 12V14.37C8.25 15.83 8.67 16.25 10.12 16.25H12.5C12.91 16.25 13.25 16.59 13.25 17V19.38C13.25 21.68 12.18 22.75 9.87 22.75ZM5.12 12.75C3.67 12.75 3.25 13.17 3.25 14.63V19.38C3.25 20.83 3.67 21.25 5.12 21.25H9.87C11.33 21.25 11.75 20.83 11.75 19.38V17.75H10.12C7.82 17.75 6.75 16.68 6.75 14.37V12.75H5.12Z" fill="white" />
                                <path d="M14.87 17.75H10.12C7.82 17.75 6.75 16.68 6.75 14.37V9.62C6.75 7.32 7.82 6.25 10.12 6.25H12.5C12.91 6.25 13.25 6.59 13.25 7V9.37C13.25 10.83 13.67 11.25 15.12 11.25H17.5C17.91 11.25 18.25 11.59 18.25 12V14.37C18.25 16.68 17.18 17.75 14.87 17.75ZM10.12 7.75C8.67 7.75 8.25 8.17 8.25 9.62V14.37C8.25 15.83 8.67 16.25 10.12 16.25H14.87C16.33 16.25 16.75 15.83 16.75 14.37V12.75H15.12C12.82 12.75 11.75 11.68 11.75 9.37V7.75H10.12Z" fill="white" />
                                <path d="M19.87 12.75H15.12C12.82 12.75 11.75 11.68 11.75 9.37V4.62C11.75 2.32 12.82 1.25 15.12 1.25H19.87C22.18 1.25 23.25 2.32 23.25 4.62V9.37C23.25 11.68 22.18 12.75 19.87 12.75ZM15.12 2.75C13.67 2.75 13.25 3.17 13.25 4.62V9.37C13.25 10.83 13.67 11.25 15.12 11.25H19.87C21.33 11.25 21.75 10.83 21.75 9.37V4.62C21.75 3.17 21.33 2.75 19.87 2.75H15.12Z" fill="white" />
                            </svg>
                            جدیدترین محصولات
                        </button>
                    </div>
                </div>
                <div className='relative group w-full max-w-98 h-57 sm:h-115.5 rounded-2xl overflow-hidden'>
                    <img className='object-cover h-full' src={cover2} alt="" />
                    <img className='absolute bottom-7 xxs:bottom-0 z-10 scale-200 xxs:scale-none' src="/images/Vector-658.svg" alt="" />
                    <div className='absolute bottom-4 sm:bottom-8 md:bottom-11 right-1 sm:right-4 z-20 text-xs sm:text-sm md:text-lg font-IRANSansXDemiBold text-white'>
                        <p>جدید ترین تخفیفات فصل برند نایک</p>
                        <p><span className='text-Primary300'>۵۰ ٪</span> تخفیف روی تمامی محصولات</p>
                    </div>
                    <div className='opacity-0 max-xl:group-hover:opacity-100 text-white absolute flex flex-col items-center justify-center inset-0 bg-[#0D0D0D]/60 backdrop-blur-lg z-30 transition-all'>
                        <p className='font-IRANSansXRegular text-xs md:text-base text-center mb-7'>فقط با یک کلیک وارد دنیای محصولات جدید شوید</p>
                        <button className='flex items-center gap-x-2 text-[10px] md:text-sm font-IRANSansXRegular sm:font-IRANSansXMedium border-2 border-solid border-white rounded-lg p-1 md:p-2'>
                            <svg className='size-4 sm:size-6' viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.87 22.75H5.12C2.82 22.75 1.75 21.68 1.75 19.38V14.63C1.75 12.32 2.82 11.25 5.12 11.25H7.5C7.91 11.25 8.25 11.59 8.25 12V14.37C8.25 15.83 8.67 16.25 10.12 16.25H12.5C12.91 16.25 13.25 16.59 13.25 17V19.38C13.25 21.68 12.18 22.75 9.87 22.75ZM5.12 12.75C3.67 12.75 3.25 13.17 3.25 14.63V19.38C3.25 20.83 3.67 21.25 5.12 21.25H9.87C11.33 21.25 11.75 20.83 11.75 19.38V17.75H10.12C7.82 17.75 6.75 16.68 6.75 14.37V12.75H5.12Z" fill="white" />
                                <path d="M14.87 17.75H10.12C7.82 17.75 6.75 16.68 6.75 14.37V9.62C6.75 7.32 7.82 6.25 10.12 6.25H12.5C12.91 6.25 13.25 6.59 13.25 7V9.37C13.25 10.83 13.67 11.25 15.12 11.25H17.5C17.91 11.25 18.25 11.59 18.25 12V14.37C18.25 16.68 17.18 17.75 14.87 17.75ZM10.12 7.75C8.67 7.75 8.25 8.17 8.25 9.62V14.37C8.25 15.83 8.67 16.25 10.12 16.25H14.87C16.33 16.25 16.75 15.83 16.75 14.37V12.75H15.12C12.82 12.75 11.75 11.68 11.75 9.37V7.75H10.12Z" fill="white" />
                                <path d="M19.87 12.75H15.12C12.82 12.75 11.75 11.68 11.75 9.37V4.62C11.75 2.32 12.82 1.25 15.12 1.25H19.87C22.18 1.25 23.25 2.32 23.25 4.62V9.37C23.25 11.68 22.18 12.75 19.87 12.75ZM15.12 2.75C13.67 2.75 13.25 3.17 13.25 4.62V9.37C13.25 10.83 13.67 11.25 15.12 11.25H19.87C21.33 11.25 21.75 10.83 21.75 9.37V4.62C21.75 3.17 21.33 2.75 19.87 2.75H15.12Z" fill="white" />
                            </svg>
                            جدیدترین محصولات
                        </button>
                    </div>
                </div>
                <div className='hidden xl:block'>
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
