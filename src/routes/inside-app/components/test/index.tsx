import { onValue, ref } from 'firebase/database'
import React from 'react'
import { database } from '../../../../firebase'
import PLACEHOLDER from '../../../../components/images/about_us_page_imgs/ab_img3.svg'
import { Link } from 'react-router-dom'
import { Progress } from 'rsuite'
import { numberWithCommas, toFixedIfNecessary } from '../../../../misc/custom-hooks'

const TestProjectsComponent = () => {
    let data: any[] = []
    const reference = ref(database, 'projects/')
    onValue(reference, (snap) => (
        snap.forEach((project) => {
            data.push(project.val())
        })
    ))
    return (
        <div>
            <h1>Titles</h1>
            {
                data.map((item) => (
                    <Link to={`/app/bundle/${item.id.toString()}`}>
                        <div className='bundle mt-2 mb-2 trans-fast'>
                            <div className='bundle-img' style={{ backgroundImage: 'url(' + PLACEHOLDER + ')' }}>

                            </div>
                            <div className='pl-2 pr-2 pb-2'>

                                <div className='d-flex jusify-center align-center' style={{ position: 'relative' }}>
                                    <h1 className='txt-center mt-2' style={{ flex: 1 }}>
                                        {item.name}
                                    </h1>
                                </div>
                                <div className='d-flex align-center pl-3 pr-3 mt-2' style={{ justifyContent: 'space-between' }}>
                                    <p>
                                        Currently invested: {numberWithCommas(item.currentlyInvested)}€
                                    </p>
                                    <p>
                                        Goal: {numberWithCommas(item.goal)}€
                                    </p>
                                </div>
                                <Progress.Line percent={toFixedIfNecessary((item.currentlyInvested / item.goal) * 100, 2)} status='active' />
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default TestProjectsComponent