import React from 'react'
import { currentTopics } from '../../consts/topics';

const Welcome = () => {
  return (
    <div className='container'>
        <h1 className='mt-[40px] mb-[20px] text-5xl text-gray-700 text-center font-semibold'>WELCOME!</h1>
        <h3 className='w-[95%] mx-auto mb-[40px] text-[1.8rem] text-gray-500 leading-normal text-justify font-bold pc:text-center tabs:text-center tabs:w-[100%] tabs:text-[1.5rem]'>We are committed to protect and enhance our environment</h3>
        <section className="pc:w-[98%] mx-auto pc:flex pc:flex-row pc:justify-between pc:items:center tabs:flex tabs:flex-row tabs:justify-between tabs:items:center">
                        <div className="icon-container animate-itemAppear">
                            <svg className="icon-logo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                            </svg>
                            <h3 className="icon-title">Lorem dolor sit amet</h3>
                            <p className="icon-text">If you are a person who supports our ideas and wants to make his utmost contribution, we welcome you!</p>
                            <a className='icon-link' href="#">more</a>
                        </div>
                        <div className="icon-container animate-itemAppear">
                            <svg className="icon-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                            </svg>
                            <h3 className="icon-title">Eiusmod tempor</h3>
                            <p className="icon-text">Every person can participate in our charity event. We value your impact to our projects and appreciate your help.</p>
                            <a className='icon-link' href="#">more</a>
                        </div>
                        <div className="icon-container animate-itemAppear">
                            <svg className="icon-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                            <path fillRule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087ZM12 10.5a.75.75 0 0 1 .75.75v4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-4.94a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                            </svg>
                            <h3 className="icon-title">Ncididunt ute labore</h3>
                            <p className="icon-text">You can support any of our campaigns by either your personal participation or any donation.</p>
                            <a className='icon-link' href="#">more</a>
                        </div>
                        <div className="icon-container animate-itemAppear">
                            <svg className="icon-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z" clipRule="evenodd" />
                            </svg>
                            <h3 className="icon-title">Et harum quidem</h3>
                            <p className="icon-text">Our organization expand the ideas of saving world’s ecology and is grateful for every little donation!</p>
                            <a className='icon-link' href="#">more</a>
                        </div>
        </section>
        <h3 className="w-[100%] mb-[30px] ml-[20px] text-2xl text-gray-700 font-semibold text-start tabs:ml-0 pc:ml-[18px]">CURRENT TOPICS</h3>
        <section className="w-[90%] mx-auto pc:w-[98%] pc:flex pc:flex-row pc:justify-between pc:items-start tabs:flex tabs:flex-row tabs:justify-between tabs:items-start tabs:w-[100%]">
            {
                currentTopics.map(item => {
                    const { id, title, desc, imgLocation, alt } = item;
                    return (
                        <div className="animate-itemAppear my-[20px] pc:w-[32%] pc:h-[400px] tabs:w-[32%] tabs:h-[330px]" key={id}>
                            <div className="banner-container">
                                <img src={imgLocation} alt={alt} />
                            </div>
                            <h3 className='topics-title'>{title}</h3>
                            <p className='topics-description'>{desc}</p>
                            <a className='topics-link' href="#">MORE</a>
                        </div>
                    )
                })
            }
        </section>
    </div>
  )
}

export default Welcome