import axios from "axios"
import { useEffect, useState } from "react"


const useFetch = (urlLocation) => {
    const [state, setState] = useState()
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
      axios.get(urlLocation)
      .then((res) => {
        setState(res.data)
        setHasError(false)
    })
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
    }, [urlLocation])

    return [state, hasError]
}

export default useFetch