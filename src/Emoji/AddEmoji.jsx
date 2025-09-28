import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react';
const AddEmoji = () => {
    const [selectedEmogi,setselectedEmogi] = useState([])
    const [showPicker,setshowPicker] = useState(false)

  return (
    <div className='w-full flex justify-center'>
      <img src="" alt="" />
      <img src="" alt="" />
    </div>
  )
}

export default AddEmoji
