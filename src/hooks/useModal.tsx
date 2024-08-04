import {useState} from "react";

const UseModal = (initialValue = false) => {
    const [isModalOpened, setIsModalOpened] = useState(initialValue);

    const toggleIsModalOpened = () => setIsModalOpened(!isModalOpened);

    return {
        toggleIsModalOpened,
        isModalOpened,
    }
};

export default UseModal;