import React from 'react'
import { team } from '../../consts/team'
import { mission } from '../../consts/mission';
import Adverts from '../Utils/Adverts'


const About = () => {
  return (
    <div>
      <h3 className="container mb-[20px] mt-[50px] text-gray-700 text-2xl font-bold">A FEW WORDS ABOUT US</h3>
      <section className="container about-us pc:flex pc:flex-row pc:justify-between pc:items-start tabs:flex tabs:flex-row tabs:justify-between tabs:items-start">
        <div className="animate-greenSliderLeft pc:w-[50%] tabs:w-[50%]">
          <img className="block my-[20px] w-[100%] h-[100%]" src="/Images/Header/bann-img-1.jpg" alt="big bubble-ball on a grass" />
        </div>
        <div className="animate-greenSliderRight pc:w-[49%] tabs:w-[46%] pt-[12px]">
        <h4 className="text-green-400 text-1xl text-justify font-bold">FUSCE CONSECTETUR ALIQUAM ERAT LAOREET LUCTUS PURUS</h4>
        <p className="about-description">We engage more people to our projects and activity to spread a word about our organization. We stand for expanding our activity all over the world to protect our planet.</p>
        <p className="about-description">We constantly work on promoting our projects and to engaging more people to them. We believe that our strength is in our cohesion and our joint efforts.</p>
        <p className="about-description">Nowadays technogenic world harms a lot to our planet. We work on minimization of its influence and hope we can save our nature for centuries.</p>
        <p className="about-description">We value every person and strive to help everyone in need. There are millions of people struggling from hunger, diseases and military actions. We put efforts to help them.</p>
        <button className='w-[15%] mt-[10px] p-[10px] bg-gray-700 rounded-[5px] text-white text-[0.8rem] text-center font-bold tabs w-[20%]'>MORE</button>
        </div>
      </section>
      <h3 className='container mb-[20px] mt-[50px] text-gray-700 text-2xl font-bold'>MISSION, VISION & VALUES</h3>
      <section className="container mission pc:flex pc:flex-row pc:justify-between pc:items-start tabs:flex tabs:flex-row tabs:justify-between tabs:items-start">
        {
          mission.map(item => {
            const { id, title, text } = item;
            return (
              <div className='animate-itemAppear mission-container' key={id}>
                <h1 className='w-[100px] h-[100px] my-[30px] mx-auto p-[25px] text-white text-4xl text-center rounded-full bg-gray-700 pc:w-[80px] pc:h-[80px] pc:text-2xl pc:p-[20px] tabs:w-[70px] tabs:h-[70px] tabs:p-[10px]'>{id}</h1>
                <div className="pc:w-[70%] tabs:w-[60%]">
                <h3 className="mission-title">{title}</h3>
                <p className="mission-text">{text}</p>
                </div>
              </div>
            )
          })
        }
      </section>
      <h3 className='container mt-[50px] py-[20px] text-gray-700 text-2xl bg-gray-100 font-bold'>OUR TEAM</h3>
      <section className="container team bg-gray-100 pc:flex pc:flex-row pc:justify-between pc:items-start tabs:flex tabs:flex-row tabs:justify-between tabs:items-start">
        {
          team.map(item => {
            const { id, imgLocation, name, role, alt } = item;
            return (
              <div className='animate-itemAppear pc:w-[24%] mb-[20px] tabs:w-[24%]' key={id}>
                <img src={imgLocation} alt={alt} />
                <h3 className='my-[20px] text-2xl text-gray-700 font-bold'>{name}</h3>
                <p className='text-gray-700 text-justify font-light text-[0.8rem]'>{role}</p>
              </div>
            )
          })
        }
      </section>
      <Adverts />
    </div>
  )
}

export default About