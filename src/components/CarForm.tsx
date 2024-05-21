import Input from "./Input";
import { useForm } from "react-hook-form";
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseName, chooseYear, chooseModel, chooseMake } from "../redux/slices/RootSlice";

interface CarFormProps {
    id?: string[]
}

const CarForm = (props: CarFormProps) => {
    const { register, handleSubmit } = useForm({});
    const dispatch = useDispatch();
    const store = useStore();


    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id);
        console.log(data);
        if (props.id && props.id.length > 0){
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data.name } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 500);
            event.target.reset();
        } else {
            dispatch(chooseName(data.name));
            dispatch(chooseYear(data.year));
            dispatch(chooseModel(data.model));
            dispatch(chooseMake(data.make));

            server_calls.create(store.getState())
            setTimeout(() => {window.location.reload()}, 500);
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Car Name</label>
                    <Input {...register('name')} name='name' placeholder='Enter Your Car Name'/>
                </div>
                <div>
                    <label htmlFor="email">Year</label>
                    <Input {...register('year')} name='year' placeholder='Enter Your Car Year'/>
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('model')} name='model' placeholder='Enter Your Car Model'/>
                </div>
                <div>
                    <label htmlFor="make">Make</label>
                    <Input {...register('make')} name='make' placeholder='Enter Your Car Make'/>
                </div>
                <div className="flex p-1">
                    <button className="flex justify-start text-red-700 border border-zinc-800 bg-zinc-800 hover:text-black hover:bg-red-700 hover:border-black m-3 p-2 rounded">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CarForm;
