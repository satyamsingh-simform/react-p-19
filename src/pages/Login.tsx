import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import { useAppDispatch } from "../hooks/useStoreType"
import { fetchUserData } from "../features/auth-thunk/AuthSlice"

const loginFormSchema=z.object({
    username:z.string().max(100,'max 100 char'),
    password:z.string().min(8,'min 8 char needed').max(100,'max 100 char is needed')
})
type LoginDataType=z.infer<typeof loginFormSchema>


export const Login = () => {

    const dispatch=useAppDispatch();
    // const {user,isAuthenticated}=useAppSelector(store=>store.auth);

    const {register,handleSubmit,formState:{errors}}=useForm<LoginDataType>({
        resolver:zodResolver(loginFormSchema)
    })

    function submitLoginData(data:LoginDataType){
        console.log(data);
        dispatch(fetchUserData(data));
    }

    return ( 
      <div className=" h-screen flex justify-center items-center">
        <div className="shadow-2xl border border-gray-200 rounded-lg p-7 w-sm">
            <h1 className="text-2xl text-center pb-5 font-bold">FoodCart</h1>
            <form onSubmit={handleSubmit(submitLoginData)} className="flex flex-col gap-5">
                <div className="form-control flex flex-col ">
                   <label className="label label-text" htmlFor="email">Username</label>
                   <input type="text" id="email" placeholder="enter your username"
                    className={`w-full input ${errors.username && 'input-error'}`} 
                    {...register('username')}
                   />
                    {errors.username && <span className="text-error">{errors.username.message}</span>}
                </div>
                <div className="form-control flex flex-col ">
                   <label className="label label-text" htmlFor="password">Password</label>
                   <input type="password" id="password" placeholder="enter your password"
                   className={`w-full input ${errors.password && 'input-error'}`}
                    {...register('password')}
                   />
                    {errors.password && <span className="text-error">{errors.password.message}</span>}
                </div>
                <div className="form-control flex justify-center mt-3">
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
                <div className="text-center text-sm">
                    <span >
                        Already have an account?  Signup
                    </span>
                </div>
            </form>
        </div>
      </div>
    )
}
