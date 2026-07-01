// GoalIcon.tsx

const Icon = styled.h1`
  font-size: 6rem;
  cursor: pointer;
`

export default function GoalIcon(props: Props) {
  return (
    <TransparentButton onClick={props.onClick}>
      <Icon>{props.icon}</Icon>
    </TransparentButton>
  )
}

// GoalManager.tsx

type GoalIconContainerProps = { shouldShow: boolean }

const GoalIconContainer = styled.div<GoalIconContainerProps>`
  display: ${(props) => (props.shouldShow ? 'flex' : 'none')};
`

export function GoalManager(props: Props) {
  // ...

  const hasIcon = () => icon != null

  const goal = useAppSelector(selectGoalsMap)[props.goal.id]

  return (
    {/* ... */}
    <GoalIconContainer shouldShow={hasIcon()}>
      <GoalIcon icon={goal.icon} onClick={addIconOnClick} />
    </GoalIconContainer>
    {/* ... */}
  )
}
