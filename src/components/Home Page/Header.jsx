import React from 'react'
import { headerBanners } from '../../consts/header'

const Header = () => {
  return (
    <div>
        <section className="h-[600px] py-[150px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('/Images/Header/header main.jpg')`}}>
            <h1 className='animate-greenSliderRight mb-[20px] text-5xl text-white text-center font-bold pc:mb-[5px]'>NUMBER 1</h1>
            <h3 className='animate-greenSliderLeft w-[70%] mx-auto text-3xl text-white text-center leading-normal font-semibold pc:w-[40%]'>ENVIRONMENTAL MANAGEMENT AGENCY</h3>
        </section>
        <section className="w-[90%] mx-auto relative top-[-70px] pc:w-[98%] pc:flex pc:flex-row pc:justify-between pc:items-center tabs:flex tabs:flex-row tabs:justify-between tabs:items-center">
            {
                headerBanners.map(item => {
                    const { id, title, desc, imgLocation, alt, anime } = item;
                    return (
                        <div key={id} className={`animate-${anime} w-[100%] my-[20px] bg-green-400 pc:w-[32%] tabs:w-[32%]`}>
                            <h3 className='p-[10px] text-white text-2xl text-justify font-bold'>{title}</h3>
                            <p className='p-[10px] text-white text-[0.9rem]'>{desc}</p>
                            <div className="banner-container">
                                <img className='block w-[100%] h-[100%]' src={imgLocation} alt={alt} />
                            </div>
                        </div>
                    )
                })
            }
        </section>
    </div>
  )
}

export default Header