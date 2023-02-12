import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import { Modal } from 'rsuite';
import ModalBody from 'rsuite/esm/Modal/ModalBody';
import ModalFooter from 'rsuite/esm/Modal/ModalFooter';
import ModalHeader from 'rsuite/esm/Modal/ModalHeader';
import ModalTitle from 'rsuite/esm/Modal/ModalTitle';
import MOVIEDE from './docs/movie_de.pdf'

const MovieDocViewerDE = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNum, setPageNum] = useState(1)

  function onDocumentLoadSuccess({numPages}: any) {
    setNumPages(numPages)
  }
  return (
    <Document file={MOVIEDE} onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={pageNum} />
    </Document>
  )
}

export default MovieDocViewerDE
