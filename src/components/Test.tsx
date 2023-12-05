import {getData} from '@/utils/getData'

const Test:React.FC<{is:boolean}> = async({is}) => {
  const res = await getData(is)
  return <div>{res.age}</div>
}

export default Test