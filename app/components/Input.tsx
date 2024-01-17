"use client"

const className = `
            p-3
            my-2
            border-2
            border-gray-200
            rounded
            w-full
            focus:outline-none
            focus:bg-white
            focus:border-blue-500
`

const Input = () => {

    return (
        <input type="text" className={className} />
    );
}

export default Input;