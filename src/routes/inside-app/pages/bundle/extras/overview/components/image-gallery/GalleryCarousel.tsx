import React from 'react'
import { Button, IconButton, Message, useToaster } from 'rsuite';
import LeftBtn from '@rsuite/icons/ArrowLeftLine'
import RightBtn from '@rsuite/icons/ArrowRightLine'
import { useMediaQuery } from '../../../../../../../../misc/custom-hooks';
import { get, ref, remove } from 'firebase/database';
import { auth, database } from '../../../../../../../../firebase';
import { FirebaseBundle } from '../../../../../../../../database/Objects';
import { deleteObject } from 'firebase/storage';
import { storage, storageRef } from '../../../../../../../../firebaseStorage';
import LeftIcon from '@rsuite/icons/ArrowLeftLine';
import RightIcon from '@rsuite/icons/ArrowRightLine';
import { mainCard } from '../../../../../../themes/cardStyles';

interface IProps {
  en: boolean,
  projectName: string,
  gallery: string[],
  isImages?: boolean,
  project: FirebaseBundle,
  overViewPage?: boolean,
}

const GalleryCarousel = (props: IProps) => {
  const {en, projectName, gallery, isImages, project, overViewPage=false} = props;
  const toaster = useToaster();

  const authorized = auth.currentUser?.email === import.meta.env.VITE_ADMIN_EMIAL || auth.currentUser?.email === import.meta.env.VITE_DEV_EMAIL

  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [imageHeights, setImageHeights] = React.useState<(number | null)[]>(new Array(project.image_gallery_urls.length).fill([null]));

  const imageHeightsRef = React.useRef<(number | null)[]>(new Array(project.image_gallery_urls.length).fill(null));
  const length = project.image_gallery_urls.length;

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % length);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : length - 1);
  };

  const onDelete = async (source: string) => {
      if (confirm(`Are you sure you want to delete this ${'photo'}?`)) {
          const reference = ref(database, `projects/${project.id}/image_gallery_urls`)
          await get(reference).then((snap) => {
              snap.forEach((item) => {
                  if (item.val() == source) {
                      remove(ref(database, `projects/${project.id}/gallery/image-${item.key}`)).then(() => {
                      }).catch((err) => {
                          toaster.push(
                              <Message type='error' showIcon duration={8000} closable>
                                  {err.message}
                              </Message>
                          )
                      }).finally(() => {
                          // Update currentIndex if needed
                      if (currentIndex >= project.image_gallery_urls.length - 1) {
                          setCurrentIndex((currentIndex - 1 + project.image_gallery_urls.length) % project.image_gallery_urls.length);
                      }
                      })
                  }
              })
          })
              const endsource = source
              .replace(`https://firebasestorage.googleapis.com/v0/b/redrum-finance.appspot.com/o/images%2Fprojects%2F${project.name!.replace(/ /g,'_')}%2Fgallery%2F`, '')
              .split('.jpg')[0].replace(/%2F/g, ' ')
              deleteObject(storageRef(storage, `images/projects/${project.name?.replace(/ /g, '_')}/gallery/${endsource}.jpg`)).then(() => {
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
  <div style={overViewPage ? {} : mainCard}>

  <div className="carousel-container" style={{ margin: '0', position: 'relative' }}>
    <h3 className='mb-1' style={{ textAlign: 'center' }}>Gallery</h3>
    <div
      style={{
        display: 'flex',
        width: overViewPage ? '80%' : '100%',
        overflow: 'hidden',
        minWidth: '320px',
        margin: 'auto',
        borderRadius: 10,
        boxShadow: '0 5px 10px 0 rgba(0,0,0,0.25)',
        background: `url(${project.image_gallery_urls[currentIndex]})`,
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
        project.image_gallery_urls.map((source, index) => (
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
            <img
              src={project.image_gallery_urls[0]}
              alt={`Image`}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 10,
              }}
              id={`img-0`}
              />
          {authorized ? (
            <Button
            onClick={() => onDelete(project.image_gallery_urls[0])}
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
  </div>
  )
}

export default GalleryCarousel
