import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react';
const AddEmoji = () => {
    const [selectedEmogi,setselectedEmogi] = useState([])
    const [showPicker,setshowPicker] = useState(false)
    console.log(selectedEmogi.join("")+"j")
  return (
    <div className='w-full flex justify-center'>
      
    </div>
  )
}

export default AddEmoji
