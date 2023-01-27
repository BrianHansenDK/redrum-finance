import React, { Component, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button, SelectPicker } from 'rsuite';
import { getUsers } from '../../firebase';
import MainBtn from '../inside-app/components/MainBtn';
import { mainColors } from '../inside-app/themes/colors';
import MainLayout from '../layouts/mainLayout';
interface IProps { }


const AccountAdmin: React.FunctionComponent<IProps> = (props) => {
    const [users, setUsers] = useState<any[]>([])
    const [userIds, setUserIds] = useState<any[]>([])
    const [userId, setUserId] = useState(null)
    const navigate = useNavigate()

    let data: any[] = []
    let keyData: any[] = []
    useEffect(() => {
        getUsers(data, keyData, setUsers, setUserIds)
    })
    return (
        <MainLayout openModal={undefined} closeModal={() => null} isVisible={false}>
            <div style={styles.pageWrap}>

                <h1 style={styles.title} className='txt-center'>
                    Admin page
                </h1>
                <div style={styles.searchWrap} className='flex-column'>
                    <SelectPicker
                        onChange={setUserId}
                        data={users.map((user, index) => ({ label: user.username, value: userIds[index] }))}
                        style={{ width: 300 }}
                        placeholder='Search user'
                    />
                    <div style={styles.btnWrap}>

                        <MainBtn
                            content={'Go to user'}
                            pressed={() => navigate(`/accounts-admin/${userId}`)}
                            btnColor={'blue'}
                            btnAppearance={'primary'}
                            btnSize={'lg'}
                            isBlock />
                    </div>
                </div>
                <Outlet />
            </div>
        </MainLayout>
    );
}

const styles = {
    pageWrap: {
        minHeight: '100vh',
        paddingTop: 100,
        backgroundColor: mainColors.blueGrey,
    },
    title: {
        color: mainColors.white,
    },
    searchWrap: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginTop: 50,
    },
    btnWrap: {
        width: 300,
        marginTop: 25,
        marginBottom: 75,
    }
}

export default AccountAdmin;