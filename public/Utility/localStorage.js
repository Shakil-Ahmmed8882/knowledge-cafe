
const getBookmarkFromLocalStorage = () =>{
      const retrievedBookmark = localStorage.getItem('book-mark')

      if(retrievedBookmark){
            return JSON.parse(retrievedBookmark)
      }
      return []
}

const setItemInLocalStorage  = (value) =>{
      const existingBookmarks = getBookmarkFromLocalStorage() 

      existingBookmarks.push(value)
      if(existingBookmarks){
            const stringifiedValue = JSON.stringify(existingBookmarks);
            localStorage.setItem('book-mark', stringifiedValue)
      }

}

export {setItemInLocalStorage, getBookmarkFromLocalStorage}