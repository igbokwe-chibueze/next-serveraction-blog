import Form from '@/components/Form'
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";


const page = async () => {
  return (
    <main className='text-center pt-16 px-5'>
        <h1 className='text-4xl md:text-5xl font-bold mb-5'>Create a post</h1>

        <Form />

        <div className='flex flex-col max-w-[400px] mx-auto transition-transform hover:scale-105 duration-600'>
          <LogoutLink>
            <span className='bg-red-700 hover:bg-red-500 transition-colors duration-600 
              text-white px-3 py-2 rounded-md'>
              LogOut
            </span>
          </LogoutLink>
        </div>

    </main>
  )
}

export default page
