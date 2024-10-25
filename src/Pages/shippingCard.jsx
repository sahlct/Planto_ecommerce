import React from 'react'

export default function ShippingCard() {
    return (
        <>
        <div className='h-[300px] my-20 mx-20 flex'>
            <div className='h-[300px] w-3/4 md:px-10 font-dm flex flex-col gap-8 justify-center'
            style={{background:'url(https://t4.ftcdn.net/jpg/07/84/06/23/240_F_784062346_UKO8FYABQULsFBL1COIzmrFmjztouh9V.jpg)', backgroundRepeat:'no-repeat', backgroundSize:'contain'}}>
                <div>
                    <h1 className='text-3xl'>Free Shipping Services</h1>
                    <h6 className='text-xl'>only for this region</h6>
                </div>
                <div className='flex flex-col gap-1'>
                <p className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /><path d="M15 6h6m-3 -3v6" /></svg>
                    <span className='ms-2'>+91 9496279843</span>
                </p>
                <p className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                    <span className='ms-2'>planto123@gmail.com</span>
                </p>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15653.634207498138!2d76.04048473279795!3d11.231326773140747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba647a816ae1085%3A0xa8478cb3aaa25a21!2sAreekode%2C%20Kerala%20673639!5e0!3m2!1sen!2sin!4v1729862833418!5m2!1sen!2sin" width="400" height="283" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='hi'></iframe>
            </div>
        </>
    )
}
