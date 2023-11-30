import React from 'react';
import { Button, IconButton, Message, useToaster } from 'rsuite';
import { mainColors } from '../../../../themes/colors';
import { get, ref, remove } from 'firebase/database';
import { database } from '../../../../../../firebase';
import { deleteObject } from 'firebase/storage';
import { storage, storageRef } from '../../../../../../firebaseStorage';
import { FirebaseBundle } from '../../../../../../database/Objects';
import LeftIcon from '@rsuite/icons/ArrowLeftLine';
import RightIcon from '@rsuite/icons/ArrowRightLine';
import { useLocation } from 'react-router-dom';

interface SAndCCarouselProps {
  title: string;
  sources: string[],
  img: boolean,
  authorized: boolean,
  project: FirebaseBundle,
}

const SAndCCarousel: React.FC<SAndCCarouselProps> = ({ title, sources, img, authorized, project }) => {

    const toaster = useToaster();

    const [currentIndex, setCurrentIndex] = React.useState<number>(0);
    const [imageHeights, setImageHeights] = React.useState<(number | null)[]>(new Array(sources.length).fill([null]));

    const imageHeightsRef = React.useRef<(number | null)[]>(new Array(sources.length).fill(null));
    const length = sources.length;

    const nextSlide = () => {
      setCurrentIndex((currentIndex + 1) % length);
    };

    const prevSlide = () => {
      setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : length - 1);
    };

    const onDelete = async (source: string) => {
        if (confirm(`Are you sure you want to delete this ${img ? 'photo' : 'video'}?`)) {
            const reference = ref(database, `projects/${project.id}/story_and_concept_arts/${img ? 'images' : 'videos'}`)
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
                        }).finally(() => {
                            // Update currentIndex if needed
                        if (currentIndex >= sources.length - 1) {
                            setCurrentIndex((currentIndex - 1 + sources.length) % sources.length);
                        }
                        })
                    }
                })
            })
            if (img) {
                const endsource = source
                .replace(`https://firebasestorage.googleapis.com/v0/b/redrum-finance.appspot.com/o/images%2Fprojects%2F${project.name!.replace(/ /g, '_')}%2Fstory_and_concept_arts%2F`, '')
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

    // Function to update image height
    const updateImageHeight = (index: number) => {
        const imgElement = document.getElementById(`img-${index}`);
        if (imgElement) {
            const height = imgElement.clientHeight;
            setImageHeights((prevHeights) => {
                const newHeights = [...prevHeights];
                newHeights[index] = height;
                return newHeights;
            });
        }
    };


    // Update the image heights array whenever the currentIndex changes
    React.useEffect(() => {
        updateImageHeight(currentIndex);
    }, [currentIndex, location]);

    const handleImageLoad = (index: number) => {
        updateImageHeight(index);
    };
    

  return (
    <div className="carousel-container" style={{ margin: '0', position: 'relative' }}>
      <h3 style={{ textAlign: 'center' }}>{title}</h3>
      <div
        style={{
          display: 'flex',
          width: '100%',
          overflow: 'hidden',
          minWidth: '320px',
          margin: 'auto',
          borderRadius: 10,
          boxShadow: '0 5px 10px 0 rgba(0,0,0,0.25)',
          background: `url(${sources[currentIndex]})`,
          position: 'relative',
          height: imageHeights[currentIndex] || 'auto',
          transition: 'height 0.3s ease-in-out', // Add transition for smooth height change
        }}
      >
        <IconButton
          circle
          disabled={length === 1}
          icon={<LeftIcon />}
          onClick={prevSlide}
          style={{
            position: 'absolute',
            top: '50%',
            left: 10,
            transform: 'translateY(-50%)',
            backgroundColor: 'whitesmoke',
            border: 'none',
            zIndex: 2,
          }}
        />
        {length > 1 ? (
          sources.map((source, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                flex: '0 0 100%',
                transition: 'transform 0.3s ease',
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              <div style={{ width: '100%', height: 'auto', margin: 'auto' }}>
                {img ? (
                  <img
                    src={source}
                    alt={`Image ${index + 1}`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 10,
                    }}
                    id={`img-${index}`}
                    onLoad={() => handleImageLoad(index)}
                  />
                ) : (
                    <div style={{ width: '100%', paddingTop: '56.25%', position: 'relative' }}>
                        <iframe
                            title={`Video ${index + 1}`}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                borderRadius: 10,
                            }}
                            src={source}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            id={`img-${index}`}
                            onLoad={() => handleImageLoad(index)}
                        />
                    </div>
                )}
              </div>
              {authorized ? (
                <Button
                  onClick={() => onDelete(source)}
                  style={{
                    position: 'absolute',
                    top: '80%',
                    left: 'calc(50% - 60px)',
                    zIndex: 2,
                    width: 120,
                    height: 30,
                    padding: 0,
                    backgroundColor: 'red',
                    color: 'white',
                  }}
                >
                  Delete
                </Button>
              ) : null}
            </div>
          ))
        ) : (
          <div
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
              margin: 'auto',
              position: 'relative',
            }}
          >
            {img ? (
              <img
                src={sources[0]}
                alt={`Image`}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 10,
                }}
                id={`img-0`}
              />
            ) : (
                <div style={{ width: '100%', paddingTop: '56.25%', position: 'relative' }}>
                    <iframe
                        title={`Video ${1 + 1}`}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                        }}
                        src={sources[0]}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        id={`img-${0}`}
                        onLoad={() => handleImageLoad(0)}
                    />
                </div>
            )}
            {authorized ? (
              <Button
                onClick={() => onDelete(sources[0])}
                style={{
                  position: 'absolute',
                  top: '80%',
                  left: 'calc(50% - 60px)',
                  zIndex: 2,
                  width: 120,
                  height: 30,
                  padding: 0,
                  backgroundColor: 'red',
                  color: 'white',
                }}
              >
                Delete
              </Button>
            ) : null}
          </div>
        )}
        <IconButton
          circle
          disabled={length === 1}
          icon={<RightIcon />}
          onClick={nextSlide}
          style={{
            position: 'absolute',
            top: '50%',
            right: 10,
            transform: 'translateY(-50%)',
            backgroundColor: 'whitesmoke',
            border: 'none',
            zIndex: 2,
          }}
        />
      </div>
    </div>
  );
};

export default SAndCCarousel;
