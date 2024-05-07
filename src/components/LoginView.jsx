import React, {useState} from 'react';
//import firebase from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginView = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                //redirect to the main page
                window.location.href = '/';
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div className="w-screen h-screen flex sm:flex-row flex-col">
            <div className="absolute bg-slate-100 p-2 flex flex-row w-full items-center ring-1 ring-slate-300 shadow-sm gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                </svg>
                <h2 className="text-lg font-semibold p-2">Tasks App</h2>
            </div>


            <div className="flex flex-col sm:w-1/3 w-full items-center justify-center sm:h-full h-screen">
                <div className="bg-white p-4">
                    <div className="flex items-start w-full">
                        <h1 className="text-2xl font-semibold p-2 pt-16 w-fit">Login</h1>
                    </div>

                    <form onSubmit={handleLogin} className="flex flex-col p-2 w-fit gap-1">
                        <label className="text-sm flex flex-col" htmlFor="email">Email
                            <input type="email" id="username" name="email" className="focus:outline-none w-72 p-1 border border-gray-300 rounded" />
                        </label>
                        <div className="flex flex-row w-full justify-between text-sm">
                            <span></span>
                            <p className="text-sm">Forgot your password?</p>
                        </div>
                        <label className="text-sm flex flex-col" htmlFor="password">Password
                            <input type="password" id="password" name="password" className="focus:outline-none w-72 p-1 border border-gray-300 rounded" />
                        </label>
                        <div className="flex flex-row w-full justify-between text-sm">
                            <span></span>
                            <p className="text-sm">Forgot your password?</p>
                        </div>

                        <div className="p-1 text-sm gap-1 flex items-center">
                            <input className="accent-purple-500" type="checkbox" id="remember" name="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>

                        <button className="bg-purple-500 text-white p-2 rounded">Login</button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col bg-purple-300 sm:w-2/3 w-full sm:p-0 p-4 items-center justify-center h-full gap-2">
                <div className="sm:w-2/3 text-slate-800 gap-4 flex flex-col">
                    <h2 className="text-2xl font-semibold p-2">Why Use Task App?</h2>
                    <hr className="w-full border-1 border-purple-600 mx-2" />

                    <div>
                    <h2 className="text-lg font-semibold px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        Reclaim Your Time</h2>
                    <p className="p-2 text-sm">Juggling multiple tasks and projects can be overwhelming.
                        Task App brings order to the chaos, allowing you to prioritize your responsibilities and
                        stay focused on what matters most.
                    </p>
                    </div>

                    <div>
                    <h2 className="text-lg font-semibold px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>
                        Productivity, Simplified.</h2>
                    <p className="p-2 text-sm">Intricate project management tools often come with a steep
                        learning curve. Task App's intuitive interface and user-friendly features make it easy to hit
                        the ground running and maximize your productivity from day one.
                    </p>
                    </div>

                    <div>
                    <h2 className="text-lg font-semibold px-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                        Organize. Conquer. Repeat.</h2>
                    <p className="p-2 text-sm">With Task App, organizing your life becomes a seamless process.
                        Conquer your goals with ease, then confidently take on new challenges –
                        the cycle of productivity never ends.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginView;
