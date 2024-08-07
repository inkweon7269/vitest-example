import React, {FC, useState} from 'react';

interface IPropsTextField {
    onChange?: (text: string) => void;
}

const TextField: FC<IPropsTextField> = ({onChange}) => {
    const [value, setValue] = useState('');

    const changeValue = (e) => {
        setValue(e.target.value);
        onChange?.(e.target.value);
    }

    return (
        <input
            type="text"
            placeholder="텍스트를 입력해 주세요."
            onChange={changeValue}
            value={value}
        />
    );
};

export default TextField;