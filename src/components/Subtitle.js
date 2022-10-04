import '../styles/Subtitle.css'
import Button from './Button'

export default function Subtitle(props) {
  const { dateLocationColor, buttonText, buttonLink, isLocalRedirect } = props

  return (
    <section className='subtitleSection'>
      <div
        className='date-location-field'
        style={{
          color: `${dateLocationColor}`,
        }}
      >
        7-9 of October 2022 - Hilton DoubleTree Conference Salitre
      </div>
      <div>
        <Button
          text={buttonText}
          classButton='button button-white'
          img='enter-icon.png'
          classImg='dot'
          classText='apply-btn-text'
          link={buttonLink}
          isLocalRedirect={isLocalRedirect}
        />
      </div>
    </section>
  )
}