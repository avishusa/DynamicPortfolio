import React from 'react';

function LeftSidebar() {
  const handleEmailClick = () => {
    const receiverEmail = "avishusa45@gmail.com"; 
    const mailtoUrl = `mailto:${receiverEmail}`;
    window.open(mailtoUrl);
  };

  return (
    <div className='fixed left-0 bottom-0 px-10 sm:static'>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col gap-3 sm:flex-row'>
          <a href='https://www.linkedin.com/in/avish-modi-2221b31b4/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIo%2FUXFduSUOr8KyRBJqT6w%3D%3D' target="_blank"><i className="ri-linkedin-box-fill text-gray-500"></i></a>
          <i className="ri-mail-fill text-gray-500" onClick={handleEmailClick}></i>
          <a href='https://github.com/avishusa' target="_blank"><i className="ri-github-fill text-gray-500"></i></a>
        </div>
        <div className='w-[1px] h-32 bg-[#125f63] sm:hidden'>

        </div>
      </div> 
    </div>
  );
}

export default LeftSidebar;
