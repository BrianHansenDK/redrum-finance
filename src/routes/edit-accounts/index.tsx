import React, { Component, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button, SelectPicker } from 'rsuite';
import { vanumoColors, vanumoShadows } from '../../admin/theme/vanumoTheme';
import { getUsers } from '../../firebase';
import MainBtn from '../inside-app/components/MainBtn';
import { mainColors } from '../inside-app/themes/colors';
import MainLayout from '../layouts/mainLayout';


const AccountAdmin = () => {
    const [users, setUsers] = useState<any[]>([])
    const [userIds, setUserIds] = useState<any[]>([])
    const [userId, setUserId] = useState(null)
    const navigate = useNavigate()
    const lastIndex = location.pathname.split('/').length - 1

    let data: any[] = []
    let keyData: any[] = []
    useEffect(() => {
        getUsers(data, keyData, setUsers, setUserIds)
    }, [])
    console.log(location.pathname.split('/')[lastIndex])
    return (
        <>
            <div style={styles.pageWrap}>

                <h1 style={styles.title} className='txt-center'>
                    {location.pathname.split('/')[lastIndex] == '' ? 'Users' : 'User'}
                </h1>
                {
                  location.pathname.split('/')[lastIndex] == '' ? (
                    <div style={styles.searchWrap} className='flex-column'>
                    <SelectPicker
                        onChange={setUserId}
                        data={users.map((user, index) => ({ label: user.username, value: userIds[index] }))}
                        style={{ width: 300 }}
                        placeholder='Search user'
                    />
                    <div style={styles.btnWrap}>

                        <Button
                        onClick={() => navigate(`/vanumo/users/${userId}`)}
                        style={styles.btn} appearance='primary'
                        block
                        >
                          Go to user
                        </Button>
                    </div>
                </div>
                  ) : null
                }

                <Outlet />
            </div>
        </>
    );
}

const styles = {
    pageWrap: {
        minHeight: '100vh',
        paddingTop: 100,
        backgroundColor: vanumoColors.dark,
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
    },
    btn: {
      backgroundColor: vanumoColors.main,
      color: mainColors.white,
      fontWeight: '700',
      boxShadow: vanumoShadows.image,
    }
}

export default AccountAdmin;
