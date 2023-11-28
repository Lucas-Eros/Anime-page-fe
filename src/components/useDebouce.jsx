import { useRef } from "react"

const useDebouce = (fn, delay) => {
    const timeOutRef = useRef(null)
    const debounceFn = (...args) => {
        window.clearTimeout(timeOutRef.current)
        timeOutRef.current = window.setTimeout(() => {
            fn(...args)
        }, delay)
    }

    return debounceFn
}

export default useDebouce