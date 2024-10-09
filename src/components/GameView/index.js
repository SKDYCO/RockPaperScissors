import {Image, Button} from './styledComponents'

const GameView = props => {
  const {each, getYourChoice} = props
  const {id, imageUrl} = each
  const name = id.toLowerCase()
  const sendYourChoice = () => {
    getYourChoice(id, imageUrl)
  }
  return (
    <li>
      <Button onClick={sendYourChoice} data-testid={`${name}Button`}>
        <Image src={imageUrl} alt={id} />
      </Button>
    </li>
  )
}
export default GameView
