import { getDownloadURL, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react'
import { Avatar, Button, Input, Loader, Message, Uploader, useToaster } from 'rsuite';
import { storage, storageRef } from '../../firebaseStorage';
import { mainColors } from '../inside-app/themes/colors';
import mainShadows from '../inside-app/themes/shadows';

const TestPage = () => {

    const [image, setImage] = useState(null)
    const [imageUrl, setUrl] = useState('')
    const toaster = useToaster();
    const handleImageChange = async (e: any) => {
        let target: EventTarget & any = e.target
        if (target.files[0]) {
            setImage(target.files[0])
        }
    }
    const handleSubmit = () => {
        if (image !== null) {
            const imageRef = storageRef(storage, `images/imagetest.jpg`)

            uploadBytes(imageRef, image).then((snap) => {
                getDownloadURL(imageRef).then((url) => {
                    setUrl(url)
                    toaster.push(<Message type='success'>
                        Image succesfully uploaded
                    </Message>, { placement: 'topCenter' })
                    window.setTimeout(() => {
                        toaster.clear
                    }, 3000)

                }).catch((err) => {
                    console.log(err.message)
                    toaster.push(<Message type='error'>
                        An error occured while getting the image url: {err.message}
                    </Message>, { placement: 'topCenter' })
                    window.setTimeout(() => {
                        toaster.clear
                    }, 3000)
                })
                setImage(null)
            }).catch((err) => {
                console.log(err.message)
                toaster.push(<Message type='error'>
                    An error occured when uploading image: {err.message}
                </Message>, { placement: 'topCenter' })
                window.setTimeout(() => {
                    toaster.clear
                }, 3000)
            })
        }
    }

    return (
        <div style={styles.pageWrap} className='flex-column'>
            <h1 style={styles.title}>
                Upload an image
            </h1>
            <input style={styles.input} type='file' onChange={handleImageChange} />
            <Button onClick={handleSubmit} >
                Submit
            </Button>
            <Avatar
                style={styles.avatar}
                size="lg"
                circle
                src={imageUrl}
                alt={`${image !== null ? 'image.name' : 'Upload image'}`}
            />
        </div>
    );
}

const styles = {
    pageWrap: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        color: mainColors.dark,
        margin: 50,
    },
    input: {
        width: 250,
        height: 40,
        marginBottom: 25,
    },
    avatar: {
        marginTop: 50,
        boxShadow: mainShadows.image,
    }
}

export default TestPage;