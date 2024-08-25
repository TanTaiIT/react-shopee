import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import authApi from "../apis/auth.api"
import omit from 'lodash/omit'
import isAxiosUnprocessableEntityError from './../utils/index'
import { ErrorResponse } from "../types/utils"
interface FormData {
  email: string
  password: string
  confirm_password: string
}

export default function Register() {
  const { register, handleSubmit, formState: { errors }, setError } = useForm<FormData>()
  const RegisterMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.registerAccount(body)
  })

  const handleSubmitForm = handleSubmit((data) => {
    const payload = omit(data, ['confirm_password'])
    RegisterMutation.mutate(payload, {
      onSuccess: (data) => {
        console.log('data', data)
      },

      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error?.response?.data?.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: formError[key as keyof Omit<FormData, 'confirm_password'>],
                type: 'Server'
              })
            })
          }
        }

      }
    })
  })
  return (
    <div className="bg-[#ee4d2d] h-[500px] p-10">
      <div className="max-w-[1024px] mx-auto bg-center bg-cover bg-no-repeat p-3 h-[100%] flex justify-center lg:justify-between bg-[url('https://down-vn.img.susercontent.com/file/sg-11134004-7rdvs-lyc1vg621m5ec0')]">
        <div className="w-[50%] max-sm:hidden"></div>
        <div className="w-[50%]">
          <form onSubmit={handleSubmitForm} className="p-8 bg-white w-[400px] rounded-sm">
            <label className="text-[18px]">Dang ky</label>
            <div className="mt-3">
              <input {...register('email', { required: true })} type="text" placeholder="Email/So dien thoai/ten dang nhap" className="p-2 w-[100%] border-2 outline-none" />
              <span className="text-red-500">{errors.email?.message}</span>
            </div>

            <div className="mt-9">
              <input {...register('password', { required: true })} type="password" placeholder="mat khau" className="p-2 w-[100%] border-2 outline-none" />
              <span className="text-red-500 ">{errors.password?.message}</span>
            </div>

            <div className="mt-9">
              <input {...register('confirm_password', { required: true })} type="password" placeholder="nhap lai mat khau" className="p-2 w-[100%] border-2 outline-none" />
              <span className="text-red-500">{errors.confirm_password?.message}</span>
            </div>

            <button type="submit" className="mt-9 rounded-none w-[100%] bg-[#ee4d2d] uppercase text-white ease-in-out duration-300">
              Dang nhap
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
