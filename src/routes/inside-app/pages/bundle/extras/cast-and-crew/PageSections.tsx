import React, { useState } from 'react';
import { FirebaseBundle } from '../../../../../../database/Objects';
import { get, ref, remove } from 'firebase/database';
import { storage, storageRef } from '../../../../../../firebaseStorage';
import { database } from '../../../../../../firebase';
import { deleteObject } from 'firebase/storage';
import { YOUTUBE } from '../../../../../../misc/custom-hooks';

interface IProps {
  project: FirebaseBundle;
  en: boolean;
  authorized: boolean;
}

const PageSections = (props: IProps) => {
  const { project, en, authorized } = props;
  const [sections, setSections] = useState(project.cast_and_crew_sections || []);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(-1);

  const handleDeleteSection = (index: number) => {
    if (confirm('Press "OK" to delete the section')) {
      deleteSection(index);
    }
  };

  const deleteSection = async (index: number) => {
    if (index >= 0) {
      const section = sections[index];

      // Update the Firebase data
      const sectionsRef = ref(database, `projects/${project.id}/cast_and_crew_sections/`);
      await get(sectionsRef).then((snap) => {
        snap.forEach((item) => {
            if (item.val().title == section.title && item.val().title_german == section.title_german && item.val().body == section.body && item.val().body_german == section.body_german
            && item.val().image_url == section.image_url && item.val().video_url == section.video_url) {
                const deleteReference = ref(database, `projects/${project.id}/cast_and_crew_sections/${item.key}`)
                remove(deleteReference);
            }
        })
      })

      // Delete the image if it exists
      const endsource = section.image_url
                .replace(`https://firebasestorage.googleapis.com/v0/b/redrum-finance.appspot.com/o/images%2Fprojects%2F${project.name!.replace(/ /g, '_')}%2Fcast_and_crew%2F`, '')
                .split('.jpg')[0].replace(/%2F/g, '/').replace(/%20/, ' ')
        deleteObject(storageRef(storage, `images/projects/${project.name?.replace(/ /,'_')}/cast_and_crew/${endsource}.jpg`))

      // Remove the section from the local state
      sections.splice(index, 1);
      setSections([...sections]);

      setSelectedSectionIndex(-1);
    }
  };

  return (
    <div>
      {sections.length > 0 ? (
        sections.map((section, index) => (
          <div key={index} style={{ position: 'relative', margin: '25px auto 150px' }}>
            {authorized && (
              <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                <button onClick={() => handleDeleteSection(index)}>Delete</button>
              </div>
            )}
            {section.body || section.body_german ? (
              <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
                {section.image_url && (
                  <div style={{ flex: 1, maxWidth: '50%' }}>
                    <img src={section.image_url} alt="Section Image" style={{ width: '100%' }} />
                  </div>
                )}
                {section.video_url !== "" ? (
                  <iframe className='mt-1' style={{width: '50%', minHeight: 400}} 
                  src={YOUTUBE(section.video_url)} 
                  title="How to EASILY install Skyrim Script Extender (SKSE)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                ) : null}
                <div style={{ flex: 1, padding: section.image_url === "" && section.video_url === "" ? 0 : '0 20px' }}>
                  <h1>{en ? (section.title || section.title_german) : (section.title_german || section.title)}</h1>
                  <p>{en ? (section.body || section.body_german) : (section.body_german || section.body)}</p>
                </div>
              </div>
            ) : (
              <>
                {section.title || section.title_german ? (
                  <h1>{en ? (section.title || section.title_german) : (section.title_german || section.title)}</h1>
                ) : null}
                {section.image_url !== "" ? (
                  <img src={section.image_url} alt="Section Image" style={{ width: '100%' }} />
                ) : null}
                {section.video_url !== "" ? (
                  <iframe className='mt-1' style={{width: '100%', height: 200}} 
                  src={YOUTUBE(section.video_url)} 
                  title="How to EASILY install Skyrim Script Extender (SKSE)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                ) : null}
              </>
            )}
          </div>
        ))
      ) : (
        <p>No sections available.</p>
      )}
    </div>
  );
};

export default PageSections;






