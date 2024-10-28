import { Mail, Phone } from 'lucide-react'
import React from 'react'

export function ShippingCard() {
    return (
        <>
            <div className='h-[300px] md:my-20 my-10 md:mx-20 mx-5 flex flex-col sm:flex-row sm:gap-0 gap-5 font-dm'>
                <div className='md:h-[300px] w-full sm:w-3/4 md:px-10 px-2 py-2 md:py-0 flex flex-col gap-8 justify-center'
                    style={{ background: 'url(https://t4.ftcdn.net/jpg/07/84/06/23/240_F_784062346_UKO8FYABQULsFBL1COIzmrFmjztouh9V.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className='px-5 md:px-0 '>
                        <h1 className='md:text-3xl text-lg font-chillax'>Free Shipping Services</h1>
                        <h6 className='md:text-xl text-sm font-chillax'>only for this region</h6>
                    </div>
                    <div className='flex flex-col gap-1 px-5 md:px-0 text-sm sm:text-base'>
                        <p className='flex'>
                        <Phone strokeWidth={1} className='text-sm sm:text-base'  />
                            <span className='ms-2'>+91 9496279843</span>
                        </p>
                        <p className='flex'>
                            <Mail strokeWidth={1} />
                            <span className='ms-2'>planto123@gmail.com</span>
                        </p>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15653.634207498138!2d76.04048473279795!3d11.231326773140747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba647a816ae1085%3A0xa8478cb3aaa25a21!2sAreekode%2C%20Kerala%20673639!5e0!3m2!1sen!2sin!4v1729862833418!5m2!1sen!2sin" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='hi' className='sm:w-1/4 w-full'></iframe>
            </div>
        </>
    )
}
