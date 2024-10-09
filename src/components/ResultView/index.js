import {
  ResultContainer,
  Image,
  Button,
  Container,
  Para,
  Heading
} from './styledComponents'

const ResultView = props => {
  const {yourUrl, computerUrl, result, wantPlayAgain} = props
  const onClickButton = () => {
    wantPlayAgain()
  }
  return (
    <div>
      <ResultContainer>
        <div>
          <Para>YOU</Para>
          <Image src={yourUrl} alt="your choice" />
        </div>
        <div>
          <Para>OPPONENT</Para>
          <Image src={computerUrl} alt="opponent choice" />
        </div>
      </ResultContainer>
      <Container>
        {result === 'win' && <para>YOU WON</para>}
        {result === 'LOSS' && <Para>YOU LOSE</Para>}
        {result === 'draw' && <Para>IT IS DRAW</Para>}
        <Button onClick={onClickButton}>Play Again</Button>
      </Container>
    </div>
  )
}
export default ResultView
