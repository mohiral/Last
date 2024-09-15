import React from 'react';
import PhoneIcon from '../assets/phone.svg';
import WhatsAppIcon from '../assets/whatsapp.svg';


function Contact() {
  const handlePhoneClick = () => {
    window.open('tel:+919462833780', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=+919462833780', '_blank');
  };

  return (
    <>
      {/* Contact Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 w-full max-w-lg mx-auto h-screen  bg-gradient-to-r from-indigo-600 to-purple-500" id='contact'>
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Get in Touch</h2>
        <form
          action="https://formspree.io/f/xdknngyy"
          method="POST"
          className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div> */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone No.</label>
            <input type="text" id="phone" name="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea id="message" name="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </div>
          <div>
            <ul style={{ minHeight: '42px' }} className="vendbox_action_items mt-4 flex justify-between">
              <li className="action_item mb-2 sm:mb-0">
                <div className="action_button_filled flex items-center bg-white rounded-md py-1 px-3 mr-2 border border-gray-600 hover:bg-gradient-to-r from-indigo-600 to-purple-500 hover:text-white" onClick={handlePhoneClick}>
                <img src={PhoneIcon} alt="Phone Icon" width="24" height="24" className='mr-2' />
                  <span>9462833780</span>
                </div>
              </li>
              <li className="action_item mb-2 sm:mb-0">
                <div className="action_button_unfilled flex items-center border border-gray-600 rounded-md py-1 px-3 mr-2" onClick={handleWhatsAppClick}>
                <img src={WhatsAppIcon} alt="Phone Icon" width="24" height="24" className='mr-2' />

                  <div>Chat</div>
                </div>
              </li>
            </ul>
          </div>
        </form>
      </section>

      {/* Map Section */}
      {/* <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
        <div className="max-w-4xl mx-auto">
          <iframe
            title="Shree Shyam Packers And Movers Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3558.721698172058!2d75.73372387543839!3d26.880581776666347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUyJzUwLjEiTiA3NcKwNDQnMTAuNyJF!5e0!3m2!1sen!2sin!4v1718362004767!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section> */}
    </>
  );
}

export default Contact;
