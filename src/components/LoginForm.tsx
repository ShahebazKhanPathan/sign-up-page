import { useForm } from "react-hook-form";

export interface User {
    name: string;
    email: string;
    password: string;
}

interface Props {
    onSubmit: (data: User) => void;
}

const LoginForm = ({ onSubmit }: Props) => {

    const { register, handleSubmit, reset } = useForm<User>();

    return (
        <form onSubmit={handleSubmit((data) => { onSubmit(data);  reset({ name: "", email: "", password: ""})  })}>
            <h3>Sign Up</h3>
            <div className="form-group">
                <div className="label form-label">Name</div>
                <input {...register('name', { minLength: 5, required: true })} type="text" id="name" className="form-control" />
            </div>
            <div className="form-group">
                <div className="label form-label">Email</div>
                <input {...register('email', { minLength: 5, required: true})} type="email" id="email" className="form-control" />
            </div>
            <div className="form-group mb-3">
                <div className="label form-label">Password</div>
                <input {...register('password', { minLength: 8, required: true})} type="password" className="form-control" />
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form> 
    )
}

export default LoginForm;