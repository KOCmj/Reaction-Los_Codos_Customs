import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CarForm from './CarForm';
import { faX } from '@fortawesome/free-solid-svg-icons';


type Props = {
    id?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = (props: Props) => {
    if (!props.open) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20" onClick={props.onClose}>
            <div className="bg-zinc-500 border border-red-600 w-96 p-4 rounded-lg" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between">
                    <h2 className="text-xl font-bold text-center items-center">Create A Car</h2>
                    <button className="text-xl" onClick={props.onClose}>
                        <FontAwesomeIcon icon={faX} />
                    </button>
                </div>
                <div className="mt-4">
                    <CarForm id={props.id} />
                </div>
            </div>
        </div>
    )
}

export default Modal;


