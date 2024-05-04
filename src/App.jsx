import { useEffect, useState } from 'react'
import MainPage from './MainPage'
import {db} from './config/firebase'
import {getDocs, collection} from 'firebase/firestore'

function App() {

  const [productList, setProductList] = useState([]);

  const productCollection = collection(db, "product")

  useEffect(() =>{
    const getProductList = async () =>{
        //read ang get the data that are stored in the firestore
        //set the productList
        try{
        const data = await getDocs(productCollection);
        const filteredData = data.docs.map((doc) =>({
          ...doc.data(),
          id: doc.id,
        }));
         setProductList(filteredData);
        } catch(err) {
          console.error(err)
        }
    }
  getProductList();
  }, [])
  
  return (
    <>
      <MainPage/>
      
    </>
  )
}

export default App
