import React from 'react'
import { useMediaQuery } from '../../../../../../misc/custom-hooks';

interface IProps {en: boolean}

const ProjectSheetPage = (props: IProps) => {
  const {en} = props;
  const isDesktop = useMediaQuery('(min-width: 1600px)');
  return (
    <div className='project-sheet' id='top' style={{minHeight: '100vh', paddingTop: 75, maxWidth: isDesktop ? 1600 : '100%', margin: 'auto'}}>
      <h1 className="title">Sheet</h1>
      <p>
      Commodo consectetur sagittis aliquet, amet eget duis, nunc lobortis sem tempor aliquamid a aliquam. Egestas quis pharetra et, accumsan eleifend consequat, class suspendisse integer sagittis sit ornare nibh. Posuere condimentum ut enim, cras arcu inceptos, ultricies ante sapien nulla fermentum vivamus imperdiet. Primis suspendisse tristique, potenti molestie scelerisque vivamus. Fames vel lorem, tempor dictumst, consequat quisque velit eleifend odio. Libero vitae, diam nullam aliquam. Accumsan phasellus vehicula nulla, aenean arcu blandit ultricies lobortis. Aenean orci, nec volutpat sociosqu neque. Feugiat lectus quis, dictum dictumst, per platea turpis curabitur ut. Tincidunt lacus gravida, iaculis congue, venenatis tortor euismod aptent ante aenean.
      </p>
      <p>
      Commodo consectetur sagittis aliquet, amet eget duis, nunc lobortis sem tempor aliquamid a aliquam. Egestas quis pharetra et, accumsan eleifend consequat, class suspendisse integer sagittis sit ornare nibh. Posuere condimentum ut enim, cras arcu inceptos, ultricies ante sapien nulla fermentum vivamus imperdiet. Primis suspendisse tristique, potenti molestie scelerisque vivamus. Fames vel lorem, tempor dictumst, consequat quisque velit eleifend odio. Libero vitae, diam nullam aliquam. Accumsan phasellus vehicula nulla, aenean arcu blandit ultricies lobortis. Aenean orci, nec volutpat sociosqu neque. Feugiat lectus quis, dictum dictumst, per platea turpis curabitur ut. Tincidunt lacus gravida, iaculis congue, venenatis tortor euismod aptent ante aenean.
      </p>
      <p>
      Commodo consectetur sagittis aliquet, amet eget duis, nunc lobortis sem tempor aliquamid a aliquam. Egestas quis pharetra et, accumsan eleifend consequat, class suspendisse integer sagittis sit ornare nibh. Posuere condimentum ut enim, cras arcu inceptos, ultricies ante sapien nulla fermentum vivamus imperdiet. Primis suspendisse tristique, potenti molestie scelerisque vivamus. Fames vel lorem, tempor dictumst, consequat quisque velit eleifend odio. Libero vitae, diam nullam aliquam. Accumsan phasellus vehicula nulla, aenean arcu blandit ultricies lobortis. Aenean orci, nec volutpat sociosqu neque. Feugiat lectus quis, dictum dictumst, per platea turpis curabitur ut. Tincidunt lacus gravida, iaculis congue, venenatis tortor euismod aptent ante aenean.
      </p>
      <p>
      Commodo consectetur sagittis aliquet, amet eget duis, nunc lobortis sem tempor aliquamid a aliquam. Egestas quis pharetra et, accumsan eleifend consequat, class suspendisse integer sagittis sit ornare nibh. Posuere condimentum ut enim, cras arcu inceptos, ultricies ante sapien nulla fermentum vivamus imperdiet. Primis suspendisse tristique, potenti molestie scelerisque vivamus. Fames vel lorem, tempor dictumst, consequat quisque velit eleifend odio. Libero vitae, diam nullam aliquam. Accumsan phasellus vehicula nulla, aenean arcu blandit ultricies lobortis. Aenean orci, nec volutpat sociosqu neque. Feugiat lectus quis, dictum dictumst, per platea turpis curabitur ut. Tincidunt lacus gravida, iaculis congue, venenatis tortor euismod aptent ante aenean.
      </p>
    </div>
  )
}

export default ProjectSheetPage
