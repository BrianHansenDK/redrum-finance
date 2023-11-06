import React from 'react';
import { Button, Message, useToaster } from 'rsuite';
import { mainColors } from '../../../../themes/colors';
import { get, ref, remove } from 'firebase/database';
import { database } from '../../../../../../firebase';
import { deleteObject } from 'firebase/storage';
import { storage, storageRef } from '../../../../../../firebaseStorage';
import { FirebaseBundle } from '../../../../../../database/Objects';

interface SAndCCarouselProps {
  title: string;
  sources: string[],
  img: boolean,
  authorized: boolean,
  project: FirebaseBundle,
}

const SAndCCarousel: React.FC<SAndCCarouselProps> = ({ title, sources, img, authorized, project }) => {

    const toaster = useToaster()


    const onDelete = async (source: string) => {
        if (confirm(`Are you sure you want to delete this ${img ? 'photo' : 'video'}?`)) {
            const reference = ref(database, `projects/${project.id}/story_and_concept_arts/${img ? 'images' : 'videos'}`)
            let i = 0
            await get(reference).then((snap) => {
                snap.forEach((item) => {
                    if (item.val() == source) {
                        remove(ref(database, `projects/${project.id}/story_and_concept_arts/${img ? 'images' : 'videos'}/${item.key}`)).then(() => {
                            if (!img) {
                                toaster.push(
                                    <Message type='success' showIcon duration={8000} closable>
                                        Video deleted succesfully. <br/>If you still see it, try and refresh your browser.
                                    </Message>
                                )
                            }
                        }).catch((err) => {
                            toaster.push(
                                <Message type='error' showIcon duration={8000} closable>
                                    {err.message}
                                </Message>
                            )
                        })
                    }
                    i += 1
                })
            })
            if (img) {
                const endsource = source
                .replace('https://firebasestorage.googleapis.com/v0/b/redrum-finance.appspot.com/o/images%2Fprojects%2FThe_Basement_Games%2Fstory_and_concept_arts%2F', '')
                .split('.jpg')[0].replace(/%2F/g, ' ')
                deleteObject(storageRef(storage, `images/projects/${project.name?.replace(/ /g, '_')}/story_and_concept_arts/${endsource}.jpg`)).then(() => {
                    toaster.push(
                        <Message type='success' showIcon duration={8000} closable>
                            Image deleted succesfully. <br/>If you still see it, try and refresh your browser.
                        </Message>
                    )
                }).catch((err) => {
                    toaster.push(
                        <Message type='error' showIcon duration={8000} closable>
                            {err.message}
                        </Message>
                    )
                })
            }
        }
    }
  return (
    <div style={{margin: '25px 0'}}>
      <p>{title}</p>
      <div
        style={{
          display: 'flex',
          maxWidth: '100%',
          overflowX: 'scroll',
          minWidth: '320px', // Added min-width,
        }}
      >
        {sources.map((source) => (
            <div style={{position: 'relative', padding: 0, margin: 0, maxWidth: '25%', width: '400px', minWidth: '320px'}}>
                {img ? (
                    <img
                      src={source}
                      alt="Image 1"
                      style={{ width: '100%', height: 225,  }}
                    />
                  ) : (
                    <iframe
                      title="Video"
                      width="400"
                      height="225"
                      style={{
                        width: '100%'
                      }}
                      src={source}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                )}
                {authorized ? (
                    <Button 
                    onClick={() => onDelete(source)}
                    style={{ position: 'absolute', top: '80%', zIndex: 5, width: 120, height: 30, 
                    padding: 0, left: 'calc(50% - 60px)', backgroundColor: mainColors.red, color: mainColors.white}}
                    >
                        Delete
                    </Button>
                ) : null}
            </div>
        ))}
      </div>
    </div>
  );
};

export default SAndCCarousel;
