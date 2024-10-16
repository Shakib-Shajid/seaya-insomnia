import React from 'react';

const FAQ = () => {
    return (
        <div className='bg-[#6da3e1] w-[70%] rounded-3xl mx-auto my-10 pt-5 pb-16'>
            <h3 className='text-3xl md:text-5xl py-10 w-[60%] mx-auto '>Frequently Asked Question</h3>
            <div className='w-[60%] mx-auto bg-white rounded-2xl '>
                <div className="collapse collapse-arrow">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;