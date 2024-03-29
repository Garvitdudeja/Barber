import React from "react";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { TextField, Button } from '@mui/material'
import { LoadingButton } from '@mui/lab';
import axios from 'axios'

export default function Login(props) {
    const { LoginModal, setLoginModal, setUserData } = props;
    const [loginInfo, setLoginInfo] = useState({})
    const [err, setErr] = useState()
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        const userInfo = await axios.post('/auth/logIn', loginInfo,{
            withCredentials: true
        })
        console.log(userInfo);
        axios.defaults.headers.common['Authorization']  = "Bearer "+userInfo.data.token;
        console.log(axios.defaults.headers.common['Authorization'])
        setLoading(true)
        if (userInfo.data.token) {
            localStorage.setItem('userCredentials', JSON.stringify(userInfo.data))
            setUserData(userInfo.data);
            setLoading(false);
            closeModal();
        }
        if (userInfo.data.error) {
            setErr(userInfo.data.error)
            setLoading(false)
        }

    }

    function closeModal() {
        setLoginModal(false)
        setErr('')
    }

    function openModal() {
        setLoginModal(true)
    }

    return (
        <>
            {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Login
        </button>
      </div> */}

            <Transition appear show={LoginModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        LOG IN
                                    </Dialog.Title>
                                    <div className="mt-[1rem]">
                                        <form
                                            onSubmit={(event) => {
                                                event.preventDefault();
                                                handleSubmit();
                                            }}
                                        >
                                            <TextField
                                                placeholder="123@example.com"
                                                required
                                                type="email"
                                                name='email'
                                                label="Email" variant="outlined"
                                                onChange={handleChange}
                                                sx={{ my: 3 }}
                                                fullWidth
                                            />
                                            <TextField
                                                placeholder="123@example.com"
                                                name="password"
                                                type="password"
                                                required
                                                label="Password" variant="outlined"
                                                onChange={handleChange}
                                                sx={{ mb: 4 }}
                                                fullWidth

                                            />
                                            <br />
                                            <p className="text-red-500">{err}</p>
                                            <LoadingButton type="submit"
                                                loading={loading} >Login</LoadingButton>
                                        </form>
                                    </div>

                                    <div className="mt-4">
                                        {/* <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-white bg-[#560bad] hover:bg-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            

                                        </button> */}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
