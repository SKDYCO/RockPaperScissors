import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameView from '../GameView'
import ResultView from '../ResultView'
import {
  MainContainer,
  PopUpContainer,
  RulesButton,
  RulesContainer,
  CloseButton,
  TopContainer,
  ScoreContainer,
  Paragraph,
  Name,
  UnorderedContainer,
  Unordered,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Game extends Component {
  state = {
    score: 0,
    isGameview: true,
    yourChoice: '',
    computerChoice: '',
    result: '',
    yourUrl: '',
    computerUrl: '',
  }

  wantPlayAgain = () => {
    this.setState({
      isGameview: true,
      yourChoice: '',
      computerChoice: '',
      result: '',
      yourUrl: '',
      computerUrl: '',
    })
  }

  renderSuccessView = () => {
    const {score} = this.state
    this.setState({score: score + 1})
    this.setState({isGameview: false, result: 'win'})
  }

  renderDrawView = () => {
    this.setState({isGameview: false, result: 'draw'})
  }

  renderFailureView = () => {
    const {score} = this.state
    this.setState({score: score - 1})
    this.setState({isGameview: false, result: 'LOSS'})
  }

  inSwitchCase = (y, c) => {
    switch (true) {
      case y === 'ROCK' && c === 'SCISSORS':
        return this.renderSuccessView()
        break
      case y === 'PAPER' && c === 'ROCK':
        return this.renderSuccessView()
        break
      case y === 'SCISSORS' && c === 'PAPER':
        return this.renderSuccessView()
        break
      case y === c:
        return this.renderDrawView()
      default:
        return this.renderFailureView()
    }
  }

  goToSwitch = () => {
    const {yourChoice, computerChoice} = this.state
    this.inSwitchCase(yourChoice, computerChoice)
  }

  getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    this.setState(
      {
        computerChoice: choicesList[randomIndex].id,
        computerUrl: choicesList[randomIndex].imageUrl,
      },
      this.goToSwitch,
    )
    //this.switchCase()
  }

  getYourChoice = (id, image) => {
    this.setState({yourChoice: id, yourUrl: image})
    this.getComputerChoice()
  }

  render() {
    const {
      score,
      isGameview,
      yourUrl,
      computerUrl,
      result,
      yourChoice,
      computerChoice,
    } = this.state
    console.log(yourChoice)
    console.log(computerChoice)
    return (
      <MainContainer>
        <TopContainer>
          <div>
            <Name>ROCK</Name>
            <Name>PAPER</Name>
            <Name>SCISSORS</Name>
          </div>
          <ScoreContainer>
            <Paragraph>Score</Paragraph>
            <Paragraph>{score}</Paragraph>
          </ScoreContainer>
        </TopContainer>
        <PopUpContainer>
          <Popup trigger={<RulesButton>Rules</RulesButton>}>
            {close => (
              <RulesContainer>
                <CloseButton
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </CloseButton>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesContainer>
            )}
          </Popup>
        </PopUpContainer>
        {isGameview && (
          <UnorderedContainer>
            <Unordered>
              {choicesList.map(each => (
                <GameView
                  key={each.id}
                  each={each}
                  getYourChoice={this.getYourChoice}
                />
              ))}
            </Unordered>
          </UnorderedContainer>
        )}
        {!isGameview && (
          <div>
            <ResultView
              yourUrl={yourUrl}
              computerUrl={computerUrl}
              result={result}
              wantPlayAgain={this.wantPlayAgain}
            />
          </div>
        )}
      </MainContainer>
    )
  }
}
export default Game
