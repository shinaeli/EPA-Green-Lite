import React from 'react'

const Adverts = () => {
  return (
    <div className="animate-itemAppear bg-cover bg-center bg-no-repeat pc:flex pc:flex-row pc:justify-start pc:items-center pc:px-[90px] tabs:flex tabs:flex-row tabs:justify-start tabs:items-center tabs:px-0" style={{backgroundImage: `url('/Images/Header/header main.jpg')`}}>
      <img className="animate-greenSliderLeft block w-[90%] pc:w-[30%] tabs:w-[30%]" src="https://ld-wp.template-help.com/wordpress_free/23567/wp-content/uploads/2019/04/Group1.png" alt="stoies photo" />
      <div className="animate-greenSliderLeft ml-[20px]">
      <h3 className="w-[70%] my-[10px] mx-auto text-3xl text-white text-center font-light pc:w-[100%] pc:text-left tabs:w-[100%] tabs:text-left">ENVIRONMENTAL MANAGEMENT AGENCY</h3>
      <p className="w-[90%] my-[10px] mx-auto text-2xl text-white text-center font-light leading-normal pc:w-[100%] pc:text-left pc:my-[50px] tabs:w-[100%] tabs:text-left tabs:mt-[5px]">We Are Committed To Protect And Enhance Our Environment</p>
      <a className="block w-[25%] mb-[10px] mx-auto p-[8px] bg-green-400 text-white text-center font-semibold pc:w-[20%] pc:mx-[0px] pc:mt-[70px] tabs:w-[20%] tabs:mx-[0px] tabs:mt-[30px]" href="#">View Now!</a>
      </div>
    </div>
  )
}

export default Adverts