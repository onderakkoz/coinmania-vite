import React from 'react'
import LoadMoreView from '../view/LoadMoreView'
import { useSearchParams } from 'react-router-dom'

const LoadMoreController = () => {
  const [params, setParams] = useSearchParams()

const handleClick=()=>{
//* guncel sayfa sayisini alir
  const pageNumber = params.get("page") || 1 ;
//* URL'i gunceller
  setParams({page: Number(pageNumber) +1 })

}
    
  return (
    <LoadMoreView handleClick={handleClick}/>
  )
}

export default LoadMoreController;