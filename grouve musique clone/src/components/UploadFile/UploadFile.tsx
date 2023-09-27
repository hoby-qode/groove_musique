import React from 'react'
import styles from './UploadFile.module.css'
import { useRef, useState } from 'react'
const UploadFile = () => {
  const [dragging, setDragging] = useState<Boolean>(false)
  const [audioFile, setAudioFile] = useState<File | null>(null)

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(true)
  }
  const handleDragLeave = () => {
    setDragging(false)
  }
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && droppedFile.type.startsWith('audio/')) {
      setAudioFile(droppedFile)
    } else {
      alert('Veuillez déposer un fichier audio valide')
    }
    console.log(audioFile)
  }
  return (
    <div
      className={`${styles.upload} ${dragging ? styles.onDragEnter : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {dragging ? <p>glissez et déposez un fichier audio ici</p> : ''}
    </div>
  )
}

export default UploadFile
