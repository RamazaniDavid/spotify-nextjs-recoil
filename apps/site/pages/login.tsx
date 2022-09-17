import React from 'react';
import { getProviders, signIn } from 'next-auth/react';

const Login: React.FC<any> = ({ providers }) => {

    return (
        <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
            <img src='/spotify.png' className='w-52 mb-5' />
            {Object.values(providers).map((provider, ix) => (
                <div key={ix} className='flex flex-col items-center'>
                    <button
                        onClick={() => signIn(provider["id"], { callbackUrl: "/" })}
                        className=' flex items-center justify-center p-5
                         text-white bg-[#18D860] rounded-lg'>
                        Ligin with {provider["name"]}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Login

export async function getServerSideProps(context) {
    const providers = await getProviders()

    return {
        props: {
            providers

        }, // will be passed to the page component as props
    }
}