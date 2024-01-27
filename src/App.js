import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  Main,
  LeftCard,
  Heading,
  Label,
  Input,
  Btn,
  RightCard,
  List,
  Item,
  Para,
} from './style'
import './App.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    userInput: '',
    tag: tagsList[0].optionId,
    taskList: [],
    active: '',
  }

  changeInputText = event => this.setState({userInput: event.target.value})

  changeOption = event => this.setState({tag: event.target.value})

  changeActiveTag = id => {
    const {active} = this.state
    if (active === id) {
      this.setState({active: ''})
    } else {
      this.setState({active: id})
    }
  }

  addToList = event => {
    event.preventDefault()
    const {userInput, tag} = this.state
    const found = tagsList.find(each => each.optionId === tag)
    this.setState(pre => ({
      taskList: [
        ...pre.taskList,
        {id: uuidv4(), userInput, tag, text: found.displayText},
      ],
      userInput: '',
      tag: tagsList[0].optionId,
    }))
  }

  render() {
    const {userInput, tag, taskList, active} = this.state
    console.log(taskList, active)
    const filtered =
      active === '' ? taskList : taskList.filter(each => each.tag === active)
    return (
      <Main>
        <LeftCard>
          <Heading>Create a task!</Heading>
          <form onSubmit={this.addToList}>
            <Label htmlFor="task">Task</Label>
            <Input
              value={userInput}
              id="task"
              type="text"
              placeholder="Enter the task here"
              onChange={this.changeInputText}
            />
            <Label htmlFor="option">Tags</Label>
            <Input
              as="select"
              id="option"
              select
              value={tag}
              onChange={this.changeOption}
            >
              {tagsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </Input>
            <Btn type="submit">Add Task</Btn>
          </form>
        </LeftCard>
        <RightCard>
          <Heading right>Tags</Heading>
          <List>
            {tagsList.map(each => (
              <li key={each.optionId}>
                <Btn
                  right={active !== each.optionId}
                  type="button"
                  onClick={() => this.changeActiveTag(each.optionId)}
                >
                  {each.displayText}
                </Btn>
              </li>
            ))}
          </List>
          <Heading>Tasks</Heading>
          {filtered.length === 0 ? (
            <LeftCard notask>
              <Para>No Tasks Added Yet</Para>
            </LeftCard>
          ) : (
            <List task>
              {filtered.map(each => (
                <Item key={each.id}>
                  <Para>{each.userInput}</Para>
                  <Btn as="p" active>
                    {each.text}
                  </Btn>
                </Item>
              ))}
            </List>
          )}
        </RightCard>
      </Main>
    )
  }
}

export default App
