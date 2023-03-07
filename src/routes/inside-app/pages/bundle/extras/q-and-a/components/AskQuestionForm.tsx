import { ref, set, update } from 'firebase/database';
import React, { Component, useState } from 'react';
import { Button, Input, Message, useToaster } from 'rsuite';
import PushNotification from '../../../../../../../components/Notification';
import { auth, database } from '../../../../../../../firebase';
import bundleStrings from '../../../../../../../library/string/Bundle';
import { useMediaQuery } from '../../../../../../../misc/custom-hooks';
import MainBtn from '../../../../../components/MainBtn';
import { mainColors } from '../../../../../themes/colors';

interface IProps {
  bundleId: string,
  questionsData: any[],
  en: boolean
}
const AskQuestionForm = (props: IProps) => {
    const { bundleId, questionsData, en } = props
    const [question, setQuestion] = useState('')
    const isMobile = useMediaQuery('(max-width: 1100px)')

    const errorMessage = (
        <Message showIcon type='error'>
            <div>
                Please write a question in the textfield before adding a question
            </div>
        </Message>
    )

    const successMessage = (
        <Message showIcon type='info'>
            <div>
                Your question has been added to the project
            </div>
        </Message>
    )

    const toaster = useToaster()
    const addQuestionToProject = () => {
        if (question === '') {
            toaster.push(errorMessage, { placement: 'topCenter' })
            window.setTimeout(() => {
                toaster.clear
            }, 3000)
        } else {
            const reference = ref(database, 'questions/' + Date.now().toString())
            set(reference, {
                project: bundleId,
                content: question,
                creator: auth.currentUser?.uid,
                createdAt: Date.now()
            })
            toaster.push(successMessage, { placement: 'topCenter' })
            window.setTimeout(() => {
                toaster.clear
            }, 3000)
        }
    }

    return (
        <>
            <Input
            style={styles.input}
            onChange={setQuestion}
            as='textarea'
            rows={5}
            placeholder={en ? bundleStrings.qaEN.placeholder : bundleStrings.qaDE.placeholder}
            />
            {
              isMobile ? (
                <Button
                onClick={addQuestionToProject}
                block
                appearance='primary'
                className='r-btn r-main-btn'
                >
                  {en ? bundleStrings.qaEN.btn : bundleStrings.qaDE.btn}
                </Button>
              ) : (
                <MainBtn
                content={en ? bundleStrings.qaEN.btn : bundleStrings.qaDE.btn}
                pressed={addQuestionToProject}
                btnColor='blue'
                btnAppearance='primary'
                btnSize='lg'
                isBlock={false} />
              )
            }

        </>
    );
}

const styles = {
    input: {
        marginBottom: 25,
    }
}

export default AskQuestionForm;
