'use client'
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';


const App = () => {
    const pathname = usePathname()
    const [db, setDB] = useState({})
    console.log(pathname)
    useEffect(()=>{
      async  function getDB () {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${pathname}`)
        const data = await res.json()
        setDB(data)
    }

    getDB()  
}, [])
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-blue-600 text-white py-4">

                <div className="container mx-auto">
                    <h1 className="text-2xl font-bold">My Awesome App {pathname}</h1>
                </div>
            </header>

            {/* Main content */}
            <main className="flex-grow container mx-auto py-8">
                <section>
                    <div className='w-full flex justify-center '>
                        <img src={db.url} className='h-[100px] w-[100px]' alt="" />
                    </div>

                    <h2 className="text-xl font-semibold mb-4">Welcome to the app!</h2>
                    <p>
                        This is a simple template using JSX. You can customize this section to add more content,
                        components, or interactivity to your application.
                    </p>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>© 2024 My Awesome App. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
