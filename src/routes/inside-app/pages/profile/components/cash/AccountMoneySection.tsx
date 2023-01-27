import { child, get, onValue, ref } from 'firebase/database'
import React, { Component, useEffect, useState } from 'react'
import { database } from '../../../../../../firebase'
import { profileCardTitle, profileCardUnderTitle } from '../../../../themes/textStyles'
import ProjectDetail from './ProjectDetail'

interface IProps { userId: any }

interface IState {
    investments: Array<any>,
    amount: Number,
    projects: Array<any>
}

class AccountMoneySection extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            investments: [],
            amount: 0,
            projects: []
        }
    }

    componentDidMount(): void {

        let data: any[] = []
        let invested: Number = 0
        let projects: any[] = []

        const reference = ref(database, '/investments')
        onValue(reference, (snap) => {
            snap.forEach((item) => {
                if (item.val().creator == this.props.userId) {
                    data.push(item.val())
                    invested += item.val().amount
                }
            })
            data.map((item) => {
                if (!projects.includes(item.project)) {
                    projects.push(item.project)
                }
            })
            this.setState((_prev) => ({
                investments: data,
            }))
            this.setState((_prev) => ({
                amount: invested
            }))
            this.setState((_prev) => ({
                projects: projects
            }))
        }, { onlyOnce: true })
    }

    render() {
        const _investments = this.state.investments
        const _projects = this.state.projects
        const userId = this.props.userId

        return (
            <div>
                <div>
                    Investments: {_investments.length}
                </div>
                <div>
                    <p>
                        <span>Invested:</span> <span>{this.state.amount.toString()}</span> €
                    </p>
                </div>
                <h1 style={profileCardUnderTitle} className='text-center mb-3'>
                    Projects invested in
                </h1>
                <div style={styles.projectsWrap}>
                    {_projects.map((project) => (
                        <ProjectDetail projectId={project} userId={userId} />
                    ))}
                </div>
            </div>
        )
    }
}

const styles = {
    projectsWrap: {
        display: 'flex',
        justifyContent: 'space-evenly',
    }
}

export default AccountMoneySection