import React from 'react'
interface IProps {en: boolean}
const Paragraph3: React.FunctionComponent<IProps> = (props) => {
  const {en} = props
  return (
    <div className='juri-paragraph'>
      <h1 className="title">
        3. {en ? 'Copyrights' : 'Urheberrechte'}
      </h1>
      <p className="content">
        {en ? (
          <span>
            All contents presented on this website, i.e. in particular texts, images, photos, graphic representations, music, brands, trademarks, are subject to the standards of German copyright law. The use, reproduction, etc. is subject to the rights of the respective authors or rights managers. Any usenot permitted by German copyright law requires the prior written consent of the respective author or rights administrator. This applies in particular to the copying, editing, translation, storage, processing or reproduction of content in databases or other electronic media and systems. Third-party content and contributions are identified as such. The unauthorized reproduction or distribution of individual content or complete pages is not permitted and is punishable by law. If you wish to use such works, we will be happy to establish contact with the respective copyright holder/rights administrator upon request.
          </span>
        ) : (
          <span>
            Alle auf dieser Webseite dargestellten Inhalte, also insbesondere Texte, Bilder, Fotos, grafische Darstellungen, Musiken, Marken, Warenzeichen, unterliegen den Normen des deutschen Urheberrechts. Die Verwendung, Vervielfältigung usw. unterliegt den Rechten der jeweiligen Urheber bzw. Rechteverwalter. Jede vom deutschen Urheberrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers bzw. Rechteverwalters. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Beiträge Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Wenn Sie solche Werke verwenden wollen, werden wir auf Anfrage gerne den Kontakt zum jeweiligen Urheber/Rechteverwalter herstellen.
          </span>
        )}
      </p>
    </div>
  )
}

export default Paragraph3
