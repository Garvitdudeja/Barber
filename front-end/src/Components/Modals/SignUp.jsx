import React, { Fragment, useState } from "react";
import axios from 'axios'
import { Dialog, Transition } from '@headlessui/react'
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";

export default function SignUp(props) {
    const { SignUpModal, setSetSignUpModal, setUserData } = props;
    const [UserInfo, setUserInfo] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [Image, setImage] = useState();

    const handleChange = (e) => {
        setUserInfo({ ...UserInfo, [e.target.name]: e.target.value });
    }
    const handleImage = (e) =>{
    }

    const handleSubmit = async (e) => {
        setError(null)
        const formData = new FormData(e.target);
        // const data = Object.fromEntries(formData);
        const userInfo = await axios.post('/auth/signUp', formData);
        axios.defaults.headers.common['Authorization']  = "Bearer "+ userInfo.data.token;
        setLoading(true)
        if (userInfo.data.token) {
            localStorage.setItem('userCredentials', JSON.stringify(userInfo.data))
            setUserData(userInfo.data)
            setLoading(false)
            closeModal()
        }
        if (userInfo.data.error) {
            setError(userInfo.data.error)
            setLoading(false)
        }
    }

    function closeModal() {
        setSetSignUpModal(false)
    }

    function openModal() {
        setSetSignUpModal(true)
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

            <Transition appear show={SignUpModal} as={Fragment}>
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
                                        SIGN UP
                                    </Dialog.Title>
                                    <div className="mt-[1rem]">                                       <form
                                        onSubmit={(event) => {
                                            event.preventDefault();
                                            handleSubmit(event)
                                        }}
                                    >
                                        <TextField
                                            placeholder="123@example.com"
                                            required
                                            type='email'
                                            name='email'
                                            label="Email" variant="outlined"
                                            onChange={handleChange}
                                            sx={{ mb: 1 }}
                                            fullWidth
                                        />
                                        <TextField
                                            placeholder="Beast_Aman"
                                            name="userName"
                                            type='text'
                                            required
                                            label="UserName" variant="outlined"
                                            onChange={handleChange}
                                            sx={{ mb: 1 }}
                                            fullWidth

                                        />
                                        <TextField
                                            placeholder="Use a strong Password"
                                            name="password"
                                            type='password'
                                            required
                                            label="Password" variant="outlined"
                                            onChange={handleChange}
                                            sx={{ mb: 1 }}
                                            fullWidth

                                        />
                                        <TextField
                                            placeholder="9090121234"
                                            name="phoneNumber"
                                            type='number'
                                            required
                                            label="PhoneNumber" variant="outlined"
                                            onChange={handleChange}
                                            sx={{ mb: 1 }}
                                            fullWidth

                                        />
                                        <TextField 
                                        type='file'
                                        name="image"
                                        onChange={handleImage}
                                        />
                                        <p className="text-red-500">{error}</p>
                                        <br />
                                        <LoadingButton type="submit"
                                            loading={loading}
                                             >SignUp</LoadingButton>
                                    </form>
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
