import React from 'react'

const EmployerProfile = () => {
  return (
    <div>
      <div className="employer-name">Employer</div>
      <hr className='employer-line' />
      <div className='employer-bullet' >
        <ul className="employer-details">
        <li className='employer-title'>Position:<p className='employer-desc'>Senior Software Developer</p></li>
        <li className='employer-title'>Contact Information:<p className='employer-desc'>
            <ul>
                <li>Email: software.senior@example.com</li>
                <li>Phone: (123) 456-7890</li></ul></p></li>
        <li className='employer-title'>Summary:<p className='employer-desc'>A Senior Software Developer with over 8 years of experience in talent acquisition, employee relations, and performance management. Skilled in developing software that align with company goals, improving customer satisfaction, and fostering a positive workplace culture. Passionate about creating opportunities for employee growth and development.</p></li>
        <li className='employer-title'>Key Skills:
        <p className='employer-desc'>
            <ul>
                <li>Talent Acquisition & Recruitment</li>
                <li>Performance Management</li>
                <li>Superioir in all computer languages</li>
            </ul>
            </p></li>
        <li className='employer-title'>Education:
        <p className='employer-desc'>Bachelor of Technology
        University of London, London, UK</p></li>
        </ul>
      </div>
    </div>
  )
}

export default EmployerProfile
