import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleSignup = event => {
        event.preventDefault();
    }

    return (
        <div className="hero w-full my-20 ">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row gap-20  ">
                <div className="text-center lg:text-left">

                    <img className='w-3/4' src='' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login</h1>

                    <form onSubmit={handleSignup} className="card-body my-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" placeholder="Confirm password" className="input input-bordered" />

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />


                        </div>
                    </form>
                    <p className='py-5 text-center'>New to Genius Car <Link className='text-orange-600 font-bold' to='/signup'> Sign-Up</Link> </p>

                </div>
            </div>
        </div>
    );
};
export default Register;