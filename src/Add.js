import { toast } from "react-toastify";

const getStoreReadList = () => {
const storedListStr = localStorage.getItem('read-list');
if(storedListStr){
const storedList = JSON.parse(storedListStr);
return storedList;
}
else{
return [];
}
}
const addToStoredRead = (id) => {
const storedList = getStoreReadList();
if(storedList.includes(id)){
                console.log(id, 'alread exits in the read list')
}

else{
                storedList.push(id);
                const storedListStr = JSON.stringify(storedList);
                localStorage.setItem('read-list',storedListStr)
toast('this book is added to y0ur read list')
}

}
export { addToStoredRead,getStoreReadList }
