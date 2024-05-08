import React from 'react'
import { recentPosts } from '../../consts/recentPosts'
import { Link } from 'react-router-dom';
import { recentComments } from '../../consts/recentComments';
import { programs } from '../../consts/programs';
import Chat from '../Utils/Chat';

const Blog = () => {
  return (
    <div className="container pc:flex pc:flex-row pc:justify-between pc:items-start">
      <section className="posts pc:w-[68%]">
        {
          programs.map(item => {
            const { id, title, imgLocation, text, alt } = item;
            return (
              <div className='animate-greenSliderLeft mb-[50px]' key={id}>
                <h3 className='mb-[20px] text-2xl text-gray-700 font-semibold'>{title}</h3>
                <p className="mb-[15px] text-gray-400">By <span className="in-admin-category">admin</span> In <span className="in-admin-category">Uncategorized</span> Posted April 19, 2019</p>
                <img className='mb-[15px] block w-[100%] h-[100%] rounded-[5px]' src={imgLocation} alt={alt} />
                <p className="mb-[15px] text-gray-400 leading-normal text-justify font-light">{text}</p>
                <div className="chat-more flex justify-between items-center">
                  <Chat />
                  <button className='p-[10px] bg-green-400 rounded-[5px] text-white text-center font-bold'>MORE</button>
                </div>
              </div>
            )
          })
        }
      </section>
      <section className="animate-itemAppear search-posts pc:w-[30%]">
        <form action="">
          <div className="search-box flex justify-between items-center">
            <input className='block w-[80%] h-[50px] p-[8px] border-gray-400 border-[1px] rounded-[5px] text-green-400 placeholder:text-green-400 placeholder:italic tabs:w-[85%] pc:w-[80%]' type="text" placeholder="Search..." />
            <div className="search-icon w-[15%] h-[50px] pt-[5px] bg-green-400 rounded-[5px] tabs:w-[10%] pc:w-[15%]">
            <svg className="block stroke-white w-[60%] mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            </div>
          </div>
        </form>
        <h3 className="search-post-headers">RECENT POSTS</h3>
        <ul>
          {
            recentPosts.map(item => {
              const { id, text } = item;
              return <Link className="search-post-links" key={id}>{text}</Link>;
            })
          }
        </ul>
        <h3 className="search-post-headers">RECENT COMMENTS</h3>
        {
          recentComments.map(item => {
            const { id, title, links } = item;
            return (
              <div key={id}>
                <h3 className='search-post-headers'>{title}</h3>
                {links.map(item => {
                  const { id, text } = item;
                  return <Link className="search-post-sublinks" key={id}>{text}</Link>;
                })}
              </div>
            )
          })
        }
      </section>
    </div>
  )
}

export default Blog