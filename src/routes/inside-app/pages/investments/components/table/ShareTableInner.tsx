import React from 'react'
import { FirebaseBundle, FirebaseShare } from '../../../../../../database/Objects'
import ProjectTitle from './ProjectTitle'
import ShareTitles from './ShareTitles';
import { auth, getUserShares } from '../../../../../../firebase';
import RedrumProLoader from '../../../../components/RedrumProLoader';
import ShareRow from './ShareRow';

interface IProps {
  project: FirebaseBundle,
}

const ShareTableInner = (props: IProps) => {
  const {project} = props;
  const [shares, setShares] = React.useState<FirebaseShare[] | null>(null)
  const [sum, setSum] = React.useState<number | null>(null)

  React.useEffect(() => {
    getUserShares(auth.currentUser!.uid, project.id!, setShares, setSum)
  }, [])
  return (
    <>
    {
      shares === null ? (<RedrumProLoader/>) : (
        <div className='mb-2'>
          <ProjectTitle project={project} />
          <table>
            <ShareTitles />
              {
                shares.map((share: FirebaseShare, shareIndex) => (
                  <tbody key={share.id}>
                    { (shares.some(x => x.movie !== share.movie) && shareIndex < project.movies!.length) || shareIndex < project.movies!.length ? (
                      <ShareRow share={share} sum={sum! / project.movies!.length} />
                      ) : null
                    }
                  </tbody>
                ))
              }
          </table>
        </div>
      )
    }

    </>
  )
}

export default ShareTableInner
