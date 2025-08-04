import React, { useEffect } from "react";
import email_img from "../assets/email_icon.svg"
import {assets} from "../assets/assets"

import { Link } from "react-router-dom";
import axios from "axios";


const Contact = () => {
   const requrl = window.location.href
    const formdata = new FormData()
    formdata.append("requrl",requrl)
    const token = localStorage.getItem("token") && localStorage.getItem("token")
    useEffect(()=>{
        const addHistory = async ()=>{
          try {
              const res = await axios.post("https://blog-post-frontend-red.vercel.app/blog/allroutes",{requrl},{headers:{"authorization":"Bearer "+token}})
          } catch (error) {
            console.log(error)
          }
        }
        addHistory()
    },[])
  return (
    <div id="contact" className="min-h-screen sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto ">
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold mb-4">Get In Touch</h2>
              <p className="text-md text-gray-600">
                Let's discuss your next project or opportunity
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
                <p className="text-lg mb-8 text-gray-500">
                  I'm always interested in new opportunities and challenging
                  projects. Whether you need a full stack developer for your
                  team or want to discuss a freelance project, I'd love to hear
                  from you.
                </p>

                <div className="space-y-6 text-gray-500">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                     <img src={email_img} alt="" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700" >Email</h4>
                      <p className="text-gray-600">swapnilraut1698@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12   bg-blue-100 rounded-full flex items-center justify-center mr-4">
                       <img src={assets.linkd_in} alt="" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">LinkedIn</h4>
                      <p className="text-gray-600"><Link to={"https://www.linkedin.com/in/swapnil12/"}>https://www.linkedin.com/in/swapnil12/</Link></p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                       <img src={assets.github} alt="" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">GitHub</h4>
                      <p className="text-gray-600"><Link to={"https://github.com/testgithubritgu"}>https://github.com/testgithubritgu</Link></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-1 py-3 rounded-lg">
                <form action="https://api.web3forms.com/submit" method="POST" id="contact-form  ">
                <input type="hidden" name="access_key" value="ef4bcfe1-6610-4ea1-b3b1-e11fb65fe346"></input>
                  <div className="mb-6">
                    <label
                      for="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required={true}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      name="name"
                      
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required=""
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      name="email"
                      
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required=""
                      rows="4"
                      maxlength="500"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                    ></textarea>
                    <div className="text-sm text-gray-500 mt-1">
                      0/500 characters
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg font-semibold transition-colors whitespace-nowrap bg-blue-600 hover:bg-blue-700 cursor-pointer text-white"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
